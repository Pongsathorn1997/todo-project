export default({
    state: {
        user: {
            loggedIn: false,
            data: null,
        },
    },
    getters: {
        user(state) {
            return state.user;
        },
    },
    mutations: {
        setLogin(state, data) {
            state.user.loggedIn = data;
        },
        setUser(state, data) {
            state.user.data = data;
        },
        setLogout(state, data) {
            state.user.loggedIn = data;
        },
    },
    actions: {
        userRegister({ commit }, payload) {
            commit('setUser', { payload });
        },
        userLogin({ commit }, payload) {
            commit('setLogin', payload !== null);
            commit('setUser', payload)
        },
        userLogout({ commit }, payload) {
            commit('setLogout', payload !== null);
            commit('setUser', payload);
        },
    },
});
