import React, { Component }  from 'react';
import { Button,	Card,	CardBody,	CardImg, CardText, CardTitle,
	Label, Modal, ModalBody,	ModalHeader, Row} from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Errors, LocalForm } from "react-redux-form";

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
				<CommentForm/>
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

// @todo Move CommentForm Class Component into its own File.
class CommentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false
		};
	}

	toggleSubmitDialog = () => {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	};

	handleCommentSubmit = (values) => {
		console.log('Current State is: ' + JSON.stringify(values));
		alert('Current State is: ' + JSON.stringify(values));
		this.toggleSubmitDialog();
	};

	render() {
		const required = (val) => val && val.length;
		const maxLength = (len) => (val) => !(val) || (val.length <= len);
		const minLength = (len) => (val) => val && (val.length >= len);
		return (
			<div>
				<Modal isOpen={this.state.isModalOpen}>
					<ModalHeader toggle={this.toggleSubmitDialog}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="rating">Rating</Label>
								<Control.select model=".rating" name="rating"
																className="form-control">
									<option>1</option><option>2</option><option>3</option>
									<option>4</option><option>5</option>
								</Control.select>
							</Row>
							<Row className="form-group">
								<Label htmlFor="userName">Your Name</Label>
								<Control.text type="text" model=".userName" id="userName"
									 name="userName" placeholder="User Name" className="form-control"
									 validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}/>
								<Errors
									className="text-danger"
									model=".userName"
									show="touched"
									messages={{
										required: 'Required',
										minLength: 'Must be greater than 2 characters',
										maxLength: 'Must be 15 characters or less'
									}}
								/>
							</Row>
							<Row  className="form-group">
								<Label htmlFor="comment">Comment</Label>
								<Control.textarea model=".comment" id="comment" name="comment"
										rows="6"	className="form-control" />
							</Row>
							<Button type="submit" value="submit" color="primary">Submit</Button>
						</LocalForm>
					</ModalBody>
				</Modal>
				<Button outline onClick={this.toggleSubmitDialog} >
					<span className="fa fa-pencil fa-lg"></span>
					Submit Comment </Button>
			</div>
		)
	}
}

export default DishDetail;
