

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";


const NavStyles = styled.div`
	.navbar { 
		background-color: var(--blue-magenta);
		background-image: var(--accent-gradient);
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		border-bottom: 1px solid var(--light-pastel-purple);
		width: 100vw;
	}
	a, .navbar-nav, .navbar-light .nav-link {
		color: #eaedf0;
		&:hover { color: white; }
	}
	.navbar-brand {
		font-size: 1.4em;
		z-index: 9999;
		color: #eaedf0;
		cursor: pointer;
		text-decoration: underline;
		&:hover { color: white; }
	}
	.navbar-light .navbar-toggler {
		padding: 0.125em;
	}
	.navbar-light .navbar-toggler-icon {
		background-image: linear-gradient(45deg, var(--blue-magenta), #eaedf0, var(--blue-magenta), #eaedf0, var(--blue-magenta), #eaedf0, var(--blue-magenta), #eaedf0, var(--blue-magenta));
	}
	.navbar-nav {
		margin-top: 1em;
		margin-bottom: 1em;
	}
	.nav-item {
		text-align: center;
		background: rgba(255,255,255, 0.1);
		border-radius: 0.125em;
		transition: all .6s ease;
		&:hover { box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; }
	}
`;


export const NavigationBar = () => (
	<NavStyles>
		<Navbar expand="lg">
			<Navbar.Brand href="mailto:eliz@betsthewebdev.com?Subject=Hi, Liz!" target="_top" rel="noreferrer">Elizabeth Harkins</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
					<Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="/thecollection">The Collection</Nav.Link></Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</NavStyles>
);







