

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";


const NavStyles = styled.div`
	font-family: 'Droid Serif', serif;
	font-size: 1.1em;

	.navbar { 
		padding: 0.25rem 1rem 0.25rem 1rem;
		top: 0;
		width: 100vw;
	}
	a, .navbar-nav, .navbar-light .nav-link {
		color: var(--light-accent-blue);
		&:hover { color: white; }
	}
	.navbar-brand {
		font-size: 1.4em;
		z-index: 9999;
		color: var(--light-accent-blue) !important;
		cursor: pointer;
		text-decoration: underline;
		&:hover { color: white; }
	}
	.navbar-light .navbar-toggler {
		padding: 0.125em;
	}
	.navbar-nav {
		margin-top: 0.25em;
		margin-bottom: 0.25em;
	}
	.nav-item {
		text-align: center;
		transition: all .6s ease;
		&:hover { box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; }
	}
	.nav-link.active {
		color: unset !important;
	}
`;


export function NavigationBar() {

	// let path = window.location.href;
	// console.log(path);

	// let styles = {
	// 	homenav: {
	// 		background: "rgba(50,45,127,255)",
	// 		borderBottom: "1px solid var(--blue-magenta)",
	// 	},
	// 	aboutnav: {
	// 		background: "var(--cover-gradient)",
	// 		borderBottom: "1px solid var(--blue-magenta)",
	// 		zIndex: 4
	// 	},
	// 	collectionnav: {
	// 		background: "var(--cover-gradient)",
	// 		borderBottom: "1px solid var(--blue-magenta)",
	// 		zIndex: 4
	// 	}
	// }

	let styles = {
		background: "var(--nav-gradient)",
		borderBottom: "1px solid var(--blue-magenta)",
	}

	// switch (path) {
	// 	case "/":
	// 		styles = styles.homenav
	// 		break;
	// 	case "/about":
	// 		styles = styles.aboutnav
	// 		break;
	// 	case "/thecollection":
	// 		styles = styles.collectionnav
	// 		break;
	// 	default:
	// 		styles = styles.homenav
	// 		break;
	// }


	return (
		<NavStyles>
			<Navbar expand="lg" style={styles}>
				<Navbar.Brand href="https://elizabethharkins.github.io/cover-story/#/">Liz Harkins</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						{/* <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> */}
						<Nav.Item><Nav.Link href="https://www.linkedin.com/in/emharkins/" target="_blank">in</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="https://twitter.com/_lizzith" target="_blank">chirp</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="https://github.com/elizabethharkins" target="_blank">hub</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="https://elizabethharkins.github.io/cover-story/#/about">About</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="https://elizabethharkins.github.io/cover-story/#/thecollection">The Collection</Nav.Link></Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</NavStyles>
	);
	
}







