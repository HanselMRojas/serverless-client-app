/* eslint-disable @typescript-eslint/ban-types */
import { Component, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

import { Image } from '@/store/images/types'

import UiModalImage from '@/components/UiModalImage/UiModalImage.vue'
import UiImage from '@/components/UiImage/UiImage.vue'

@Component({
  components: {
    UiImage,
    UiModalImage
  }
})
export default class Home extends Vue {
  // Vuex State
  @State('list', { namespace: 'images' }) imageList!: Image[]
  @State('loader', { namespace: 'images' }) loader!: boolean

  // Vuex Actions
  // Vuex Actions
  @Action('changeModalState', { namespace: 'images' }) changeModalState!: Function
  @Action('listImages', { namespace: 'images' }) listImages!: Function

  // Vue lifecycle
  beforeMount (): void {
    this.onRefreshImages()
  }

  // Component Methods
  onRefreshImages (): void {
    this.listImages()
  }

  onClickNewImage (): void {
    this.changeModalState({ visible: true, isNew: true })
  }
}
