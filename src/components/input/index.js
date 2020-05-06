import Vue from 'vue';
import styled from 'vue-styled-components';

const Input = Vue.component('Input', {
	props: {
		validate: String,
		value: { type: String, required: false, default: '' },
		label: { type: String, required: false, default: '' },
		name: { type: String, required: false, default: '' },
		type: { type: String, required: false, default: 'text' },
		placeholder: { type: String, required: false, default: '' },
	},
	data() {
		return {
			error: '',
			isValid: false,
		};
	},
	watch: {
		value: function(val) {
			this.validator(val, this.validate);
		},
	},
	methods: {
		validator(val, types) {
			let text = val;
			if (types === 'email') {
				let atpos = text.indexOf('@'),
					dotpos = text.lastIndexOf('.');

				if (atpos < 1 || dotpos - atpos < 2) {
					this.error = 'Please enter a correct email address';
					return (this.isValid = false);
				}
				this.error = '';
				return (this.isValid = true);
			}
			if (types === 'require') {
				if (text.length === 0) {
					this.error = `${'Please this field is required'}`;
					return false;
				}
				this.error = '';
				return true;
			}
			if (types.includes('min-')) {
				if (text.length <= types.split('-')[1] - 1) {
					this.error = `Please this field is required minimum of ${types.split('-')[1]} characters`;
					return false;
				}
				this.error = '';
				return true;
			}
		},
	},
	render() {
		return (
			<InputWrapper>
				{this.label}
				<input
					name={this.name}
					type={this.type}
					value={this.value}
					required
					class={`form-control ${this.error ? 'error__form' : ''}`}
					placeholder={this.placeholder}
					onInput={(event) => this.$emit('input', event.target.value)}
				/>
				{this.error ? <span>{this.error}</span> : null}
			</InputWrapper>
		);
	},
});

const InputWrapper = styled.div`
	input {
		border-color: #ededed !important;
		box-shadow: none !important;
		font-size: 15px !important;
		margin-bottom: 2rem;
		padding: 26px 29px !important;
		&:focus {
			border-color: #5b42b1c7 !important;
		}
		&.error__form {
			border: 1px solid red !important;
		}
	}
	span {
		font-size: 13px;
		color: red;
		display: block;
		margin-top: -18px;
		margin-bottom: 1rem;
	}
`;

export default Input;
