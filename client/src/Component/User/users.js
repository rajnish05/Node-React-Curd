import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUserById } from '../../Action/userAction'
import { connect } from 'react-redux';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        this.props.getUsers()
            .then((resUser) => {
                this.setState({ userList: resUser.data })
            })
            .catch((errUser) => {
                console.log("Errr", errUser)

            })

    }

    handleEdit = (user) => {
        this.props.history.push('/user/view', { user: user })
    }

    handleDelete = (user) => {
        this.props
            .deleteUserById(user)
            .then((user) => {
                console.log("User Deleted", user)
                this.props.getUsers()
                    .then((resUser) => {
                        this.setState({ userList: resUser.data })
                    })
                    .catch((errUser) => {
                        console.log("Errr", errUser)

            })
            })
            .catch((err) => {
                console.log("errrrrrr in deleting User", err)
            })
    }




    render() {
       
        return (<div className="container">
            <div className="col-lg-12">
                <Link to={`/user/new`} ><button className="btn btn-success pull-right" >New User</button></Link>
                <table className="table table-striped">
                    <tbody>
                        <tr className = "custom-align">
                            <th> Name</th>
                            <th> AGE</th>
                            <th> Salary</th>
                            <th> Action</th>


                        </tr>
                        {
                            this.state.userList.map((user, index) =>
                                <tr key={index}>
                                    <td className = "custom-align" >{user.userName}</td>
                                    <td className = "custom-align" >{user.userAge}</td>
                                    <td className = "custom-align" >{user.userSalary}</td>
                                    <td className = "custom-align" > 
                                        <i className="fa fa-edit btn btn-info" onClick={() => this.handleEdit(user)}> </i>   &nbsp;
                                        <i className="fa fa-trash btn btn-danger" onClick={() => this.handleDelete(user)}> </i>
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
    getUsers: () => dispatch(getUsers()),
    deleteUserById: (user) => dispatch(deleteUserById(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);