import { MutationTree } from 'vuex'

import {
  Image,
  ImageState
} from './types'

import IMAGE_STATE, {
  IMAGE,
  IMAGE_MODAL
} from './state'

type ImagesMutationTree = MutationTree<ImageState>

const mutations: ImagesMutationTree = {
  SET_IMAGE_LIST (state: ImageState, payload: Image[]) {
    state.list = payload
  },
  CONCAT_IMAGE_LIST (state: ImageState, payload: Image | Image[]) {
    state.list = Array.from(state.list).concat(payload)
    state.uploadSucess = true
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
    state.uploadSucess = false
  },
  SET_LOADER_STATE (state: ImageState, payload: boolean) {
    state.loader = payload
  },
  SET_DEFAULT_STATE (state: ImageState) {
    state.current = { ...IMAGE }
    state.uploadSucess = false
  }
}

export default mutations
