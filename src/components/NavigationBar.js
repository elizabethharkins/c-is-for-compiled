

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
const NavStyles = styled.div`
	font-family: 'Droid Serif', serif;
	font-size: 1.1em;
	
	.navbar { 
		box-shadow: 0 5px 20px -10px #000;
		padding: 0.25rem 1rem 0.25rem 1rem;
		top: 0;
		width: 100vw;
		background: var(--nav-gradient);
		border-bottom: 1px solid var(--blue-magenta);
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


export const NavigationBar = () => {

	let styles = {
		color: "var(--light-pastel-purple)",
		fontFamily: "'Barriecito', cursive",
	}

	return (
		<NavStyles>
			<Navbar expand="lg">
				<Navbar.Brand href="/">L<span style={ styles }>;</span>z Harkins</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
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







