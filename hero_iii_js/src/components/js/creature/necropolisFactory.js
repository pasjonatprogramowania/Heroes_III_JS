"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = __importDefault(require("./creature"));
const damageCalculatorDefault_1 = __importDefault(require("./damageCalculatorDefault"));
const blockCreatureCounterAttack_1 = __importDefault(require("./blockCreatureCounterAttack"));
const creatureShooting_1 = __importDefault(require("./creatureShooting"));
const damageCalculatorMultipleyDamage_1 = __importDefault(require("./damageCalculatorMultipleyDamage"));
const damageCalculatorWithHealingAttacker_1 = __importDefault(require("./damageCalculatorWithHealingAttacker"));
const regenerateLostHpAfterTournEnd_1 = __importDefault(require("./regenerateLostHpAfterTournEnd"));
const range_1 = __importDefault(require("./../range"));
const splashDamageCreatureDecorator_1 = __importDefault(require("./splashDamageCreatureDecorator"));
class NecropolisFactory {
    create(_isUpgraded, _tier) {
        const Skeleton = 'Skeleton';
        const WalkingDead = 'WalkingDead';
        const Wight = 'Wight';
        const Vampier = 'Vampire';
        const Lich = 'Lich';
        const BlackKnight = 'BlackKnight';
        const BoneDragon = 'BoneDragon';
        const SkeletonWarrior = 'SkeletonWarrior';
        const Zombie = 'Zombie';
        const Wraith = 'Wraith';
        const VampireLord = 'VampireLord';
        const PowerLich = 'PowerLich';
        const DreadKnight = 'DreadKnight';
        const GhostDragon = 'GhostDragon';
        if (_isUpgraded === false) {
            if (_tier === 1) {
                return new creature_1.default(Skeleton, 5, 4, 6, 4, new range_1.default(1, 3), 1, new damageCalculatorDefault_1.default(), 1);
            }
            else if (_tier === 2) {
                return new creature_1.default(WalkingDead, 5, 5, 15, 3, new range_1.default(2, 3), 1, new damageCalculatorDefault_1.default(), 1);
            }
            else if (_tier === 3) {
                return new regenerateLostHpAfterTournEnd_1.default(new creature_1.default(Wight, 7, 7, 18, 5, new range_1.default(3, 5), 1, new damageCalculatorDefault_1.default(), 1));
            }
            else if (_tier === 4) {
                return new blockCreatureCounterAttack_1.default(new creature_1.default(Vampier, 10, 9, 30, 6, new range_1.default(5, 8), 1, new damageCalculatorDefault_1.default(), 1));
            }
            else if (_tier === 5) {
                return new blockCreatureCounterAttack_1.default(new creatureShooting_1.default(new creature_1.default(Lich, 13, 10, 30, 6, new range_1.default(11, 13), 1, new damageCalculatorDefault_1.default(), 100)));
            }
            else if (_tier === 6) {
                return new creature_1.default(BlackKnight, 16, 16, 120, 7, new range_1.default(15, 30), 1, new damageCalculatorMultipleyDamage_1.default(20, 2), 1);
            }
            else if (_tier === 7) {
                return new creature_1.default(BoneDragon, 17, 15, 150, 9, new range_1.default(25, 30), 1, new damageCalculatorDefault_1.default(), 1);
            }
        }
        else {
            if (_tier === 1) {
                return new creature_1.default(SkeletonWarrior, 6, 6, 6, 5, new range_1.default(1, 3), 1, new damageCalculatorDefault_1.default(), 1);
            }
            else if (_tier === 2) {
                return new creature_1.default(Zombie, 5, 5, 20, 4, new range_1.default(2, 3), 1, new damageCalculatorDefault_1.default(), 1);
            }
            else if (_tier === 3) {
                return new regenerateLostHpAfterTournEnd_1.default(new creature_1.default(Wraith, 7, 7, 18, 7, new range_1.default(3, 5), 1, new damageCalculatorDefault_1.default(), 1));
            }
            else if (_tier === 4) {
                return new creature_1.default(VampireLord, 10, 10, 40, 9, new range_1.default(5, 8), 1, new damageCalculatorWithHealingAttacker_1.default(100), 1);
            }
            else if (_tier === 5) {
                return new splashDamageCreatureDecorator_1.default(new blockCreatureCounterAttack_1.default(new creatureShooting_1.default(new creature_1.default(PowerLich, 13, 10, 40, 7, new range_1.default(11, 15), 1, new damageCalculatorDefault_1.default(), 100))), [
                    [false, true, false],
                    [true, true, true],
                    [false, true, false],
                ]);
            }
            else if (_tier === 6) {
                return new creature_1.default(DreadKnight, 18, 18, 120, 9, new range_1.default(15, 30), 1, new damageCalculatorMultipleyDamage_1.default(20, 2), 1);
            }
            else if (_tier === 7) {
                return new creature_1.default(GhostDragon, 19, 17, 200, 14, new range_1.default(25, 50), 1, new damageCalculatorDefault_1.default(), 1);
            }
        }
    }
    createdDefCreature() {
        return new creature_1.default('Default', 5, 5, 100, 5, new range_1.default(5, 5), 1, new damageCalculatorDefault_1.default(), 1);
    }
}
exports.default = NecropolisFactory;
