import { Module } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'

import { ImageState } from './types'
import { RootState } from '../types'

const account: Module<ImageState, RootState> = {
  namespaced: true,
  actions,
  mutations,
  state
}

export default account
