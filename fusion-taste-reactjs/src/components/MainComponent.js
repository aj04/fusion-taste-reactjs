import React, { Component } from 'react';
import './../App.css';
import Menu from "./MenuComponent";
import { DISHES } from "./../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import DishDetail from "./DishDetailComponent";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			leaders: LEADERS,
			promotions: PROMOTIONS,
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
		// the route parameter provides three properties in props Object : match, history and location
		const DishWithId = ({match}) => {
			return(
				<DishDetail
					dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
					comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
				/>
			);
		};
		const HomePage = () => {
			return(
				<Home
					dish={ this.state.dishes.filter( (dish) => dish.featured)[0]}
					promotion={ this.state.promotions.filter( (promo) => promo.featured)[0]}
					leader={ this.state.leaders.filter( (leader) => leader.featured)[0]}
				/>
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
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={MenuPage} />} />
					<Route exact path='/contactus' component={Contact} />} />
					<Route path='/menu/:dishId' component={DishWithId} />
					<Redirect to='/home' />
				</Switch>

				<Footer/>
			</div>
		);
	}
}

export default Main;
