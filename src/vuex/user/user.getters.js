export const state = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const getters = {
	user: (state) => {
		return state.currentUser;
	},
};
