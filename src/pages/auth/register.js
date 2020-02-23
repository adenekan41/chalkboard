import Vue from 'vue';
import AuthLayout from '.';

const Register = Vue.component('Register', {
	render() {
		return (
			<AuthLayout
				text={'Your a just a few clicks a way from getting a chalkboard.'}
				subText={'create your account in less than 5 seconds without frictions'}
			>
				<h1>Create a new account.</h1>
				<p>Its straight quick and easy finish creating an account in 10seconds.</p>
				<form>
					<input placeholder="Full Name" type="text" class="form-control" />
					<input placeholder="Enter your email" type="email" class="form-control" />
					<input placeholder="Enter your password" type="password" class="form-control" />
					<input placeholder="Confirm password" type="password" class="form-control" />
					<button class="btn btn-chalk">Create account</button>
				</form>
				<h5>
					Already have an account ?{' '}
					<b>
						<router-link to="/login">Login</router-link>
					</b>
				</h5>
			</AuthLayout>
		);
	},
});

export default Register;
