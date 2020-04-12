

export const addUserValidation = (data) =>{
    return new Promise((resolve,reject) =>{
        let errors = {};
        let formIsValid = true;
         // User Name
         if(data.userName.length == 0){
            formIsValid = false
            errors["userName"] = "User Name is Required !";
            reject(errors)
        } 
        if(data.userName.length>0){
            if(!(data.userName.match(/^[a-zA-Z ]{2,30}$/))){
                errors["userName"] = "Provided Name is Invalid";
                reject(errors)
            }
        }

        //   AGE of User
      if (data.userAge.length == 0) {
        formIsValid = false;
        errors["userAge"] = "AGE is required";
        reject(errors)
     }
     if (data.userAge.length > 0) {
        if (!(data.userAge.match(/^(?=.*[0-9])[- +()0-9]{1,2}$/))) {
           formIsValid = false;
           errors["userAge"] = "Provided AGE is Invalid";
           reject(errors)
        }
     }

      //   Salary of User
      if (data.userSalary.length == 0) {
        formIsValid = false;
        errors["userSalary"] = "Salary is required";
        reject(errors)
     }
     if (data.userSalary.length > 0) {
        if (!(data.userSalary.match(/^(?=.*[0-9])[- +()0-9]{3,6}$/))) {
           formIsValid = false;
           errors["userSalary"] = "Provided Salary is Invalid";
           reject(errors)
        }
     }

     resolve(formIsValid)
  })
}

