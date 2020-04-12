import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Component/Home/home';


import Customers from './Component/Customer/customers'
import CreateCustomer from './Component/Customer/createCustomer'
import CustomerDetails from "./Component/Customer/customerDetails";


// for custom  users
import Users from "./Component/User/users";
import CreateUser from "./Component/User/CreateUser";
import UserDetails from "./Component/User/UserDetails";

const routing = () => (
    <div>
    <Switch>
    <Route exact path="/" component={Home} label="Home"/>

        <Route path="/customers" component={Customers} />
        <Route path="/customer/view" component={CustomerDetails} />
        <Route path="/customer/new" component={CreateCustomer} />

        <Route path="/users" component={Users} />
        <Route path="/user/new" component={CreateUser} />
        <Route path="/user/view" component={UserDetails} />
        



    </Switch>
    </div>
)
export default routing;