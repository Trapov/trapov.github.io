import Container from "../../Components/Container";
import styles from "./MeCard.module.css";

const MeCard = () => (
  <Container
    fluid
    column
    row
    rowIfMd
    alignItems={"center"}
    justifyContent={"center"}
  >
    <Container size={6}>
      <div className={styles.avatar}></div>
    </Container>
    <Container fluid row size={2} columnIfMd>
      <div>
        <a href="https://github.com/Trapov">
          <img
            className={styles.icon}
            src="https://img.icons8.com/ios/50/000000/github.png"
          />
        </a>
      </div>
      <div>
        <a href="https://t.me/DmitryAAD">
          <img
            className={styles.icon}
            src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png"
          />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/dmitry-afonin-a48a0b163/">
          <img
            className={styles.icon}
            src="https://img.icons8.com/ios/50/000000/linkedin.png"
          />
        </a>
      </div>
    </Container>
  </Container>
);

export default MeCard;
