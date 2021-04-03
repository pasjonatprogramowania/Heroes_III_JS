import Creature from './creature';
import DamageCalculatorDefault from './damageCalculatorDefault';
import blockCreatureCounterAttack from './blockCreatureCounterAttack';
import CreatureShooting from './creatureShooting';
import DamageCalculatorMultipleyDamage from './damageCalculatorMultipleyDamage';
import DamageCalculatorWithHealingAttacker from './damageCalculatorWithHealingAttacker';
import RegenerateLostHpAfterTournEnd from './regenerateLostHpAfterTournEnd';
import Range from './../range';
import SplashDamageCreatureDecorator from './splashDamageCreatureDecorator';
export default class NecropolisFactory {
    create(_isUpgraded: boolean, _tier: number, _amount: number = 1) {
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
                return new Creature(Skeleton, 5, 4, 6, 4, new Range(1, 3), _amount, new DamageCalculatorDefault(), 1);
            } else if (_tier === 2) {
                return new Creature(WalkingDead, 5, 5, 15, 3, new Range(2, 3), _amount, new DamageCalculatorDefault(), 1);
            } else if (_tier === 3) {
                return new RegenerateLostHpAfterTournEnd(new Creature(Wight, 7, 7, 18, 5, new Range(3, 5), _amount, new DamageCalculatorDefault(), 1));
            } else if (_tier === 4) {
                return new blockCreatureCounterAttack(new Creature(Vampier, 10, 9, 30, 6, new Range(5, 8), _amount, new DamageCalculatorDefault(), 1));
            } else if (_tier === 5) {
                return new blockCreatureCounterAttack(new CreatureShooting(new Creature(Lich, 13, 10, 30, 6, new Range(11, 13), 1, new DamageCalculatorDefault(), 100)));
            } else if (_tier === 6) {
                return new Creature(BlackKnight, 16, 16, 120, 7, new Range(15, 30), _amount, new DamageCalculatorMultipleyDamage(20, 2), 1);
            } else if (_tier === 7) {
                return new Creature(BoneDragon, 17, 15, 150, 9, new Range(25, 30), _amount, new DamageCalculatorDefault(), 1);
            }
        } else {
            if (_tier === 1) {
                return new Creature(SkeletonWarrior, 6, 6, 6, 5, new Range(1, 3), _amount, new DamageCalculatorDefault(), 1);
            } else if (_tier === 2) {
                return new Creature(Zombie, 5, 5, 20, 4, new Range(2, 3), _amount, new DamageCalculatorDefault(), 1);
            } else if (_tier === 3) {
                return new RegenerateLostHpAfterTournEnd(new Creature(Wraith, 7, 7, 18, 7, new Range(3, 5), _amount, new DamageCalculatorDefault(), 1));
            } else if (_tier === 4) {
                return new Creature(VampireLord, 10, 10, 40, 9, new Range(5, 8), _amount, new DamageCalculatorWithHealingAttacker(100), 1);
            } else if (_tier === 5) {
                return new SplashDamageCreatureDecorator(new blockCreatureCounterAttack(new CreatureShooting(new Creature(PowerLich, 13, 10, 40, 7, new Range(11, 15), 1, new DamageCalculatorDefault(), 100))), [
                    [false, true, false],
                    [true, true, true],
                    [false, true, false],
                ]);
            } else if (_tier === 6) {
                return new Creature(DreadKnight, 18, 18, 120, 9, new Range(15, 30), 1, new DamageCalculatorMultipleyDamage(20, 2), 1);
            } else if (_tier === 7) {
                return new Creature(GhostDragon, 19, 17, 200, 14, new Range(25, 50), 1, new DamageCalculatorDefault(), 1);
            }
        }
    }
    createdDefCreature() {
        return new Creature('Default', 5, 5, 100, 5, new Range(5, 5), 1, new DamageCalculatorDefault(), 1);
    }
    // splash3x3() {
    //     let range = [
    //         [true, true, true],
    //         [true, true, true],
    //         [true, true, true],
    //     ];
    //     return Array.from(range);
    // }
}
