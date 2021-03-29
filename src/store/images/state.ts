import { Image, ImageState } from './types'

export const IMAGE: Image = {
  id: null,
  name: null,
  url: null,
  createdAt: null,
  etag: null
}

export const IMAGE_MODAL = {
  visible: false,
  editable: false
}

const state: ImageState = {
  list: [],
  current: {
    ...IMAGE
  },
  error: null,
  loader: false,
  modal: {
    ...IMAGE_MODAL
  }
}

export default state
