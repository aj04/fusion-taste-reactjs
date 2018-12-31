import React, { Component } from 'react';
import './../App.css';
import Menu from "./MenuComponent";
import { DISHES } from "./../shared/dishes";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./HomeComponent";

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
		const HomePage = () => {
			return(
				<Home/>
			);
		};
		const MenuPage = () => {
			return (
				<Menu dishes={this.state.dishes}/>
			)
		}	;
		return (
			<div>
				<Header/>

				<Switch>
					{/*<Route path='/home' component={HomePage} />*/}
					<Route path='/home' component={MenuPage} />
					<Route exact path='/menu' component={MenuPage} />} />
					<Redirect to="/home" />
				</Switch>

				{/*<div className="container">*/}
					{/*<Menu dishes={this.state.dishes}*/}
						{/*onClick={(dishId) => this.onDishSelect(dishId)}/>*/}

						{/*<DishDetail*/}
							{/*dish={this.getDishDetailWithDishId()}/>*/}
						<Footer/>
				{/*</div>*/}
			</div>
		);
	}
}

export default Main;
