import Vue from 'vue';
import AuthLayout from '.';
import Input from '../../components/input';
import Button from '../../components/button';
import { mapState, mapActions } from 'vuex';

const Register = Vue.component('Register', {
	data() {
		return {
			email: '',
			password: '',
			name: '',
			confirmpassword: '',
		};
	},
	mixins: [Input],
	computed: mapState('user', {
		loading: (state) => state.isLoading,
	}),
	methods: {
		...mapActions('user', ['signUp']),
		submitForm(e) {
			e.preventDefault();
			if (
				!this.validator(this.name, 'require') ||
				!this.validator(this.email, 'email') ||
				!this.validator(this.password, 'min-8') ||
				this.password !== this.confirmpassword
			)
				return;

			return this.signUp({ email: this.email, password: this.password, name: this.name });
		},
	},
	render() {
		return (
			<AuthLayout
				text={'Your a just a few clicks a way from getting a chalkboard.'}
				subText={'create your account in less than 5 seconds without frictions'}
			>
				{this.password !== this.confirmpassword && this.confirmpassword.length > 1 && (
					<div
						class="alert alert-danger"
						style={{ background: '#ffefef', padding: '12px 26px', border: 'none' }}
					>
						<h4 style={{ color: '#ef5e5b', fontSize: '14px', fontWeight: '100', margin: 0 }}>
							Password Do Not Match
						</h4>
					</div>
				)}
				<h1>Create a new account.</h1>
				<p>Its straight quick and easy finish creating an account in 10seconds.</p>

				<form onSubmit={(e) => this.submitForm(e)}>
					<Input
						name="name"
						validate="require"
						type="text"
						vModel={this.name}
						placeholder="Full Name"
					/>
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
					<Input
						name="password"
						validate="min-8"
						type="password"
						vModel={this.confirmpassword}
						placeholder="Confirm password"
					/>

					<Button type="submit" isLoading={this.loading}>
						Create an account
					</Button>
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
