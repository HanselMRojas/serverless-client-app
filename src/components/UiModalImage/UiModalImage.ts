/* eslint-disable @typescript-eslint/ban-types */
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

import { ImageModal, Image } from '@/store/images/types'

import UiImage from '@/components/UiImage/UiImage.vue'

@Component({
  components: {
    UiImage
  }
})
export default class Home extends Vue {
  // Vuex State
  @State('modal', { namespace: 'images' }) modal!: ImageModal
  @State('current', { namespace: 'images' }) currentImage!: Image

  // Vuex Actions
  @Action('changeModalState', { namespace: 'images' }) changeModalState!: Function
  @Action('setModalDefaultState', { namespace: 'images' }) setModalDefaultState!: Function

  // Component Methods
  onCloseModal (): void {
    this.setModalDefaultState()
  }

  // Component Computed Methods / Props
  get modalLabel (): string {
    return this.modal.isNew ? 'Cargar' : 'Info.'
  }
}
