import "../styles/globals.css";
import type { AppProps } from "next/app";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Translation from "../translations";
import Transition from "./Components/Transition";

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "en", // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
      ...Translation
    },
  });



function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line no-unused-vars
  const [_, i18n] = useTranslation();
  return (
    <div className={'content'}>
      <Transition>
      <div className="select-language-container">
        <select
          className="select-language"
          onChange={async (e) => {
            i18n.changeLanguage(e.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>
      <Component {...pageProps} />
      </Transition>
    </div>
  );
}

export default MyApp;
