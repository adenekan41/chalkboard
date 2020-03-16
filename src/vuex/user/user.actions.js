import { auth, createUserProfileDocument } from '../../firebase';
const actions = {
	getSnapshotData: async ({ commit, dispatch, state }, user) => {
		try {
			const userRef = await createUserProfileDocument(user);
			const userSnapShot = await userRef.get();
			commit('SIGN_IN_SUCCESS', { id: userSnapShot.id, ...userSnapShot.data() });
			dispatch(
				'alerts/addAlert',
				{ msg: 'Login Succcessful', alertType: 'success' },
				{ root: true }
			);
		} catch (err) {
			state.isLoading = false;
			dispatch('alerts/addAlert', { msg: err.message, alertType: 'danger' }, { root: true });
		}
	},
	signIn: async ({ dispatch, state }, payload) => {
		state.isLoading = true;
		try {
			const { user } = await auth.signInWithEmailAndPassword(payload.email, payload.password);
			dispatch('getSnapshotData', user);
			return new Promise((resolve, reject) => {
				if (user) {
					resolve('Success!');
				} else {
					reject(new Error('an error occured'));
				}
			});
		} catch (err) {
			state.isLoading = false;
			dispatch('alerts/addAlert', { msg: err.message, alertType: 'danger' }, { root: true });
			console.log(err);
			return new Promise((reject) => {
				reject(new Error(err));
			});
		}
	},
	signUp: async ({ dispatch, state }, payload) => {
		state.isLoading = true;
		try {
			const { email, password, name } = payload;
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName: name });
			dispatch(
				'alerts/addAlert',
				{ msg: 'Register Succcessful', alertType: 'success' },
				{ root: true }
			);
			dispatch('signIn', { email, password });
			this.$router.push('/');
		} catch (err) {
			state.isLoading = false;
			dispatch('alerts/addAlert', { msg: err.message, alertType: 'danger' }, { root: true });
			console.log(err);
		}
	},
};

export default actions;
