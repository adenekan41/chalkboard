import Vue from 'vue';
import AuthLayout from '.';
import Input from '../../components/input';
import Button from '../../components/button';
import { mapActions, mapState } from 'vuex';

const Login = Vue.component('Login', {
	data() {
		return {
			email: '',
			password: '',
		};
	},
	mixins: [Input],
	computed: mapState('user', {
		loading: (state) => state.isLoading,
	}),
	methods: {
		...mapActions('user', ['signIn']),
		submitForm(e) {
			e.preventDefault();
			if (!this.validator(this.email, 'email') || !this.validator(this.password, 'min-8')) return;

			return this.signIn({ email: this.email, password: this.password }).then((res) => {
				console.log(res);
			});
		},
	},
	render() {
		return (
			<AuthLayout
				text={'Get right back to your chalkboard.'}
				subText={'Login to access your account and create awesome boards.'}
			>
				<h1>Login to your account.</h1>
				<p>Its straight quick and easy.</p>
				<form onSubmit={(e) => this.submitForm(e)}>
					<Input
						name="email"
						validate="email"
						type="email"
						vModel={this.email}
						placeholder="Enter your email"
					/>
					<Input
						name="password"
						validate="min-8"
						type="password"
						vModel={this.password}
						placeholder="Enter your password"
					/>
					{/* <input placeholder="Enter your password" type="password" class="form-control" /> */}
					<router-link to="/forgot" class="float-right">
						Forgot password ?
					</router-link>
					<Button type="submit" isLoading={this.loading}>
						Login to your account
					</Button>
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
