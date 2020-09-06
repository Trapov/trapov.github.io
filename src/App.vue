<template>
  <div id="app">
    

      <div class="content">

        <router-view></router-view>

      </div>

      <bottom-bar />
  </div>
</template>

<script>
import BottomBar from './components/BottomBar.vue'

export default {
  name: 'App',
  components: {
    BottomBar
  }
}
</script>

<style>

body {
  background-color: black;
  color: whitesmoke;
  font-size: 22px;
  font-family: Consolas,monaco,monospace; 
  margin: 0px;
  padding: 0px;
}

.content {
  padding: 30px;
  transition: background-color 0.5s ease-out;
}

.content h1:hover {
  cursor: pointer;
}
.content h1:hover + * {
  transition: background-color 1s ease-in-out;
  background-color: #32797159;
  border-radius: 2%;
}

</style>
