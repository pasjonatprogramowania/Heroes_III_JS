<template>

</template>

<script>
import Board from '../board.vue'
export default {
    data() {
        return {
            board:new Board(),
            creature:new Creature(),
            unitTestPoint:new Point(0,0)    
        }
    },
    methods: {
        mapShouldHaveKeyAndValue(){
            this.board.add(this.unitTestPoint,this.creature)
            if (this.board.getVal(this.unitTestPoint) === undefined) {
                throw 'Exception: => Creature dla tego pola zwraca undefined'
            }
        }
    },
}
</script>

<style>

</style>