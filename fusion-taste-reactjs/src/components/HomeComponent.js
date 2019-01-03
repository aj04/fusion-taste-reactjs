import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";


function RenderCard({item}) {

	if (process.env.PUBLIC_URL) {
		item.image = process.env.PUBLIC_URL  + item.image;
	}
	return(

		<Card>
			<CardImg src={item.image} alt={item.name} />
			<CardBody>
				<CardTitle>{item.name}</CardTitle>
				{/*See below how Javascript is inserted right into HTML*/}
				{item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
				<CardText>{item.description}</CardText>
			</CardBody>
		</Card>
	);

}

function Home(props) {
	return(
		<div className="container">
			<div className="row align-items-start">
				<div className="col-12 col-md m-1">
					<RenderCard item={props.dish} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.promotion} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.leader} />
				</div>
			</div>
		</div>
	);
}

export default Home;