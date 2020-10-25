<template>
  <container fluid column align-items="center">
    <h1>
      number-to-expressions
    </h1>
    <container class="if-hover-hightlight" alignItems="center" justify-content="center" fluid column :size="6">
      <div> 
        It finds math expressions of a given number with given complexity.
      </div>
      <div>
        I made a bet that I could do it quickly.
      </div>
    </container>
  </container>
  
</template>

<script>
import Container from '../../components/Container';

export default {
  components: {
    Container
  }
}
</script>
<style>
</style>