import {
  Skill,
  SKILL_EFFECT,
  SKILL_TARGET,
  SKILL_TIMING,
} from "src/constants/interface";

export const SKILLS: { [key: number]: Skill } = {
  1: {
    id: 1,
    name: "StartBHealthRandP1",
    description: "On battle start,\nbuff health of a random player by 1.",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.BuffHealth,
    target: SKILL_TARGET.RandomPlayer,
    value: 1,
  },
  2: {
    id: 2,
    name: "StartBAttackRandP1",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.BuffAttack,
    target: SKILL_TARGET.RandomPlayer,
    value: 1,
  },
  3: {
    id: 3,
    name: "StartBHealthRandP2",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.BuffHealth,
    target: SKILL_TARGET.RandomPlayer,
    value: 2,
  },
  4: {
    id: 4,
    name: "StartBAttackRandP2",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.BuffAttack,
    target: SKILL_TARGET.RandomPlayer,
    value: 2,
  },
  5: {
    id: 5,
    name: "StartBHealthRand2P1",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.BuffHealth,
    target: SKILL_TARGET.Random2Players,
    value: 1,
  },
  6: {
    id: 6,
    name: "StartBAttackRand2P1",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.BuffAttack,
    target: SKILL_TARGET.Random2Players,
    value: 1,
  },
  7: {
    id: 7,
    name: "StartDHealthRandE1",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.Damage,
    target: SKILL_TARGET.RandomEnemy,
    value: 1,
  },
  8: {
    id: 8,
    name: "StartDAttackRandE1",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.DebuffAttack,
    target: SKILL_TARGET.RandomEnemy,
    value: 1,
  },
  9: {
    id: 9,
    name: "StartDHealthRand2E1",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.Damage,
    target: SKILL_TARGET.Random2Enemies,
    value: 1,
  },
  10: {
    id: 10,
    name: "StartDAttackRand2E1",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.DebuffAttack,
    target: SKILL_TARGET.Random2Enemies,
    value: 1,
  },
  11: {
    id: 11,
    name: "BeforeADAttackRandE1",
    description: "",
    timing: SKILL_TIMING.BeforeAttack,
    effect: SKILL_EFFECT.DebuffAttack,
    target: SKILL_TARGET.RandomEnemy,
    value: 1,
  },
  12: {
    id: 12,
    name: "StartBAttackFront2",
    description: "Start of battle: Give +2 attack to front unit.",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.BuffAttack,
    target: SKILL_TARGET.InFrontOf,
    value: 2,
  },
  13: {
    id: 13,
    name: "StartBHealthBehind1",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.BuffHealth,
    target: SKILL_TARGET.Behind,
    value: 1,
  },
  14: {
    id: 14,
    name: "StartBHealthFront2",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.BuffHealth,
    target: SKILL_TARGET.InFrontOf,
    value: 2,
  },
  15: {
    id: 15,
    name: "StartBHealthBehind2",
    description: "",
    timing: SKILL_TIMING.StartOfBattle,
    effect: SKILL_EFFECT.BuffHealth,
    target: SKILL_TARGET.Behind,
    value: 2,
  },
};
