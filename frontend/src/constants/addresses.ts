import {
  scrollSepolia,
  zkSyncSepoliaTestnet,
  base,
  baseSepolia,
} from "wagmi/chains";

const _addresses: { [chainId: number]: { [key: string]: string } } = {
  [zkSyncSepoliaTestnet.id]: {
    PlasmaBattleAlpha: "0x3979d863D02Ce04fc5B8932537b9f69c402B2911",
  },
  [scrollSepolia.id]: {
    PlasmaBattleAlpha: "0xBafC090B1f514792Ab15336c0bc180f230415bF1",
  },
  [base.id]: {
    PlasmaBattleAlpha: "0x37f6c278888e3A826A7341727D06c062C67dea1A",
  },
  [baseSepolia.id]: {
    PlasmaBattleAlpha: "0x4fC5E5C90BA03b71b81d58B9eA5d002cD3CB9797",
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
