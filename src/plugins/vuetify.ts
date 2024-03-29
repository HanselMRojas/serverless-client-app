import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import es from 'vuetify/src/locale/es'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5dafd9',
        secondary: '#e8a14e',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  },
  lang: {
    locales: { es },
    current: 'es'
  },
  icons: {
    iconfont: 'md'
  }
})
