import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import './../App.css';
import Menu from "./MenuComponent";
import { DISHES } from "./../shared/dishes";
import DishDetail from "./DishDetailComponent";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDishId: null
		};
	}


	onDishSelect = dishId => {
		this.setState({ selectedDishId: dishId});
	};

	getDishDetailWithDishId = dishId => {
		 dishId = dishId || this.state.selectedDishId;
		 const dishObj = this.state.dishes.filter((dish) => dish.id === dishId );
		 return dishObj[0];
  };

	render() {
		return (
			<div>
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href='/'> Asian Fusion Taste Restaurant </NavbarBrand>
					</div>
				</Navbar>

				<div className="container">
					<Menu dishes={this.state.dishes}
						onClick={(dishId) => this.onDishSelect(dishId)}/>

						<DishDetail
							dish={this.getDishDetailWithDishId()}/>
				</div>
			</div>
		);
	}
}

export default Main;
