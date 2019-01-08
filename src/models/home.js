import store from 'store';

export default {

    namespace: 'home',

    state: {
       collapsed: false,
       theme: 'dark',
    },

    reducers: {
        handleThemeChange(state, action) {
            return(
                action.theme
            )
          },
        handelCollapsedchange(state, action) {
            return (
                action.collapsed
            )
          },
    },

}
