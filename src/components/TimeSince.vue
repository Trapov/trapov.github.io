<template>
  <span v-if="hover" class="hover-on-top">
    {{'Born ' + when.toLocaleString()}}
  </span>
  <span     
    @mouseover="hover = true"
    @mouseleave="hover = false" 
  class="hover-to-show-the-date">
    {{timeSince}}
  </span>
</template>

<script>
export default {
  name: "TimeSince",
  data() {
    return {
      hover: false,
      msSince: (new Date()).valueOf()
    }
  },
  mounted() {
    setInterval(() => {
       this.msSince =  (new Date()).valueOf()
    }, 60000);
  },
  computed: {
    timeSince() {
        var obj = {};
        obj._milliseconds = this.msSince - this.when.valueOf();
        obj.milliseconds = obj._milliseconds % 1000;
        obj._seconds = (obj._milliseconds - obj.milliseconds) / 1000;
        obj.seconds = obj._seconds % 60;
        obj._minutes = (obj._seconds - obj.seconds) / 60;
        obj.minutes = obj._minutes % 60;
        obj._hours = (obj._minutes - obj.minutes) / 60;
        obj.hours = obj._hours % 24;
        obj._days = (obj._hours - obj.hours) / 24;
        obj.days = obj._days % 365;
        obj.years = (obj._days - obj.days) / 365;
        return `${obj.years} years ${obj.days} days ${obj.hours} hours and ${obj.minutes} minutes`;
    }
  },
  props: [
    'when'
  ]
}
</script>

<style scoped>
  .hover-on-top {
    z-index: 3;
    position: absolute;
    margin: -55px 0px 0px 28px;
    padding: 10px;
    background-color: black;
    border-style: dashed;
  }
  .hover-to-show-the-date:hover {
    color: whitesmoke;
    background-color: brown;
  }
  .hover-to-show-the-date {
    cursor: pointer;
    font-style: italic;
    color: darkorchid;
  }
</style>