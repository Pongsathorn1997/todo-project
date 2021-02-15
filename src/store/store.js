import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './authenticate';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth: { ...Auth, namespaced: true},
    },
});

Vue.$store = store;
export default store;
