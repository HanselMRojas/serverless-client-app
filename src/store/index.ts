import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'

// Modules
import images from './images'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    appName: 'PIRPOS',
    version: '1.0.0'
  },
  getters: {},
  modules: {
    images
  }
}

export default new Vuex.Store<RootState>(store)
