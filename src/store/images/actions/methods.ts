import { ActionContext } from 'vuex'
import { ImageState } from '../types'
import { RootState } from '../../types'

// import router from '@/router'
import Http from '@/store/client'

export type ImageActionContext = ActionContext<ImageState, RootState>

/**
 * ListRemoteImages
 * Esta funcion sincroniza el backend y el listado de imágenes.
 *
 * @param context Account Action Context
 */
export async function listImages ({ commit }: ImageActionContext): Promise<void> {
  try {
    commit('SET_LOADER_STATE', true)
    const { data } = await Http.send({
      url: '/images',
      method: 'GET'
    })

    commit('SET_IMAGE_LIST', data.payload)
  } catch (error) {
    // TODO handle error
    console.log(error)
  } finally {
    commit('SET_LOADER_STATE', false)
  }
}

export async function createImage ({ commit }: ImageActionContext, payload = {}): Promise<void> {
  try {
    commit('SET_LOADER_STATE', true)
    const { data } = await Http.send({
      url: '/images',
      method: 'POST',
      data: payload
    })

    commit('CONCAT_IMAGE_LIST', data.payload)
  } catch (error) {
    // TODO handle error
    console.log(error)
  } finally {
    commit('SET_LOADER_STATE', false)
  }
}

export function changeModalState ({ commit }: ImageActionContext, payload: boolean): void {
  commit('CHANGE_MODAL_STATE', payload)
}

export function setModalDefault ({ commit }: ImageActionContext): void {
  commit('SET_MODAL_STATE_DEFAULT')
}
