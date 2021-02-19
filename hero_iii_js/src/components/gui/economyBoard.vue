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
        v-for="(item, index) in creatureCart[playerTourn]"
        :key="index"
        class="buy-grid-item"
      >
        <div>Name: {{ item.creature.getName() }}</div>
        <div>Tire: {{ item.tier }}</div>
        <div>Price: {{ item.price }}</div>
        <div>Owned: {{ item.amount }}</div>
        <img
          :src="getImgUrl(item.creature.getName())"
          :alt="item.creature.getName()"
        />
        <div>
          <button @click="buyCreature(item.creature)">Buy</button>
          <button @click="sellCreature(item.creature)">Sell</button>
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
import forgeFactory from "../js/creature/forgeFactory.js";
// import necropolisFactory from "../js/creature/necropolisFactory.js";
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["creatureBoard"],
  data() {
    return {
      playerTourn: 0,
      playerGold: [10000, 10000],
      creatureCart: [[], []],
      factory: new forgeFactory(),
    };
  },
  created() {
    this.cretureToBuy();
  },
  methods: {
    cretureToBuy() {
      for (let i = 1; i <= 7; i++) {
        this.creatureCart[0].push({
          creature: this.factory.create(false, i),
          tier: i,
          upgraded: false,
          price: i * 100,
          amount: 0,
        });
        this.creatureCart[1].push({
          creature: this.factory.create(false, i),
          tier: i,
          upgraded: false,
          price: i * 100,
          amount: 0,
        });
      }
      for (let i = 1; i <= 7; i++) {
        this.creatureCart[0].push({
          creature: this.factory.create(true, i),
          tier: i,
          upgraded: true,
          price: i * 100,
          amount: 0,
        });
        this.creatureCart[1].push({
          creature: this.factory.create(true, i),
          tier: i,
          upgraded: true,
          price: i * 100,
          amount: 0,
        });
      }
    },
    nextPlayerTurn() {
      this.creatureCart[this.playerTourn].forEach((item) => {
        if (item.amount) {
          let creatureToAdd = this.factory.create(item.upgraded, item.tier);
          creatureToAdd.stats.amount = item.amount;
          this.creatureBoard[this.playerTourn].push(creatureToAdd);
        }
      });
      if (this.playerTourn >= 1) this.changeToGameBoard();
      this.playerTourn++;
    },
    getImgUrl(_creatureName) {
      return `https://raw.githubusercontent.com/pasjonatprogramowania/Heros_III_JS/main/hero_iii_js/src/assets/Castle-img/Unit-Img/${_creatureName}.png`;
    },
    buyCreature(_creatureToBuy) {
      this.creatureCart[this.playerTourn].find((item) => {
        if (item.creature === _creatureToBuy) {
          if (this.playerGold[this.playerTourn] < item.price) return;
          this.playerGold[this.playerTourn] -= item.price;
          item.amount += 1;
        }
      });
    },
    sellCreature(_creatureToSell) {
      this.creatureCart[this.playerTourn].find((item) => {
        if (item.creature === _creatureToSell) {
          if (item.amount <= 0) return;
          this.playerGold[this.playerTourn] += item.price;
          item.amount -= 1;
        }
      });
    },
    changeToGameBoard() {
      this.$emit("changeToGameBoard", "game-board");
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