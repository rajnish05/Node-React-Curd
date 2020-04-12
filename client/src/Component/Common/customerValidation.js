

export const addcustomerValidation = (data) =>{
    return new Promise((resolve,reject) =>{
        let errors = {};
        let formIsValid = true;
         // User Name
         if(data.firstName.length == 0){
            formIsValid = false
            errors["firstName"] = "First Name is Required !";
            reject(errors)
        } 
        if(data.firstName.length>0){
            if(!(data.firstName.match(/^[a-zA-Z ]{2,30}$/))){
                errors["firstName"] = "Provided first Name is Invalid";
                reject(errors)
            }
        }
 
        // User Name
        if(data.lastName.length == 0){
            formIsValid = false
            errors["lastName"] = "last Name is Required !";
            reject(errors)
        } 
        if(data.lastName.length>0){
            if(!(data.lastName.match(/^[a-zA-Z ]{2,30}$/))){
                errors["lastName"] = "Provided last Name is Invalid";
                reject(errors)
            }
        }
      
     resolve(formIsValid)
  })
}

