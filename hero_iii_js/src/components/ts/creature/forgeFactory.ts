import Creature from './creature';
import DamageCalculatorDefault from './damageCalculatorDefault';
import Range from '../range';
import DamageCalaculatorReduceDistanceDamage from './damageCalaculatorReduceDistanceDamage';
import SplashDamageCreatureDecorator from './splashDamageCreatureDecorator';
import RegenerateConstantHealthValueOnTournEnd from './regenerateConstantHealthValueOnTournEnd';
export default class ForgeFactory {
    create(_isUpgraded: boolean, _tier: number, _amount: number = 1) {
        const Tarczownik = 'Tarczownik';
        const Awanturnik = 'Awanturnik';
        const Podpalacz = 'Podpalacz';
        const Pijawka = 'Pijawka';
        const Kanonier = 'Kanonier';
        const PodniebnyMocarz = 'PodniebnyMocarz';
        const Jugernaut = 'Jugernaut';

        const ElitarnyTarczownik = 'ElitarnyTarczownik';
        const Najemnik = 'Najemnik';
        const Piromaniak = 'Piromaniak';
        const Wysysaczdusz = 'WysysaczDusz';
        const Bombardier = 'Bombardier';
        const PodniebnyRycerz = 'PodniebnyRycerz';
        const Niszczyciel = 'Niszczyciel';
        if (_isUpgraded === false) {
            if (_tier === 1) {
                return new Creature(Tarczownik, 2, 5, 8, 3, new Range(1, 3), _amount, new DamageCalaculatorReduceDistanceDamage(15), 1);
            } else if (_tier === 2) {
                return new Creature(Awanturnik, 5, 5, 16, 5, new Range(2, 5), _amount, new DamageCalculatorDefault(), 1);
            } else if (_tier === 3) {
                return new SplashDamageCreatureDecorator(new Creature(Podpalacz, 10, 5, 22, 6, new Range(5, 6), _amount, new DamageCalculatorDefault(), 1), [
                    [false, true, false],
                    [false, true, false],
                    [false, false, false],
                ]);
            } else if (_tier === 4) {
                return new Creature(Pijawka, 9, 9, 25, 9, new Range(6, 9), _amount, new DamageCalculatorDefault(), 1);
            } else if (_tier === 5) {
                return new Creature(Kanonier, 15, 8, 50, 4, new Range(11, 16), _amount, new DamageCalculatorDefault(), 100);
            } else if (_tier === 6) {
                return new Creature(PodniebnyMocarz, 15, 16, 120, 6, new Range(15, 20), _amount, new DamageCalculatorDefault(), 1);
            } else if (_tier === 7) {
                return new RegenerateConstantHealthValueOnTournEnd(new Creature(Jugernaut, 17, 17, 160, 8, new Range(35, 45), _amount, new DamageCalculatorDefault(), 1), 30);
            }
        } else {
            if (_tier === 1) {
                return new Creature(ElitarnyTarczownik, 3, 6, 8, 5, new Range(2, 3), _amount, new DamageCalaculatorReduceDistanceDamage(30), 1);
            } else if (_tier === 2) {
                return new Creature(Najemnik, 8, 6, 18, 6, new Range(2, 6), _amount, new DamageCalculatorDefault(), 1);
            } else if (_tier === 3) {
                return new SplashDamageCreatureDecorator(new Creature(Piromaniak, 10, 7, 22, 8, new Range(5, 6), _amount, new DamageCalculatorDefault(), 1), [
                    [false, true, false],
                    [false, true, false],
                    [false, false, false],
                ]);
            } else if (_tier === 4) {
                return new SplashDamageCreatureDecorator(new Creature(Wysysaczdusz, 9, 9, 25, 13, new Range(6, 9), _amount, new DamageCalculatorDefault(), 1), [
                    [false, true, false],
                    [true, true, true],
                    [false, true, false],
                ]);
            } else if (_tier === 5) {
                return new Creature(Bombardier, 15, 12, 60, 5, new Range(12, 17), _amount, new DamageCalculatorDefault(), 100);
            } else if (_tier === 6) {
                return new Creature(PodniebnyRycerz, 15, 18, 120, 8, new Range(20, 25), _amount, new DamageCalculatorDefault(), 1);
            } else if (_tier === 7) {
                return new RegenerateConstantHealthValueOnTournEnd(new Creature(Niszczyciel, 25, 25, 240, 11, new Range(35, 45), _amount, new DamageCalculatorDefault(), 1), 30);
            }
        }
    }
    createdDefCreature() {
        return new Creature('Default', 5, 5, 100, 5, new Range(100, 100), 1, new DamageCalculatorDefault(), 1);
    }
}
