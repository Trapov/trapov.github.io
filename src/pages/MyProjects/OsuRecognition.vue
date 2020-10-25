<template>
  <container fluid column align-items="center">
    <h1>
      osu-recognition
    </h1>
    <container class="if-hover-hightlight" alignItems="center" justify-content="center" fluid column :size="6">
      <div> 
        That's my graduation project and it basicly does one thing.
      </div>
      <div>
        It does authentication based on your face input. You get a jwt token.
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