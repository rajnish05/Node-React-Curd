const axios = require('axios');

// Add new Customer
export const addCustomer = (payload) =>dispatch =>{
    return new Promise((resolve,reject) =>{
        axios
        .post('/api/v1/customers/',payload)
        .then((customer) =>{
            console.log("New Customer is added Successfully",customer)
            resolve(customer)
        })
        .catch((err) =>{
            console.log('Error during adding customer',err)
            reject(err)
        })
    })
}
// list of Customer
export const getCustomer = () => dispatch =>{
    return new Promise((resolve,reject) =>{
        axios
        .get('/api/v1/customers/')
        .then((customer) =>{
            resolve(customer)
        })
        .catch((err) =>{
            reject(err)
        })
    })
} 

// Update Customer
export const updateCustomerById = (payload) =>dispatch =>{
    return new Promise((resolve,reject) =>{
        let url = '/api/v1/customers/'  + payload.customerId 
        console.log("payload",payload)
        axios
        .put(url,payload.data)
        .then((customer) =>{
            resolve(customer)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}

// Delete Customer
export const deleteCustomerById = (payload) =>dispatch =>{
    return new Promise((resolve,reject) =>{
        let url = '/api/v1/customers/'  + payload._id
        axios
        .delete(url)
        .then((customer) =>{
            resolve(customer)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}
