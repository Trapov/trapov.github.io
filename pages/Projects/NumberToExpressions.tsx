import Container from "../Components/Container"

const NumberToExpressions = () => (
    <Container fluid column alignItems="center">
    <h1>
      number-to-expressions
    </h1>
    <Container alignItems="center" justifyContent="center" fluid column size={6}>
      <div> 
        It finds math expressions of a given number with given complexity.
      </div>
      <div>
        I made a bet that I could do it quickly.
      </div>
    </Container>
  </Container>
)

export default NumberToExpressions;