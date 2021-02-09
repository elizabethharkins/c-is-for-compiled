

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";


const NavStyles = styled.div`
	.navbar { 
		padding: 0.25rem 1rem 0.25rem 1rem;
		position: fixed;
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
		color: var(--light-accent-blue);
		cursor: pointer;
		text-decoration: underline;
		&:hover { color: white; }
	}
	.navbar-light .navbar-toggler {
		padding: 0.125em;
	}
	.navbar-nav {
		margin-top: 1em;
		margin-bottom: 1em;
	}
	.nav-item {
		text-align: center;
		background: rgba(255,255,255, 0.1);
		transition: all .6s ease;
		border-bottom: 1px solid var(--light-accent-blue);
		&:hover { box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; }
	}
	.nav-link.active {
		color: unset !important;
	}
`;


export function NavigationBar() {

	let path = window.location.pathname;
	console.log(path);

	let styles = {
		homenav: {
			background: "linear-gradient(to right, #ff5c5c, #ffa860, #e3dc44, #57b02a)",
			borderBottom: "none",
		},
		aboutnav: {
			background: "rgb(153, 33, 232, 0.9)",
			borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
			zIndex: 4
		},
		collectionnav: {
			background: "rgba(51, 51, 51, 0.9)",
			borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
			zIndex: 4
		}
	}

	switch (path) {
		case "/":
			styles = styles.homenav
			break;
		case "/about":
			styles = styles.aboutnav
			break;
		case "/thecollection":
			styles = styles.collectionnav
			break;
		default:
			styles = styles.homenav
			break;
	  }

	return (
		<NavStyles>
			<Navbar expand="lg" style={styles}>
				<Navbar.Brand href="/">Elizabeth Harkins</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						{/* <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> */}
						<Nav.Item><Nav.Link href="https://www.linkedin.com/in/emharkins/" target="_blank">in</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="https://twitter.com/_lizzith" target="_blank">chirp</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="https://github.com/elizabethharkins" target="_blank">hub</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="/thecollection">The Collection</Nav.Link></Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</NavStyles>
	);
	
}







