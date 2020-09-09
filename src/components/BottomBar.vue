<template>
  <div class="nav-bottombar">
    <router-link to="/">
      📝
    </router-link>
    <router-link to="/my-projects">
      👩‍💻
    </router-link>
    <router-link to="/where-i-worked">
      ⚒
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
    flex-direction: row;
    justify-content: flex-end;
    border-top-style: dotted;
    bottom: 0;
    width: 100%;
  }

  .nav-bottombar a {
    background-color: brown;
    color: whitesmoke;
    border-left-style: dotted;
    padding: 5px;
    font-size: x-large;
    text-decoration: none;
  }
  


</style>