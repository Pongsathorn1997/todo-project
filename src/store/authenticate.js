export default ({
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
        setUser(state, data) {
            state.user.data = data;
        },
    },
    actions: {
        userRegister({ commit }, payload) {
            if (payload) {
                commit('setUser', payload);
                commit('setLogin', payload === null);
            } else {
                commit('setUser', null);
            }
        },
        userLogin({ commit }, payload) {
            commit('setLogin', payload !== null);
            commit('setUser', payload);
        },
        userLogout({ commit }, payload) {
            commit('setLogin', payload !== null);
            commit('setUser', payload);
        },
    },
});
