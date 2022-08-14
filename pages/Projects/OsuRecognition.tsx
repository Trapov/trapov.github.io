import Container from "../Components/Container"
import styles from './OsuRecognition.module.css'

const OsuRecognition = () => (
    <Container fluid column alignItems="center">
    <h1>
      osu-recognition
    </h1>
    <Container className={styles['if-hover-hightlight']} alignItems="center" justifyContent="center" fluid column size={6}>
      <div> 
        {"That's my graduation project and it basicly does one thing."}
      </div>
      <div>
        It does authentication based on your face input. You get a jwt token.
      </div>
    </Container>
  </Container>
)

export default OsuRecognition