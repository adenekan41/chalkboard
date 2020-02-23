import Vue from 'vue';
import AuthLayout from '.';

const Forgot = Vue.component('Forgot', {
	render() {
		return (
			<AuthLayout
				text={'Get your chalkboard back in a click.'}
				subText={'Get your password back to access your account and create awesome boards.'}
			>
				<h1>Forgot Password.</h1>
				<p>Just in one click you would get an email right away.</p>
				<form>
					<input placeholder="Enter your email" type="email" class="form-control" />
					<button class="btn btn-chalk">Forgot Password</button>
				</form>
				<h5>
					Already Remember ?{' '}
					<b>
						<router-link to="/login">Login</router-link>
					</b>
				</h5>
			</AuthLayout>
		);
	},
});

export default Forgot;
