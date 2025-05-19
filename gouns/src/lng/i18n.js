import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import KOdata from "./KOdata";
import ENdata from "./ENdata";

const resources = {
  en: {
    translation: ENdata
  },
  ko: {
    translation: KOdata
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;