import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions/user';
import * as getters from './getters';
import ui from './modules/ui';
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    ui,
    user,
  },
  strict: debug,
});
