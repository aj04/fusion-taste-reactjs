import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import './../App.css';
import Menu from "./MenuComponent";
import { DISHES } from "./../shared/dishes";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

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
				<Header/>

				<div className="container">
					<Menu dishes={this.state.dishes}
						onClick={(dishId) => this.onDishSelect(dishId)}/>

						<DishDetail
							dish={this.getDishDetailWithDishId()}/>
						<Footer/>
				</div>
			</div>
		);
	}
}

export default Main;
