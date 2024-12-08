var signupEmail=document.getElementById('Email')
var signupPassword=document.getElementById('Password')
var signupusername=document.getElementById('name')

var email= ""
var password=""

var loginEmail=document.getElementById("Emaillogin")
var loginPassword=document.getElementById("Passwordlogin")
var useremail
var userpassword





function signupAccount(){
    email=signupEmail.value
    password=signupPassword.value
    if(signupusername.value.trim()!==""){
    if(email.trim()!==""){
        if(password.trim()!==""){
            Swal.fire({
                icon: "success",
                title: "Congrats",
                text: "Account Created"
              });
              console.log(email + password)}
              else{
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "Please Enter A Password"
              });}
    }
    else{
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Enter Your Email"
          });
}
}else{
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Enter Your name"
          });
    }
   
} 

function logintowindow(){
    useremail=loginEmail.value
    userpassword=loginPassword.value

    if(useremail.trim()!==""){
        if(userpassword.trim()!==""){
            if(useremail===email){
                if(userpassword===password){
                    window.location.href="homepage.html"
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Enter a correct password!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                }
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Enter a Correct Email!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "empty filed!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
           }
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "empty field!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
}


function noBack() {
    window.history.forward();}
noBack()