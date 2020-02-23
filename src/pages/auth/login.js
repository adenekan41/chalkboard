import Vue from 'vue';
import AuthLayout from '.';

const Login = Vue.component('Login', {
	render() {
		return (
			<AuthLayout
				text={'Get right back to your chalkboard.'}
				subText={'Login to access your account and create awesome boards.'}
			>
				<h1>Login to your account.</h1>
				<p>Its straight quick and easy.</p>
				<form>
					<input placeholder="Enter your email" type="email" class="form-control" />
					<input placeholder="Enter your password" type="password" class="form-control" />
					<router-link to="/forgot" class="float-right">
						Forgot password ?
					</router-link>
					<button class="btn btn-chalk">Login to your account</button>
				</form>
				<h5>
					Dont have an account ?{' '}
					<b>
						<router-link to="/register">Register</router-link>
					</b>
				</h5>
			</AuthLayout>
		);
	},
});

export default Login;
