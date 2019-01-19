import React, { Component } from 'react';
import './../App.css';
import Menu from "./MenuComponent";
import { DISHES } from "./../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import { connect } from 'react-redux';
import { addComment, fetchDishes } from "../redux/ActionCreators";

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}
};

const mapDispatchToProps = dispatch => ({
	addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
	fetchDishes: () => { dispatch(fetchDishes())}
});



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

	componentDidMount() {
		this.props.fetchDishes();
	}

	HomePage = () => {
		return(
			<Home
				dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
				dishesLoading={this.props.dishes.isLoading}
				dishesErrMess={this.props.dishes.errMess}
				promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
				leader={this.props.leaders.filter((leader) => leader.featured)[0]}
			/>
		);
	};

	// the route parameter provides three properties in props Object : match, history and location
	DishWithId = ({match}) => {
		return(
			<DishDetail
				dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
				isLoading={this.props.dishes.isLoading}
				errMess={this.props.dishes.errMess}
				comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
				addComment={this.props.addComment}
			/>
		);
	};


	onDishSelect = dishId => {
		this.setState({ selectedDishId: dishId});
	};

  MenuPage = () => {
		return (
			<Menu dishes={this.props.dishes}/>
		)
	}	;

	AboutPage = () => {
		return (
			<About leaders={this.props.leaders}/>
		)
	}	;

	render() {
		return (
			<div>
				<Header/>

				<Switch>
					<Route path='/home' component={this.HomePage} />
					<Route exact path='/menu' component={this.MenuPage} />} />
					<Route exact path='/contactus' component={Contact} />} />
					<Route exact path='/aboutus' component={this.AboutPage} />} />
					<Route path='/menu/:dishId' component={this.DishWithId} />
					<Redirect to='/home' />
				</Switch>

				<Footer/>
			</div>
		);
	}
}

// connect is for connecting this Component with Redux and that returns a function
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));