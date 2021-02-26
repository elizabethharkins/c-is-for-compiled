

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import { About } from "./about/About";
import { TheCollection } from "./thecollection/TheCollection";
import { Footer } from "./components/Footer";


export const App = () => {

	return (
		<React.Fragment>
			<Router basename="/c-is-for-compiled">
				<NavigationBar />

				<Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/about" component={ About } />
					<Route path="/thecollection" component={ TheCollection } />
				</Switch>

				<Footer />
			</Router>
		</React.Fragment>
	);

}





