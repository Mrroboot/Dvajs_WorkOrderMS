

export default {

    namespace: 'home',

    state: {
        theme: "dark",
        collapsed: false,
    },

    reducers: {
        ThemeChange(state, { payload: { data: theme, collapsed } }) {
            return { ...state, theme, collapsed };
          },
    },

}
