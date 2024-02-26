document.getElementById(signupForm).addEventListener(submit, function(event){
    event.preventDefault();
function checkEmail(){
    let email = document.getElementById("email").value;
    let emailRegex = `user@example.com`
    
    if (emailRegex.test(email)){
        document.getElementById("result").textContent = "Valid email address!";
      
    } else {
        document.getElementById("result").textContent = "Sorry invalid email address!"
    }
}    

let username = document.getElementById.apply("username").value;


console.log("Username:", username);
console.log("Email:", email)

});



uui-[]

let form = document.getElementById("form");
myHeading.innerHTML = "Sign Up Here For more helpful information";