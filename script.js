function validateForm(){
 
    let  full_name = document.querySelector('#fullname').value
    let full_name_size = full_name.length


     let  sur_name = document.querySelector('#surname').value
     let sur_name_size = full_name.length

     let  mobile_number = document.querySelector('#mobilenumber').value
     let  mobile_number_size = mobile_number.length

    let  city_name= document.querySelector('#cityname').value
    let  city_name_size = city_name.length

     let  address_name = document.querySelector('#addressname').value
    let  address_name_size = address_name.length

     

    if(full_name_size < 3){

      document.querySelector(".error").innerText = "This is not a perfect name!!"
      
    }else if(sur_name < 3){
        document.querySelector(".error").innerText = "Please, write a perfect name"

   }else if(mobile_number == 10){
        document.querySelector(".error").innerText = "Please, write a valid mobile number" 

    }else if(city_name < 3){
         document.querySelector(".error").innerText = "Please, write a perfect city!!" 

   }else if(address_name < 3){
       document.querySelector(".error").innerText = "Please, write a perfect address"
    
    }else{
        document.querySelector(".error").innerText = ""
        document.querySelector(".success").innerText = " New account created successfully"
    }
}


