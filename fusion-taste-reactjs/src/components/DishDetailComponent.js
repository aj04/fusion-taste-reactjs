import React  from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const DishDetail = (props) => {
	const selectedDish = props.dish;
	return(
		<div className="container">
			<div className="row">
				<Breadcrumb>

					<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
					<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>{props.dish.name}</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				<div  className="col-12 col-md-5 m-1">
					{renderDish(selectedDish)}
				</div>
				<div  className="col-12 col-md-5 m-1">
					{renderComments(props.comments)}
				</div>
			</div>
		</div>
	)
};

function renderComments(comments) {
	if (comments != null) {
		const formattedComments = comments.map((formattedComment) => {
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
	if (dish != null) {
		if (process.env.PUBLIC_URL && !dish.image.includes(process.env.PUBLIC_URL)) {
			dish.image = process.env.PUBLIC_URL + dish.image;
		}
		return (
			<Card>
				<CardImg top src={dish.image} alt={dish.name}/>
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	}
	else
		return(
			<div></div>
		);
}


export default DishDetail;
