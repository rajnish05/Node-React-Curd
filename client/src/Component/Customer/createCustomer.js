import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { addCustomer } from '../../Action/customerAction';
import { addcustomerValidation } from '../Common/customerValidation';

class CreateCustomer extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : '',
			lastName : '',
			errors:{}
        }
    };

    handleChange = (event) =>{
        this.setState({[event.target.id]:event.target.value})
    }

    handleSubmit = (event) =>{
		event.preventDefault();
		addcustomerValidation(this.state)
		.then((customervalidate) =>{
			if( customervalidate == true){
				this.props.addCustomer(this.state)
				.then((customer) =>{
					this.props.history.push('/customers')
				})
				.catch((err) =>{
					console.log("eeeeeee",err)
				})
			}

		})
		.catch((err) =>{
			this.setState({errors:err})
		})
       
    }
    
    render(){
		const { errors } = this.state;
        return(
            <div className="container">
	      	<div className="col-lg-12">
	      	    <form onSubmit={this.handleSubmit}>
			            <div className="form-group">
			              <label htmlFor="firstName">First Name</label>
			              <input
			                type="text"
			                className="form-control"
			                id="firstName"
			                autoComplete="off"
			                onChange= {this.handleChange}
			                />
							<span className = 'red-text'>{errors.firstName}</span>
			            </div>
			            <div className="form-group">
			              <label htmlFor="lastName"> Last Name </label>
			              <input
			                type="text"
			                className="form-control"
			                id="lastName"
			                autoComplete="off"
			                onChange= {this.handleChange}
			                />
							<span className = 'red-text'>{errors.lastName}</span>

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
    // user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    addCustomer: (data) => dispatch(addCustomer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomer);