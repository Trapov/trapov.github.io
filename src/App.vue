<template>
  <div id="app">

      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>

      <!-- <bottom-bar /> -->
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

body {
  background-color: black;
  color: whitesmoke;
  font-size: 18px;
  font-family: Consolas,monaco,monospace; 
  margin: 0px;
  padding: 0px;
}

.content {
  transition: background-color 0.5s ease-out;
  margin-bottom: 40px;
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
