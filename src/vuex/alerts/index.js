import uuid from 'uuid';

const state = {
	alerts: [],
};

const getters = {
	alerts: (state) => {
		return state.alerts;
	},
};

const actions = {
	removeAlert({ commit }, id) {
		commit('REMOVE_ALERT', id);
	},
	addAlert({ commit }, { msg, alertType }) {
		const id = uuid.v4();

		commit('SET_ALERTS', { msg, alertType, id });
		setTimeout(function() {
			commit('REMOVE_ALERT', id);
		}, 80000);
	},
};

const mutations = {
	SET_ALERTS: (state, { msg, alertType, id }) => {
		state.alerts = [...state.alerts, { msg, alertType, id }];
	},
	REMOVE_ALERT: (state, payload) => {
		state.alerts = state.alerts.filter((alert) => alert.id !== payload);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
