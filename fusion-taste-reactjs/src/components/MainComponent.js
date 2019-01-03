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
					<Redirect to='/home' />
				</Switch>

				{/*<Route exact path={`/`} render={ (routerProps) => < Home routerProps={routerProps} setUpGame={this.setUpGame} />} />*/}
			{/*</Switch>*/}


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