import Vue from 'vue';
import styled from 'vue-styled-components';
import Loading from '@/assets/icons/loading.svg';

const Button = Vue.component('Button', {
	props: {
		type: { type: String, required: false, default: 'button' },
		loadingText: { type: String, required: false, default: 'Loading' },
		isLoading: { type: Boolean, required: false, default: false },
		className: { type: String, required: false, default: 'btn-chalk' },
	},

	data() {
		return {};
	},
	render() {
		return (
			<ButtonWrapper
				class={`btn ${this.className}`}
				type={this.type}
				disabled={this.isLoading}
				{...{ attrs: {} }}
			>
				{this.isLoading ? <Loading class="loading__icon" /> : this.$slots.default}
			</ButtonWrapper>
		);
	},
});

const ButtonWrapper = styled.button`
	svg.loading__icon {
		background: rgba(255, 255, 255, 0);
		height: 44px;
		width: 37px;
		display: inline-block !important;
		margin-top: -23px !important;
		transform: translate(0, 11px);
	}
	&.btn-chalk {
		background: var(--theme-chalk);
		color: #fff;
		border: none;
		padding: 15px 32px;
	}
`;
export default Button;
