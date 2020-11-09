<template>
  <div></div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Point extends Vue {
  x;
  y;
  created(aX, aY) {
    this.x = aX;
    this.y = aY;
  }
}
</script>
<style></style>