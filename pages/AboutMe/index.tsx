import type { NextPage } from "next";
import Container from "../Components/Container";
import TimeSince from "../Components/TimeSince";
import { useTranslation } from "react-i18next";
import styles from "./AboutMe.module.css";
import MeCard from "./MeCard";
import Skills from "./Skills";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, _] = useTranslation();
  const router = useRouter();
  return (
    <Container fluid column alignItems={"center"}>
      <h1>{t("aboutMe.header")}</h1>
      <Container className={styles['little-margin-bottom-offset']} fluid row>
        <Container
          className={styles['if-hover-hightlight']}
          fluid
          row
          columnIfMd
          size={6}
        >
          <MeCard />
          <Container size={2}>
            <p>🧑: {t("aboutMe.name")}</p>
            <p>
              🧓: <TimeSince emoji="🐣" when={new Date("1995-02-14T02:00:00+0500")} />{" "}
              {t("aboutMe.old")}
            </p>
            <p>
              👩‍💻: {t("aboutMe.workexp")}{" "}
              <TimeSince emoji="💼" when={new Date("2017-02-14T02:00:00+0500")} />
            </p>
            <p>🌍: {t("aboutMe.location")}</p>
            <hr />
            <p>💕: {t("aboutMe.hobbies")}</p>
          </Container>
        </Container>
        <Container className={styles['if-hover-hightlight']} size={6}>
          <Skills />
        </Container>
      </Container>
      <div onClick={() => router.push('/Projects', undefined, { scroll: true })} className={styles.forward}>👇</div>
    </Container>
  );
};

export default Home;
