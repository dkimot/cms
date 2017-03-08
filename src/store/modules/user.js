const state = {
  user: [],
};

const mutations = {
  RECEIVE_USER(totalState, user) {
    state.user = user;
  },
};

export default {
  state,
  mutations,
};
