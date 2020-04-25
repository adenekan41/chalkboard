import Vue from 'vue';
import styled from 'vue-styled-components';
import Logo from '@/assets/icons/logo.svg';
import Person from '@/assets/icons/chari.svg';

const AuthLayout = Vue.component('AuthLayout', {
	props: {
		text: {
			type: String,
			required: true,
		},
		subText: {
			type: String,
			required: true,
		},
	},
	render() {
		return (
			<Wrapper>
				<Grid>
					<Person class="chair animated fadeIn" />
					<Grid1 class="animated fadeInLeft">
						<Logo class="logo" />

						<div class="flex-3">
							<h3> {this.text}</h3>
							<p>{this.subText}</p>
							<span>
								<h5>Trusted by millons of users all over the world</h5>
							</span>
						</div>
					</Grid1>
					<Main class="animated fadeIn">
						<div class="nav-auth">
							<Logo class="logo" />
						</div>
						{this.$slots.default}
					</Main>
				</Grid>
			</Wrapper>
		);
	},
});

const Wrapper = styled.section`
	background: #f6f7fa;
	min-height: 100vh;
	svg {
		&.chair {
			width: 22vw;
			position: absolute;
			left: 0;
			/* margin-left: 20rem; */
			z-index: 99;
			bottom: 0;
			opacity: 0.9;
			animation-delay: 1s;
			transform: translate(87%, 0px);
			@media (max-width: 986px) {
				left: auto;
				/* display: none; */
				width: 24vw;
				padding: 7px;
				right: 20px !important;
				transform: none !important;
			}
		}
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 1.4fr;
	@media (max-width: 986px) {
		display: block;
	}
`;
const Grid1 = styled.div`
	background: #5b42b1;
	height: 100vh;

	padding: 1rem 3rem;

	animation-duration: 0.4s;

	display: flex;

	flex-direction: column;

	flex-wrap: wrap;
	overflow: hidden;

	justify-content: center;
	position: relative;
	@media (max-width: 986px) {
		display: none;
	}
	svg {
		&.logo {
			width: 160px;
			position: absolute;
			top: 0;

			fill: #f6f7fa;
			path {
				fill: #f6f7fa;
			}
		}
		&.chair {
			width: 403px;
			position: absolute;
			left: 333px;
			bottom: 0;
			opacity: 0.9;
		}
	}
	span {
		position: absolute;
		bottom: 26px;
		opacity: 0.8;
		/* right: 0; */

		left: 0;
		padding: 0 50px;
		h5 {
			color: #e4e4e4;
			text-transform: uppercase;
			font-size: 11.5px;
			text-align: left;
		}
	}
	h3 {
		color: #f1f1f1;

		font-size: 28px;
		font-weight: 600;
	}
	p {
		text-transform: capitalize;
		color: gainsboro;
		margin-top: 1rem;
		font-size: 14px;
	}
	.flex-3 {
		flex: 0.3;
	}
`;
const Main = styled.main`
	padding: 0 19vw;
	@media (max-width: 986px) {
		padding: 10rem 2.5rem;
		min-height: 100vh;
	}
	animation-delay: 0.4s;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.nav-auth {
		position: absolute;
		top: 0;
		right: 0;
		padding: 38px;
		h6 {
			color: #8c8c8c;
		}
		svg {
			display: none;
		}
		@media (max-width: 986px) {
			padding: 22px 35px !important;
			left: 0;
			h6 {
				display: none;
			}
			svg {
				width: 163px;
				display: block;
			}
		}
	}
	h1 {
		font-size: 33px;
		margin-bottom: 1rem;
	}
	p {
		font-size: 15px;
		color: #717171;
		margin-bottom: 2rem;
	}
	a {
		color: #5b42b1 !important;
		&.float-right {
			font-size: 14px;
			margin-top: 1.4rem;
			@media (max-width: 986px) {
				display: block;
				float: none !important;
				margin-bottom: 1.1rem;
			}
		}
	}
	h5 {
		font-size: 15px;
		font-weight: 400;
		margin-top: 2rem;
		color: #717171;
	}
	input {
		border-color: #ededed !important;
		box-shadow: none !important;
		font-size: 15px !important;
		margin-bottom: 2rem;
		padding: 26px 29px !important;
		&:focus {
			border-color: #5b42b1c7 !important;
		}
	}
`;
export default AuthLayout;
