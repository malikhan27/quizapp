var signupEmail=document.getElementById('Email')
var signupPassword=document.getElementById('Password')
var signupusername=document.getElementById('name')
var emailregex= /^\S+@\S+\.\S+$/;
var nameregex=/^[a-zA-Z]+$/;
var email= ""
var password=""
var name=""
var loginEmail=document.getElementById("Emaillogin")
var loginPassword=document.getElementById("Passwordlogin")
var useremail
var userpassword
var userinfo
var information
var pagedirectiontomain
var getpagelocation
var moderadio=document.getElementById("mode")
var mainbodydiv=document.getElementById("mainbody")

function darkmode (){
if(!moderadio.checked){
    localStorage.setItem("mode","lightmode")
}else{
    localStorage.setItem("mode","darkmode")
}

var mode = localStorage.getItem("mode")
if(mode ==="darkmode"){
    mainbodydiv.className="darkmodebody"
    mainbodydiv.style.color='white'
}else{
    mainbodydiv.className="lightmodebody"
    mainbodydiv.style.color='black'
}
} 




 





function signupAccount(){
    email=signupEmail.value
    password=signupPassword.value
    name=signupusername.value
    userinfo={
        Name:name,
        Email:email,
        Password:password,
    }
    userinfo=JSON.stringify(userinfo)

    localStorage.setItem("information",userinfo)

    if(nameregex.test(name)){
    if(emailregex.test(signupEmail.value)){
        if(password!==""){
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
            text: "Enter a valid Email"
          });
}
}else{
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Enter a valid name"
          });
    }
   
} 



function logintowindow(){
    information=localStorage.getItem("information")
    information=JSON.parse(information)
    pagedirectiontomain= localStorage.setItem("location","anypage")

    useremail=loginEmail.value
    userpassword=loginPassword.value

    

    if(useremail.trim()!==""){
        if(userpassword.trim()!==""){
            if(information.Email===useremail){
                if(information.Password===userpassword){
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



window.onload= function () {
    var mode = localStorage.getItem("mode")
    if(mode ==="darkmode"){
        moderadio.checked=true
        mainbodydiv.className="darkmodebody"
        mainbodydiv.style.color='white'
    }else{
        mainbodydiv.className="lightmodebody"
        mainbodydiv.style.color='black'
}
}


function stayonhomepage(){ 
    var getpagelocation=localStorage.getItem("location")
    if(getpagelocation==="anypage"){
    window.location.href="homepage.html"}
  }

  stayonhomepage()