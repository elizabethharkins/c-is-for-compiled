

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./Home";
import { About } from "./about/About";
import { TheCollection } from "./thecollection/TheCollection";


function App() {

	return (
		<React.Fragment>
			<Router basename={process.env.PUBLIC_URL}>
				<NavigationBar />

				<Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/about" component={ About } />
					<Route path="/thecollection" component={ TheCollection } />
				</Switch>
			</Router>
		</React.Fragment>
	);

}


export default App;




