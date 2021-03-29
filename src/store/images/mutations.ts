import { MutationTree } from 'vuex'

import {
  Image,
  ImageState
} from './types'

import {
  IMAGE,
  IMAGE_MODAL
} from './state'

type ImagesMutationTree = MutationTree<ImageState>

const mutations: ImagesMutationTree = {
  SET_IMAGE_LIST (state: ImageState, payload: Image[]) {
    state.list = payload
  },
  CHANGE_MODAL_STATE (state: ImageState, payload = {}) {
    state.modal = {
      ...state.modal,
      ...payload
    }
  },
  SET_CURRENT_IMAGE (state: ImageState, payload: Image) {
    state.current = payload
  },
  SET_MODAL_STATE_DEFAULT (state: ImageState) {
    state.modal = { ...IMAGE_MODAL }
    state.current = { ...IMAGE }
  },
  SET_LOADER_STATE (state: ImageState, payload: boolean) {
    state.loader = payload
  }
}

export default mutations
