"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = __importDefault(require("./creature"));
const damageCalculatorDefault_1 = __importDefault(require("./damageCalculatorDefault"));
const range_1 = __importDefault(require("../range"));
const damageCalaculatorReduceDistanceDamage_1 = __importDefault(require("./damageCalaculatorReduceDistanceDamage"));
const splashDamageCreatureDecorator_1 = __importDefault(require("./splashDamageCreatureDecorator"));
const regenerateConstantHealthValueOnTournEnd_1 = __importDefault(require("./regenerateConstantHealthValueOnTournEnd"));
class ForgeFactory {
    create(_isUpgraded, _tier) {
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
                return new creature_1.default(Tarczownik, 2, 5, 8, 3, new range_1.default(1, 3), 1, new damageCalaculatorReduceDistanceDamage_1.default(15), 1);
            }
            else if (_tier === 2) {
                return new creature_1.default(Awanturnik, 5, 5, 16, 5, new range_1.default(2, 5), 1, new damageCalculatorDefault_1.default(), 1);
            }
            else if (_tier === 3) {
                return new splashDamageCreatureDecorator_1.default(new creature_1.default(Podpalacz, 10, 5, 22, 6, new range_1.default(5, 6), 1, new damageCalculatorDefault_1.default(), 1), [
                    [false, true, false],
                    [false, true, false],
                    [false, false, false],
                ]);
            }
            else if (_tier === 4) {
                return new creature_1.default(Pijawka, 9, 9, 25, 9, new range_1.default(6, 9), 1, new damageCalculatorDefault_1.default(), 1);
            }
            else if (_tier === 5) {
                return new creature_1.default(Kanonier, 15, 8, 50, 4, new range_1.default(11, 16), 1, new damageCalculatorDefault_1.default(), 100);
            }
            else if (_tier === 6) {
                return new creature_1.default(PodniebnyMocarz, 15, 16, 120, 6, new range_1.default(15, 20), 1, new damageCalculatorDefault_1.default(), 1);
            }
            else if (_tier === 7) {
                return new regenerateConstantHealthValueOnTournEnd_1.default(new creature_1.default(Jugernaut, 17, 17, 160, 8, new range_1.default(35, 45), 1, new damageCalculatorDefault_1.default(), 1), 30);
            }
        }
        else {
            if (_tier === 1) {
                return new creature_1.default(ElitarnyTarczownik, 3, 6, 8, 5, new range_1.default(2, 3), 1, new damageCalaculatorReduceDistanceDamage_1.default(30), 1);
            }
            else if (_tier === 2) {
                return new creature_1.default(Najemnik, 8, 6, 18, 6, new range_1.default(2, 6), 1, new damageCalculatorDefault_1.default(), 1);
            }
            else if (_tier === 3) {
                return new splashDamageCreatureDecorator_1.default(new creature_1.default(Piromaniak, 10, 7, 22, 8, new range_1.default(5, 6), 1, new damageCalculatorDefault_1.default(), 1), [
                    [false, true, false],
                    [false, true, false],
                    [false, false, false],
                ]);
            }
            else if (_tier === 4) {
                return new splashDamageCreatureDecorator_1.default(new creature_1.default(Wysysaczdusz, 9, 9, 25, 13, new range_1.default(6, 9), 1, new damageCalculatorDefault_1.default(), 1), [
                    [false, true, false],
                    [true, true, true],
                    [false, true, false],
                ]);
            }
            else if (_tier === 5) {
                return new creature_1.default(Bombardier, 15, 12, 60, 5, new range_1.default(12, 17), 1, new damageCalculatorDefault_1.default(), 100);
            }
            else if (_tier === 6) {
                return new creature_1.default(PodniebnyRycerz, 15, 18, 120, 8, new range_1.default(20, 25), 1, new damageCalculatorDefault_1.default(), 1);
            }
            else if (_tier === 7) {
                return new regenerateConstantHealthValueOnTournEnd_1.default(new creature_1.default(Niszczyciel, 25, 25, 240, 11, new range_1.default(35, 45), 1, new damageCalculatorDefault_1.default(), 1), 30);
            }
        }
    }
    createdDefCreature() {
        return new creature_1.default('Default', 5, 5, 100, 5, new range_1.default(100, 100), 1, new damageCalculatorDefault_1.default(), 1);
    }
}
exports.default = ForgeFactory;
