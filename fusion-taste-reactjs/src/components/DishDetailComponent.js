import React  from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const DishDetail = (props) => {
	const selectedDish = props.dish;
	return(
		<div className="row">
			<div  className="col-12 col-md-5 m-1">
				{renderDish(selectedDish)}
			</div>
			<div  className="col-12 col-md-5 m-1">
				{renderComments(selectedDish)}
			</div>
		</div>
	)
};

function renderComments(dish) {
	if (dish && dish.comments != null) {
		const formattedComments = dish.comments.map((formattedComment) => {
			const date = new Date(formattedComment.date);
			const formattedDate = date.toDateString();
			return(
				<li key={formattedComment.id}>
					<p>{formattedComment.comment}</p>
					<p> -- {formattedComment.author}, { formattedDate }</p>
				</li>
			)
		});
		return(
			<div className="p-3">
				<h4>Comments</h4>
				<ul className="list-unstyled">{formattedComments}</ul>
			</div>
		);
	}
	else {
		return(<div></div>);
	}
}

function renderDish(dish) {
	if (dish != null)
		return(
			<Card>
				<CardImg top src={process.env.PUBLIC_URL + '/' + dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	else
		return(
			<div></div>
		);
}


export default DishDetail;
