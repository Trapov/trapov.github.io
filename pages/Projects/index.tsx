import Container from "../Components/Container";
import NumberToExpressions from "./NumberToExpressions";
import OsuRecognition from "./OsuRecognition";

const Index = () => (
    <div id="my-projects">
    <Container fluid column>
      <OsuRecognition />
      <NumberToExpressions />
    </Container>
  </div>
)

export default Index