export const setUser = ({ commit }, user) => {
  commit('RECEIVE_USER', user);
};

export const logOut = ({ commit }) => {
  commit('RECEIVE_USER', {});
};
