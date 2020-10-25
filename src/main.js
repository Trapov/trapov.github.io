import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createI18n } from 'vue-i18n'


const i18n = createI18n({
  locale: 'en',
  legacy: true,
  messages: {
    en: {
      aboutMe: {
        header: 'About me', 
        name: 'Dmitry Afonin',
        old: 'old',
        workexp: 'Worked for',
        location: 'Russia Orenburg',
        hobbies: 'Jazz, videogames and making the machines go brrr-brrr',
        skills: {
          sharp: {
            header: "I'm sharp"
          },
          python: {
            header: "Talk to snakes"
          },
          arch: {
            header: "Arch"
          }
        }
      }
    },
    ru: {
      aboutMe: {
        header: 'Обо мне',
        name: 'Дмитрий Афонин',
        old: '',
        workexp: 'Проработал',
        location: 'Россия г.Оренбург',
        hobbies: 'Джаз, видеоигры и заставлять машины делать бррр-бррр',
        skills: {
          sharp: {
            header: "Я знаю C♯"
          },
          python: {
            header: "Говорю со змеями"
          },
          arch: {
            header: "Архитектура"
          }
        }
      }
    }
  }
})

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
