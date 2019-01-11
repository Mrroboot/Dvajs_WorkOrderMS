import store from 'store';

export default {

  namespace: 'homes',

  state: {
    theme:  store.get('theme') || 'dark',
    collapsed: store.get('collapsed') || false,
  },

  reducers: { 
    handleThemeChange(state, { payload }) {
      store.set('theme', payload)
      state.theme = payload
    },

    handleCollapseChange(state, { payload }) {
      store.set('collapsed', payload)
      state.collapsed = payload
    },

  },

}
