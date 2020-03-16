const mutations = {
	SIGN_IN_SUCCESS: (state, { payload }) => {
		state.currentUser = payload;
		state.isLoading = false;
	},
};

export default mutations;
