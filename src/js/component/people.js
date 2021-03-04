import React, { useState, useContext } from "react";
import { Card, Container, CardDeck, Col, ButtonToolbar, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container>
			<h1 className="display-5 text-center mt-5 text-primary">Characters</h1>
			<CardDeck>
				{store.peoples.map((item, index) => {
					return (
						<Col className="mt-5" md={4} key={index}>
							<Card style={{ width: "18rem" }}>
								<Card.Img
									variant="top"
									src="https://cdn.vox-cdn.com/thumbor/ELoxTLvnu6VxO_sL3l2g9pnZm_g=/0x0:1347x1534/1200x800/filters:focal(557x781:771x995)/cdn.vox-cdn.com/uploads/chorus_image/image/66748200/skywalker_saga_now_streaming_final_7b3070d1.0.jpeg"
								/>
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>
										<p>
											<strong>Gender: </strong>
											<span>{item.gender}</span>
										</p>
										<p>
											<strong>Hair color: </strong>
											<span>{item.hair_color}</span>
										</p>
										<p>
											<strong>Eye color: </strong>
											<span>{item.eye_color}</span>
										</p>
									</Card.Text>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										<Link to={`/people/${index}`}>
											<Button variant="primary">Go somewhere</Button>
										</Link>
										<Link
											onClick={() => {
												actions.addFavorite(item.name, "people");
											}}>
											<Button variant="outline-warning">
												<i className="far fa-heart" />
											</Button>
										</Link>
									</ButtonToolbar>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</CardDeck>
		</Container>
	);
};
