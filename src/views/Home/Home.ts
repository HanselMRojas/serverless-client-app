/* eslint-disable @typescript-eslint/ban-types */
import { Component, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

import { Image } from '@/store/images/types'

import UiImage from '@/components/UiImage/UiImage.vue'

@Component({
  components: {
    UiImage
  }
})
export default class Home extends Vue {
 // Vuex State
 @State('list', { namespace: 'images' }) imageList!: Image[]

 // Vuex Actions
 @Action('listRemoteImages', { namespace: 'images' }) listRemoteImages!: Function
}
