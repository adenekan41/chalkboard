import Vue from 'vue';
import styled from 'vue-styled-components';
import Banner from '@/assets/icons/banner.svg';

import Navbar from '../components/navbar';

const Home = Vue.component('Home', {
	render() {
		return (
			<LandingWrapper>
				<Navbar />

				<header>
					<div class="container">
						<div class="row align-items-center">
							<div class="col-md-6">
								<article>
									<h1>Bring more of your ideas to life</h1>
									<p>
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled
									</p>
									<router-link to="/login" class="btn btn-chalk">
										Get Started
									</router-link>
								</article>
							</div>

							<figure>
								<Banner class="w-100 h-100" />
							</figure>
						</div>
					</div>
				</header>
			</LandingWrapper>
		);
	},
});

const LandingWrapper = styled.main`
	padding: 3rem;
	background: #5a43b1;
	min-height: 100vh;
	header {
		background-color: #f6f7fa;
		background-image: linear-gradient(#5a43b11f 1px, transparent 1px),
			linear-gradient(to right, #5a43b11f 1px, transparent 1px);
		background-size: 90px 90px;
		position: relative;
		height: 87vh;
		display: flex;
		align-items: center;
		h1 {
			font-weight: 900;
			color: #000;
			font-size: 3.6em;
			margin-bottom: 2rem;
		}
		p {
			font-size: 15px;
			color: #636363;
			margin-bottom: 2rem;
			line-height: 1.8;
		}
		a {
			background: var(--theme-chalk);
			color: #fff;
			border: none;
			padding: 15px 45px;
		}
		figure {
			width: 50%;
			position: absolute;
			right: 0;
			svg {
				path {
					stroke-dasharray: 1000;
					stroke-dashoffset: 1000;
					animation: dash 5s linear alternate infinite;
				}
				@keyframes dash {
					from {
						stroke-dashoffset: 822;
					}
					to {
						stroke-dashoffset: 0;
					}
				}
			}
		}
	}
`;

export default Home;
