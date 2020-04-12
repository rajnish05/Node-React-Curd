import React, { Component } from 'react';
import { updateUserById } from '../../Action/userAction'
import { connect } from 'react-redux';
import { addUserValidation } from '../Common/userValidation'

class CreatUser extends Component {

	constructor(props) {
		super(props);
		this.state = this.props.history.location.state;
		this.state.errors = {}
	}
	handleChange = (event) => {
		const { user } = this.state;
		const userDetails = {
			...user,
			[event.target.id]: event.target.value
		}
		this.setState({ user: userDetails })
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let payload = {
			userId: this.props.history.location.state.user._id,
			data: this.state.user
		}
		addUserValidation(payload.data)
			.then((userValidate) => {
				if (userValidate == true) {
					this.props
						.updateUserById(payload)
						.then((user) => {
							this.props.history.push('/users')
						})
						.catch((err) => {
							console.log("errr in updating User", err)
						})
				}
			})
			.catch((err) => {
				console.log("eeeeeeee", err)
				this.setState({ errors: err })
			})

	}




	render() {
		return (
			<div className="container">
				<div className="col-lg-12">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="userName">User Name</label>
							<input
								type="text"
								className="form-control"
								id="userName"
								autoComplete="off"
								onChange={this.handleChange}
								value={this.state.user.userName}
							/>
							<span className = 'red-text'>{this.state.errors.userName}</span>
						</div>
						<div className="form-group">
							<label htmlFor="userAge"> User Age </label>
							<input
								type="text"
								className="form-control"
								id="userAge"
								autoComplete="off"
								onChange={this.handleChange}
								value={this.state.user.userAge}
							/>
							<span className = 'red-text'>{this.state.errors.userAge}</span>
						</div>
						<div className="form-group">
							<label htmlFor="userSalary">User Salary</label>
							<input
								type="text"
								className="form-control"
								id="userSalary"
								autoComplete="off"
								onChange={this.handleChange}
								value={this.state.user.userSalary}
							/>
							<span className = 'red-text'>{this.state.errors.userSalary}</span>

						</div>
						<button type="submit" className="btn btn-success btn-lg">
							SAVE
			            </button>
					</form>
				</div>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => ({
	updateUserById: (data) => dispatch(updateUserById(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatUser);