import { state, getters } from './user.getters';
import actions from './user.actions';
import mutations from './user.mutation';

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
