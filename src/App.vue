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

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

body::-webkit-scrollbar {
  width: 0.4em;
  height: 0.4em;
}

body::-webkit-scrollbar-thumb:hover {
  background-color: darkorchid;
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 8%;
}

body::-webkit-scrollbar-track {
  background-color: darkgrey;
}

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
}

.content {
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
