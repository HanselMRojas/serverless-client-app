/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  // Component State
  private formValid = false
  private name: string | null = ''
  private image: File | null = null
  private preview: string | null = null

  // Form Rules
  private textRules = [
    (v: string) => (v !== '' && v.length <= 25) || 'El nombre no puede ir vacío ni sobrepasar 25 caracteres'
  ]

  private fileRules = [
    (v: File) => (v !== null && v.size < 2000000) || 'El archivo no debe ir vacío o pesar más de 2MB'
  ]

  // Vuex State
  @State('modal', { namespace: 'images' }) modal!: ImageModal
  @State('current', { namespace: 'images' }) currentImage!: Image
  @State('loader', { namespace: 'images' }) loader!: boolean
  @State('uploadSucess', { namespace: 'images' }) uploadSucess!: boolean

  // Vuex Actions
  @Action('changeModalState', { namespace: 'images' }) changeModalState!: Function
  @Action('setModalDefault', { namespace: 'images' }) setModalDefault!: Function
  @Action('createImage', { namespace: 'images' }) createImage!: Function

  // Component Methods
  onCloseModal (): void {
    this.setModalDefault()
    // @ts-ignore
    this.$refs.uploadForm.resetValidation()
    this.formValid = false
    this.name = ''
    this.image = null
    this.preview = null
  }

  onFileChange (file: File): void {
    if (file) {
      const urlCreator = window.URL || window.webkitURL
      const url = urlCreator.createObjectURL(file)
      this.preview = url
    } else {
      this.preview = null
    }
  }

  fileToBase64 (file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  async onUploadPhoto (): Promise<void> {
    // @ts-ignore
    this.$refs.uploadForm.validate()

    if (this.image && this.formValid) {
      const strFile = await this.fileToBase64(this.image)
      if (typeof strFile === 'string') {
        const file = strFile.split(',')[1]
        this.createImage({
          name: this.name,
          file
        })
      }
    }
  }

  // Component Computed Methods / Props
  get modalLabel (): string {
    return this.modal.isNew ? 'Cargar' : 'Info.'
  }
}
