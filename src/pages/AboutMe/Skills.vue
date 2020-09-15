<template>
  <ol class="hoverable-list red"> 
    <li class="with-padding"> 
      <span> 🎵 I'm sharp </span>
        <ul class="hoverable-list green">
          <li> <span> ASP.NET Core </span> </li>
          <li> <span> EF Core </span> </li>
        </ul> 
    </li> 

    <li class="with-padding"> 
      <span> 🐍 Talk to snakes </span>
        <ul class="hoverable-list green">
          <li> <span> fastapi/aiohttp </span> </li>
          <li> <span> ML (pyTorch and openCV) </span> </li>
        </ul>
    </li> 
    <li class="with-padding"> 
      <span> ☕ JS </span>
        <ul class="hoverable-list green">
          <li> <span> Vue </span> </li>
        </ul>
    </li>
    <li class="with-padding"> 
        <span> 🛠 Arch </span>
          <ul class="hoverable-list green">
            <li> <span> DDD </span> </li>
            <li> <span> CQS/CQRS, Microservices </span> </li>
            <li> <span> Event Sourcing </span></li>
          </ul>
    </li>
  </ol>
</template>

<script>

export default {
  components: {
  }  
}
</script>
<style>

ol {
  list-style: none;
   
}

.hoverable-list > li {
  cursor: pointer;
  font-size: 18px;
}

.hoverable-list .with-padding {
  padding: 10px;
}

.hoverable-list.red > li > span:hover {
  background-color: aqua;
  color: black;
  font-weight: 1000;
}

.hoverable-list.green > li > span:hover {
  background-color: aqua;
  color: black;
  font-weight: 1000;
}
</style>