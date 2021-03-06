import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
//diq----
import { CarouselSW } from "./component/carousel";
import { People } from "./component/people";
import { Planet } from "./component/planet";
import { Menu } from "./component/menu";
//diq----

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PeopleDetails } from "./views/peopleDetails";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Menu />
					<Switch>
						<Route exact path="/">
							<CarouselSW />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/planet">
							<Planet />
						</Route>
						<Route exact path="/people/:id">
							<PeopleDetails />
						</Route>

						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
