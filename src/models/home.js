/* model文件格式参考
namespace: 'example',

  state: {},

subscriptions: {
  setup({ dispatch, history }) {  // eslint-disable-line
  },
},

effects: {
*fetch({ payload }, { call, put }) {  // eslint-disable-line
    yield put({ type: 'save' });
  },
},

reducers: {
  save(state, action) {
    return { ...state, ...action.payload };
  },
},
*/

export default {

  namespace: 'home',

  state: {
    theme: "dark",
    collapsed: false,
  },

  reducers: {
    switchTheme(state, {payload}) {
      state.theme = payload.theme;
      return state
    },
  },

}
