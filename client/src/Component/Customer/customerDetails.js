import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { updateCustomerById } from '../../Action/customerAction';
import { addcustomerValidation } from '../Common/customerValidation';


class CreateCustomer extends Component {
    constructor(props){
        super(props);
        this.state = this.props.history.location.state;
		this.state.errors = {}
    };

    handleChange = (event) =>{
        const { customer } = this.state;
        const customerDetails = {
            ...customer,
            [event.target.id]:event.target.value
        }
        this.setState({customer:customerDetails})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        let payload = {
			customerId : this.props.history.location.state.customer._id,
			data : this.state.customer
        }
        console.log("this.statessss",payload)
        addcustomerValidation(payload.data)
		.then((customervalidate) =>{
			if( customervalidate == true){
				this.props
                .updateCustomerById(payload)
                .then((customer) =>{
                    this.props.history.push('/customers')
                })
                .catch((err) =>{
                    console.log('eeeeeerrrrrrr in updation',err)
                })
			}

		})
		.catch((err) =>{
			this.setState({errors:err})
		})
        
    }
    
    render(){
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
                            value = {this.state.customer.firstName}
			                />
							<span className = 'red-text'>{this.state.errors.firstName}</span>

			            </div>
			            <div className="form-group">
			              <label htmlFor="lastName"> Last Name </label>
			              <input
			                type="text"
			                className="form-control"
			                id="lastName"
			                autoComplete="off"
                            onChange= {this.handleChange}
                            value = {this.state.customer.lastName}
                        />
							<span className = 'red-text'>{this.state.errors.lastName}</span>

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
    updateCustomerById: (data) => dispatch(updateCustomerById(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomer);