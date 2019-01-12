
export default {

  namespace: 'homes',

  state: {
    theme: 'dark', 
    collapsed: false,
  },

  reducers: { 
    handleThemeChange(state, { payload:theme }) {
      return {...state, theme}
    },

    handleCollapseChange(state, { payload:collapsed }) {
      return {...state, collapsed}
    },

  },

}
