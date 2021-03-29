/* eslint-disable @typescript-eslint/ban-types */
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'

import UiImage from '@/components/UiImage/UiImage.vue'

@Component({
  components: {
    UiImage
  }
})
export default class Home extends Vue {
  // Vuex Actions
  @Action('listRemoteImages', { namespace: 'images' }) listRemoteImages!: Function

  // Component Methods
  refreshImages (): void {
    this.listRemoteImages()
  }
}
