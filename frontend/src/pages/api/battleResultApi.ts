// import { kv } from "@vercel/kv";
// import { kv } from "../../stores/kv";
import { NextApiRequest, NextApiResponse } from "next";
import { RESULT } from "src/constants/interface";
import { readContract } from "@wagmi/core";
import { PlasmaBattleAlphaAbi } from "src/constants/plasmaBattleAlphaAbi";
import addresses from "src/constants/addresses";
import BattleManager from "src/utils/old_battleManager";
import { type Unit } from "src/constants/interface";
import { ethers } from "ethers";
import { enemyUnitsByStage } from "src/constants/init";
import { units } from "src/constants/units";
import { convertUnitIdsToNumber } from "src/utils/Utils";
import { createConfig, http } from "wagmi";
import { scrollSepolia, zkSyncSepoliaTestnet, base } from "wagmi/chains";

export const getWagmiConfig = (chainId: number) => {
  switch (chainId) {
    case zkSyncSepoliaTestnet.id:
      return createConfig({
        chains: [zkSyncSepoliaTestnet],
        transports: {
          [zkSyncSepoliaTestnet.id]: http(
            zkSyncSepoliaTestnet.rpcUrls.default.http[0]
          ),
        },
      });
    case scrollSepolia.id:
      return createConfig({
        chains: [scrollSepolia],
        transports: {
          [scrollSepolia.id]: http(scrollSepolia.rpcUrls.default.http[0]),
        },
      });
    case base.id:
      return createConfig({
        chains: [base],
        transports: {
          [base.id]: http(base.rpcUrls.default.http[0]),
        },
      });
    default:
      throw new Error("chainId is not found");
  }
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("battleRESULTApi start");

  if (request.method === "GET") {
    console.log("request.query", request.query);
    const chainId = request.query.chainId as string;
    const battleId = request.query.battleId as string;
    const address = request.query.address as string;

    const config = getWagmiConfig(Number(chainId));
    const contractAddress = addresses(Number(chainId))!
      .PlasmaBattleAlpha as `0x${string}`;
    console.log("contractAddress", contractAddress);

    const _resStage = await readContract(config, {
      abi: PlasmaBattleAlphaAbi,
      address: contractAddress,
      functionName: "playerStage",
      args: [address as `0x${string}`],
    });
    console.log("_resStage", _resStage);

    const _resPlayerUnitIds = await readContract(config, {
      abi: PlasmaBattleAlphaAbi,
      address: contractAddress,
      functionName: "getPlayerUnits",
      args: [address as `0x${string}`],
    });
    console.log("_resData", _resPlayerUnitIds);

    //BitInt to Number
    const playerUnitIds = convertUnitIdsToNumber(_resPlayerUnitIds as BigInt[]);
    const stage = Number(_resStage);

    //Response parameter
    let _result = 0;

    //Construct battleClass
    let playerMembersUnits: Unit[] = playerUnitIds.map((id) => units[id]);
    let enemyMembersUnits: Unit[] = enemyUnitsByStage[stage].map(
      (id) => units[id]
    );

    console.log("playerMembersUnits", playerMembersUnits);
    console.log("enemyMembersUnits", enemyMembersUnits);

    const battleClass: BattleManager = new BattleManager(
      playerMembersUnits,
      enemyMembersUnits
    );

    //Start of battle
    await battleClass.startOfBattle();
    _result = await battleClass.judge();
    if (_result !== RESULT.NOT_YET) {
      return response.status(200).json({ result: _result });
    }

    let loopCount = 0;
    while (true) {
      console.log("Start beforeAttack: ", loopCount);
      await battleClass.beforeAttack();
      _result = await battleClass.judge();
      if (_result !== RESULT.NOT_YET) break;

      console.log("Start attacking: ", loopCount);
      await battleClass.attacking();
      _result = await battleClass.judge();
      if (_result !== RESULT.NOT_YET) break;

      loopCount++;
    }

    // Assuming you have the owner's private key

    // Assuming you have the private key and the battleId and result
    const privateKey = process.env.PRIVATE_KEY!;
    const signer = new ethers.Wallet(privateKey);
    console.log("signer", signer);
    console.log("result", BigInt(_result));
    const messageHash = ethers.solidityPackedKeccak256(
      ["uint", "uint8"],
      [battleId, _result]
    );
    console.log("messageHash", messageHash);
    const signature = await signer.signMessage(ethers.getBytes(messageHash));

    console.log("signature", signature);

    return response
      .status(200)
      .json({ battleId: battleId, result: _result, signature: signature });
  }
}
