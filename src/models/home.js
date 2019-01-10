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
