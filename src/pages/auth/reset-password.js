import Vue from 'vue';
import AuthLayout from '.';

const Reset = Vue.component('Reset', {
	render() {
		return (
			<AuthLayout
				text={'Let gain access to this awesome chalk board.'}
				subText={'Create a new password to access this awesome board.'}
			>
				<h1>Reset Password.</h1>
				<p>Just in one click your password is back the way you want it.</p>
				<form>
					<input placeholder="Enter your New Passowrd" type="password" class="form-control" />
					<input placeholder="Confirm Password" type="password" class="form-control" />
					<button class="btn btn-chalk">Reset Password</button>
				</form>
			</AuthLayout>
		);
	},
});

export default Reset;
