# BattleLayer



BattleLayer offers both high security and a good user experience with a hybrid engine combining onchain and offchain, making blockchain gaming accessible to developers and mass users.

## Demo

[https://battle-layer.vercel.app/](https://battle-layer.vercel.app/)

## Description

**What is the BattleLayer?**

BattleLayer is a game layer equipped with a Hybrid Engine that incorporates both Onchain and Offchain functionalities. This system enables developers to create high-security blockchain games with an good user experience.

**What is the Hybrid Engine?**

We believe that the currently prevalent offchain games hold inherent centralization risks. However, creating fully onchain games leads to poor user experiences. Therefore, we have devised a system that combines both offchain and onchain.

Our approach is inspired by Plasma, which has recently gained renewed attention on Ethereum L2. Plasma writes the final state to L1 while processing the intermediate steps offchain. Similarly, we designed our system to record the battle results onchain, while the process itself is handled offchain.

In the Hybrid Engine, users will only write the initial state, final state, and random number seed onchain.

While this does not entirely eliminate centralization risks, it significantly limits the risk scope. In exchange, we gain an infinitely scalable game.

Currently, the Hybrid Engine can be applied only to auto-battle style games.

**The Potential of Hybrid Games to Reach Mass Users**

BattleLayer is fully open-source, allowing any developer to utilize this system. Take AutoChess, for instance: the game is popular and still played on various platforms. Playing such a game with owned assets would offer a more exciting gaming experience.

Hybrid Games can expand the potential of blockchain games, reaching a mass that has yet to experience blockchain gaming.

## Contract addresses(base sepolia)

Battle

[https://basescan.org/address/0x37f6c278888e3a826a7341727d06c062c67dea1a](https://basescan.org/address/0x37f6c278888e3a826a7341727d06c062c67dea1a)

## Contract Deployment

```
cd onchain
```

Enviroment

.env (This is admin signer address)

```
WALLET_PRIVATE_KEY=0x...
```

Deploy

```
forge script script/PlasmaBattleAlpha.s.sol --broadcast --fork-url https://sepolia.base.org verifyContract --verify --etherscan-api-key xxxxx(API_KEY)
```

## Frontend

```
cd frontend
```

Enviroment

.env (Same as onchain's signer address)

```
PRIVATE_KEY=0x...
```

Install

```
bun install
```

Start

```
bun run dev
```

