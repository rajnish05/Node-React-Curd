import { GET_USERS, DELETE_USER } from '../Action/actionType'
const axios = require('axios')
// Add a New User
export const addUser = (payload) => dispatch =>{
  return new Promise((resolve,reject) =>{
    axios
      .post("/api/v1/users/",payload)
      .then((user) =>{
        console.log("here is the New User >>>",user)
        resolve(user)
      })
      .catch((err) =>{
        console.log("Error during adding a new User >>>",err)
        reject(err)
      })
  })
}

// list of Users
export const getUsers = () => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/v1/users/")
      .then(res => {
          console.log("User list is >>>",res)
       
        resolve(res);
      })
      .catch(err => { 
          console.log("Error during fetching User List",err)
        reject(err);
      });
  });
};

// Update user by Id
export const updateUserById = (payload) => dispatch =>{
  return new Promise((resolve, reject) =>{
    let url = '/api/v1/users/' + payload.userId;
    axios
    .put(url,payload.data)
    .then((user) =>{
      console.log("updated user is >>> ",user)
      resolve(user)
    })
    .catch((err) =>{
      console.log("error in updating User >>> ", err )
      reject(err)
    })
  })
}

// Delete User by Id
export const deleteUserById = (payload) => dispatch =>{
  return new Promise((resolve, reject) =>{
    let url = '/api/v1/users/' + payload._id;
    axios
    .delete(url)
    .then((user) =>{
      // dispatch({ type: DELETE_USER, payload: payload })
      resolve(user)
    })
    .catch((err) =>{
      console.log("error in deleting User >>> ", err )
      reject(err)
    })
  })
}