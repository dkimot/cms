const state = {
  all: [],
};

const mutations = {
  RECEIVE_UI(totalState, ui) {
    state.all = ui;
  },
};

export default {
  state,
  mutations,
};
