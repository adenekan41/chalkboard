import Vue from 'vue';
import styled from 'vue-styled-components';
import Logo from '@/assets/icons/logo.svg';

const Navbar = Vue.component('Navbar', {
	render() {
		return (
			<NavbarWrapper>
				<b-navbar toggleable="lg" type="dark" variant="light" fixed="top">
					<div class="container-fluid">
						<b-navbar-brand href="#">
							<Logo class="w-100 h-100" />
						</b-navbar-brand>

						<b-collapse id="nav-collapse" is-nav>
							<b-navbar-nav class="ml-auto">
								<b-nav-item href="#">Login</b-nav-item>
								<b-nav-item href="#">Register</b-nav-item>

								<b-nav-item-dropdown text="Lang" right>
									<b-dropdown-item href="#">EN</b-dropdown-item>
									<b-dropdown-item href="#">ES</b-dropdown-item>
									<b-dropdown-item href="#">RU</b-dropdown-item>
									<b-dropdown-item href="#">FA</b-dropdown-item>
								</b-nav-item-dropdown>
							</b-navbar-nav>
						</b-collapse>
					</div>
				</b-navbar>
			</NavbarWrapper>
		);
	},
});

const NavbarWrapper = styled.div`
	nav {
		background: var(--theme-chalk) !important;
		padding: 1rem 3rem !important;
		.navbar-brand {
			width: 8em;
			svg {
				path {
					fill: #fff;
				}
			}
		}
	}
`;

export default Navbar;
