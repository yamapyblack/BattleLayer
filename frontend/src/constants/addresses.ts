import { scrollSepolia, zkSyncSepoliaTestnet, base } from "wagmi/chains";

const _addresses: { [chainId: number]: { [key: string]: string } } = {
  [zkSyncSepoliaTestnet.id]: {
    PlasmaBattleAlpha: "0x3979d863D02Ce04fc5B8932537b9f69c402B2911",
  },
  [scrollSepolia.id]: {
    PlasmaBattleAlpha: "0x8e0337e51077F7493E67D126270AA9eDcC32f092",
  },
  [base.id]: {
    PlasmaBattleAlpha: "0x37f6c278888e3A826A7341727D06c062C67dea1A",
  },
};

const addresses = (chainId: number) => {
  const addresses_ = _addresses[chainId];
  if (!addresses_) {
    console.error(`addresses not found for chainId: ${chainId}`);
  }
  return addresses_;
};

export default addresses;
