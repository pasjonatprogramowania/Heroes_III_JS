<template>
  <div class="buy-conteiner">
    <div>
      <div class="buy-navigation">
        <h1>Player {{ playerTourn + 1 }}</h1>
        <div>Gold: {{ playerGold[playerTourn] }}</div>
      </div>
    </div>
    <div class="buy-navigation">
      <h1>Creature Shop</h1>
    </div>
    <div class="buy-grid-container">
      <div
        v-for="(item, index) in creaturesToBuy[playerTourn]"
        :key="index"
        class="buy-grid-item"
      >
        <div>Name: {{ item.creature.getName() }}</div>
        <div>Tire: {{ item.tier }}</div>
        <div>Price: {{ item.price }}</div>
        <div>Owned: {{ item.amount }}</div>
        <img :src="getImgUrl(item.creature.getName())" alt="" />
        <div>
          <button @click="buyCreature(item.creature)">Buy</button>
          <button>Details</button>
        </div>
      </div>
    </div>
    <div class="buy-footer">
      <div>
        <button @click="nextPlayerTurn()">Ready</button>
      </div>
    </div>
  </div>
</template>
<script>
import NacropolisFactory from "../js/creature/necropolisFactory.js";
export default {
  data() {
    return {
      playerTourn: 0,
      playerGold: [2000, 2000],
      creaturesToBuy: [[], []],
    };
  },
  created() {
    this.cretureToBuy();
  },
  methods: {
    cretureToBuy() {
      let nacropolisFactory = new NacropolisFactory();

      for (let i = 1; i <= 7; i++) {
        this.creaturesToBuy[0].push({
          creature: nacropolisFactory.create(false, i),
          tier: i,
          upgraded: false,
          price: i * 100,
          amount: 0,
        });
        this.creaturesToBuy[1].push({
          creature: nacropolisFactory.create(false, i),
          tier: i,
          upgraded: false,
          price: i * 100,
          amount: 0,
        });
      }
      for (let i = 1; i <= 7; i++) {
        this.creaturesToBuy[0].push({
          creature: nacropolisFactory.create(true, i),
          tier: i,
          upgraded: true,
          price: i * 100,
          amount: 0,
        });
        this.creaturesToBuy[1].push({
          creature: nacropolisFactory.create(true, i),
          tier: i,
          upgraded: true,
          price: i * 100,
          amount: 0,
        });
      }
      return this;
    },
    nextPlayerTurn() {
      if (this.playerTourn >= 1) {
        return;
      }
      this.playerTourn++;
    },
    getImgUrl(_creatureName) {
      return `https://raw.githubusercontent.com/pasjonatprogramowania/Heros_III_JS/main/hero_iii_js/src/assets/Castle-img/Unit-Img/${_creatureName}.png`;
    },
    buyCreature(_creatureToBuy) {
      this.creaturesToBuy[this.playerTourn].find((item) => {
        if (JSON.stringify(item.creature) === JSON.stringify(_creatureToBuy)) {
          if (this.playerGold[this.playerTourn] < item.price) {
            return;
          }
          this.playerGold[this.playerTourn] -= item.price;
          item.amount += 1;
        }
      });
    },
    getName() {
      return this.stats.name;
    },
    getAttack() {
      return this.stats.attack;
    },
    getArmor() {
      return this.stats.armor;
    },
    getMaxHp() {
      return this.stats.maxHp;
    },
    getCurrentHp() {
      return this.stats.currentHp;
    },
    getMoveRange() {
      return this.stats.moveRange;
    },
    getMaxRange() {
      return this.stats.maxRange;
    },
    getDamage() {
      return this.stats.damage;
    },
    getAmount() {
      return this.stats.amount;
    },
    getCalculator() {
      return this.stats.calculator;
    },
    getAttackRange() {
      return this.stats.attackRange;
    },
  },
};
</script>
<style>
.buy-conteiner {
  margin-top: 40px;
  margin-bottom: 40px;
}
.buy-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 960px;
  margin: 0 auto;
  gap: 20px;
}
.buy-navigation {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  flex: 0 1 auto;
  align-items: center;
}
.buy-navigation > * {
  padding: 10px;
}
.buy-footer {
  display: flex;
  justify-content: center;
}
.buy-grid-container > * {
}
</style>