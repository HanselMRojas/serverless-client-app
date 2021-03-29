
import { ActionTree } from 'vuex'
import { ImageState } from '../types'
import { RootState } from '../../types'

import * as moduleMethods from './methods'

type AccountActionTree = ActionTree<ImageState, RootState>

const actions: AccountActionTree = {
  ...moduleMethods
}

export default actions
