import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


class DishDetailComponent extends Component {

	// constructor(props) {
	// 	super(props);
	// }

	render() {
		// selected dish will be this.prop.selectedDish
		const selectedDish = this.props.selectedDish;
		return(
			<div className="row">
				<div  className="col-12 col-md-5 m-1">
					{this.renderDish(selectedDish)}
				</div>
			</div>
		)
	}

	renderDish(dish) {
		if (dish != null)
			return(
				<Card>
					<CardImg top src={dish.image} alt={dish.name} />
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
}

export default DishDetailComponent;
