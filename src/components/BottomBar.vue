<template>
  <div class="nav-bottombar">
    <router-link to="/about-me">
      @me
    </router-link>
    <router-link to="/my-projects">
      @projects
    </router-link>
    <router-link to="/where-i-worked">
      @exp
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
        
  .nav-bottombar {
    background-color: black;
    position: fixed;
    display: flex;
    padding: 10px;
    justify-content: space-around;
    border-top-style: dotted;
    bottom: 0;
    width: 100%;
  }

  .nav-bottombar a {
    color: whitesmoke;
    text-decoration: none;
    font-size: x-large;
    display: block;
  }
  
  .nav-bottombar a:hover {
    color: greenyellow;
    text-decoration: underline;
  }

</style>