<template>
  <div id="my-projects">
    <container fluid column>
      <osu-recognition />
      <number-to-expressions />
    </container>
  </div>
</template>

<script>
import OsuRecognition from "./OsuRecognition";
import NumberToExpressions from "./NumberToExpressions";
import Container from "../../components/Container";

export default {
  components: {
    OsuRecognition,
    NumberToExpressions,
    Container
  }  
}
</script>