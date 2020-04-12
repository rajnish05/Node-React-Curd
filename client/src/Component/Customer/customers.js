import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCustomer, deleteCustomerById } from '../../Action/customerAction'
import { connect } from 'react-redux';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerList: []
        }
    }

    componentDidMount() {
        this.props.getCustomer()
            .then((customer) => {
                this.setState({ customerList: customer.data })
            })
            .catch((errUser) => {
                console.log("Errr", errUser)

            })

    }

    handleEdit = (customer) => {
        this.props.history.push('/customer/view', { customer: customer })
    }

    handleDelete = (customer) => {
        this.props
            .deleteCustomerById(customer)
            .then((customer) => {
                console.log("User Deleted", customer)
                this.props.getCustomer()
                    .then((resCustomer) => {
                        this.setState({ customerList: resCustomer.data })
                    })
                    .catch((errCustomer) => {
                        console.log("Errr", errCustomer)

            })
            })
            .catch((err) => {
                console.log("errrrrrr in deleting Customer", err)
            })
    }




    render() {
       
        return (<div className="container">
            <div className="col-lg-12">
                <Link to={`/customer/new`} ><button className="btn btn-success pull-right" >New Customer</button></Link>
                <table className="table table-striped">
                    <tbody>
                        <tr className = "custom-align">
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Action</th>


                        </tr>
                        {
                            this.state.customerList.map((customer, index) =>
                                <tr key={index}>
                                    <td className = "custom-align" >{customer.firstName}</td>
                                    <td className = "custom-align" >{customer.lastName}</td>
                                    <td className = 'custom-align'>
                                        <i className="fa fa-edit btn btn-info" onClick={() => this.handleEdit(customer)}> </i>   &nbsp;
                                        <i className="fa fa-trash btn btn-danger" onClick={() => this.handleDelete(customer)}> </i>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>)
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    getCustomer: () => dispatch(getCustomer()),
    deleteCustomerById: (customer) => dispatch(deleteCustomerById(customer)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);