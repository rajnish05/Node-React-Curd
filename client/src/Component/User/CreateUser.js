import React, { Component } from 'react';
import { addUser } from '../../Action/userAction'
import { connect } from 'react-redux';
import {addUserValidation} from '../Common/userValidation';

class CreatUser extends Component {

    constructor() {
        super();
        this.state = {
			userName: "",
			userAge: "",
			userSalary: "",
			errors:{}
		};
       
	}
	
	handleChange =(event) =>{
		this.setState({[event.target.id]:event.target.value})
	}

	handleSubmit = (event) =>{
		event.preventDefault();
		addUserValidation(this.state)
		.then((userValidate) =>{
			if(userValidate == true){
				this.props.addUser(this.state)
					.then((user) =>{
						if(user){
							this.props.history.push('/users')
						}
					})
					.catch((err) =>{
						console.log("err in user",err)
					})
			}

		})
		.catch((err) =>{
			console.log("eeeeeeee",err)
			this.setState({errors:err})
		})
	}
    


    render() {
		const { errors } = this.state
		console.log("eeeeeeeeeerrrrrrrrrr",errors)

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
			                onChange= {this.handleChange}
			                />
							<span className = 'red-text'>{errors.userName}</span>
			            </div>
			            <div className="form-group">
			              <label htmlFor="userAge"> User Age </label>
			              <input
			                type="text"
			                className="form-control"
			                id="userAge"
			                autoComplete="off"
			                onChange= {this.handleChange}
			                />
							<span className = 'red-text'>{errors.userAge}</span>
			            </div>
			             <div className="form-group">
			              <label htmlFor="userSalary">User Salary</label>
			              <input
			                type="text"
			                className="form-control"
			                id="userSalary"
			                autoComplete="off"
			                onChange= {this.handleChange}
			                />
							<span className = 'red-text'>{errors.userSalary}</span>

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
    addUser: (data) => dispatch(addUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatUser);