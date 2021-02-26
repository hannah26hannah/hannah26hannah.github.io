import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEn from './translation.en'
import translationKo from './translation.ko'

const resource = {
    en : {
        translation: translationEn
    },
    ko : {
        translation: translationKo
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resource,
        fallbackLng: 'en',
        debug: true,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

