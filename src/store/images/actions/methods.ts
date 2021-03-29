import { ActionContext } from 'vuex'
import { ImageState } from '../types'
import { RootState } from '../../types'

// import router from '@/router'
import Http from '@/store/client'

export type ImageActionContext = ActionContext<ImageState, RootState>

/**
 * ListRemoteImages
 * This function sync the current account from backend
 * again.
 *
 * @param context Account Action Context
 * @param payload The new password and Remember Token
 */
export async function listRemoteImages ({ commit }: ImageActionContext): Promise<any> {
  try {
    const { data } = await Http.send({
      url: '/images',
      method: 'GET'
    })

    commit('SET_IMAGE_LIST', data.payload)
  } catch (error) {
    console.log(error)
  }
}

export function changeModalState ({ commit }: ImageActionContext, payload: boolean): void {
  commit('CHANGE_MODAL_STATE', payload)
}

export function setModalDefaultState ({ commit }: ImageActionContext): void {
  commit('SET_MODAL_STATE_DEFAULT')
}

export function setAdminUserState ({ commit }: ImageActionContext, payload: Account): void {
  commit('SET_CURRENT_USER', payload)
}
