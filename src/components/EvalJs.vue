<template>
  <span ref="hovered" v-if="hover" class="hover-on-top">
    {{'💻' + evalResult}}
  </span>
  <span     
    @mousemove="moveHovered"
    @mouseover="hover = true"
    @mouseleave="hover = false" 
  class="hover-to-show-the-result">
    {{evalExpression}}
  </span>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    }
  },
  props: [
    'evalExpression'
  ],
  computed: {
    evalResult() {
      return eval(this.evalExpression);
    }
  },
  methods: {
    moveHovered(e) {
      this.$refs.hovered.style["margin-left"] = + e.offsetX - 100 + "px";
    }
  }
}
</script>

<style scoped>
  .hover-on-top {
    z-index: 3;
    position: absolute;
    margin: -55px 0px 0px 0px;
    padding: 10px;
    color: whitesmoke !important;
    background-color: black;
    border-style: dashed;
  }
  .hover-to-show-the-result:hover {
    color: whitesmoke !important;
    background-color: brown;
  }
  .hover-to-show-the-result {
    cursor: pointer;
    color: darkorchid;
  }
</style>