import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CarouselSW = () => {
	return (
		<Container>
			<Carousel>
				<Carousel.Item>
					<Link to="/people">
						<img
							className="d-block w-100"
							src="https://www.projectcasting.com/wp-content/uploads/2018/09/star-wars-696x400.jpg"
							alt="People"
						/>
					</Link>
					<Carousel.Caption>
						<h3>Peoples</h3>
						<p>Find your favorites Peoples</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Link to="/planet">
						<img
							className="d-block w-100"
							src="https://files.brainfall.com/wp-content/uploads/2015/10/which_star_wars_planet_are_you_from_featured_large.jpg"
							alt="Planets"
						/>
					</Link>
					<Carousel.Caption>
						<h3>Planets</h3>
						<p>Find your favorites Planets</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
