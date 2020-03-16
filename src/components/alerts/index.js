import Vue from 'vue';
import styled from 'vue-styled-components';
import Error from '@/assets/icons/error.svg';
import Success from '@/assets/icons/success.svg';
import { mapGetters, mapActions } from 'vuex';

const Alert = Vue.component('Alert', {
	computed: {
		...mapGetters('alerts', {
			alerts: 'alerts',
		}),
	},
	methods: {
		...mapActions('alerts', ['removeAlert', 'addAlert']),
	},
	created() {
		this.addAlert({ msg: 'Username or password incorrect try again', alertType: 'danger' });
		setTimeout(() => {
			this.addAlert({
				msg: 'successfully done it already and its on the git to go',
				alertType: 'success',
			});
		}, 5000);
	},
	render() {
		return (
			<AlertWrapper>
				{this.alerts !== null &&
					this.alerts.length > 0 &&
					this.alerts.map((alert) => (
						<div
							role="alert"
							ariaLive="chalkboard"
							ariaAtomic="true"
							class={`alert alert-dismissible animated fadeInRight alert-${alert.alertType}`}
						>
							<button
								type="button"
								ariaLabel="Close"
								class="close"
								onClick={() => this.removeAlert(alert.id)}
							>
								×
							</button>
							<div class="alert--flex d-flex align-items-center">
								{alert.alertType === 'success' ? <Success /> : <Error />}
								<span>
									{/* <h4>{alert.alertType === 'success' ? alert.alertType : 'Whoops'}</h4> */}
									<p>{alert.msg}</p>
								</span>
							</div>
						</div>
					))}
			</AlertWrapper>
		);
	},
});

const AlertWrapper = styled.div`
	position: fixed;
	top: 8px;
	z-index: 9999;
	width: 300px;

	right: 8px;
	margin: 0;
	.alert {
		width: 100%;
		padding: 8px 15px;
		margin-bottom: 1rem;
		border: none;
		overflow: hidden;
		margin-left: auto;

		&--flex {
			padding: 0 22px 0 0px;
		}
		&-success {
			background: var(--theme-chalk);
			color: #ebe9f3;
			fill: #ebe9f3;
			border-left: 5px solid #9b89da !important;

			.close {
				background: #00000026;
				color: #fff;
			}
		}
		&-danger {
			background: #da4a3f;
			color: #ffebe9;
			fill: #ffebe9;
			border-left: 5px solid #e4958f;
			.close {
				background: #00000026;
				color: #fff;
			}
		}
	}
	h4 {
		text-transform: capitalize;
		font-weight: 800;
		color: inherit;

		font-size: 16px;
		margin: 2px 0;
	}

	p {
		font-size: 15px;
		text-transform: lowercase;
		color: inherit;
		margin: 0;
		&::first-letter {
			text-transform: uppercase;
		}
	}
	svg {
		margin-right: 8px;
		fill: inherit;
	}

	.close {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		font-weight: 100;
		padding: 0 12px;

		font-size: 20px;
		text-shadow: none;
		opacity: 1;
		/* padding: 18px 13px; */
	}
`;
export default Alert;
