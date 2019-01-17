import { routerRedux } from 'dva/router';
import { message } from 'antd';

export default {
  namespace: 'login',

  state: {
    loginLoading : false,
  },

  effects: {
    * login ({
      payload
    }, { put }) {
      yield put(routerRedux.push('/'))
      yield put({ type: 'hideLoginLoading' })
      message.success('Welcome!')
    }
  },

  reducers: {
    showLoginLoading (state,{payload:loginLoading}) {
      return {
        ...state,
        loginLoading: true
      }
    },
    hideLoginLoading (state,{payload:loginLoading}) {
      return {
        ...state,
        loginLoading: false
      }
    },
  }
}
