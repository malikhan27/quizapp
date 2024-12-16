var divelement = document.getElementById("main-div");
console.log(divelement);
var moderadio=document.getElementById("mode")
var mainbodydiv=document.getElementById("mainbody")

function windowchange() {

  divelement.innerHTML = `

<div class="mt-2 p-3" style="border-bottom: 1px solid rgba(116, 109, 109, 0.37);">
  <h1 style="display:Inline;" class="ms-md-5">WEB AND APP DEVELOPMENT </h1> <span> (2 Subjects) </span>
</div>

<div class="accordion w-75 accordion-flush mt-4" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        HTML & CSS
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <table class="table">
   <tbody class="fw-bold";>
     <tr>
       <td>QUIZ NAME</td>
       <td colspan="3">HTLM & CSS</td>
     </tr>
     <tr>
       <td>TOTAL QUESTIONS</td>
       <td colspan="3">15</td>
     </tr>
     <tr>
       <td>TIME</td>
       <td colspan="3">20 MINUTES</td>
     </tr>
     <tr>
       <td>PASSING MARKS</td>
       <td colspan="3">70%</td>
     </tr>
    </tbody>
   </table>
   <a class="btn" style="background-color: #043369 !important; color:white !important" href="quiz.html">Join Now</a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Javascript
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <table class="table" style="color:"#350661";">
   <tbody class="fw-bold" >
     <tr>
       <td>QUIZ NAME</td>
       <td colspan="3">JAVASCRIPT</td>
     </tr>
     <tr>
       <td>TOTAL QUESTIONS</td>
       <td colspan="3">15</td>
     </tr>
     <tr>
       <td>TIME</td>
       <td colspan="3">20 MINUTES</td>
     </tr>
     <tr>
       <td>PASSING MARKS</td>
       <td colspan="3">70%</td>
     </tr>
    </tbody>
   </table>
   <a class="btn" style="background-color: #043369 !important; color:white !important" href="javascriptquiz.html">Join Now</a>
      </div>
    </div>
  </div>

  <div class="w-100 d-flex justify-content-start">
         <a href= "homepage.html ">
         <button  class="my-4 btn" style="background-color:#043369; color:white">Back to Main</button>
        </a>
   </div>
 
`;
}

function windowchangepython() {
 
  divelement.innerHTML = `

<div class="mt-2 p-3" style="border-bottom: 1px solid rgba(116, 109, 109, 0.37);">
  <h1 style="display:Inline;" class="ms-md-5">PYTHON</h1> <span> (1 Subjects) </span>
</div>

<div class="accordion w-75 accordion-flush mt-4" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Python
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <table class="table">
   <tbody class="fw-bold";>
     <tr>
       <td>QUIZ NAME</td>
       <td colspan="3">PYTHON</td>
     </tr>
     <tr>
       <td>TOTAL QUESTIONS</td>
       <td colspan="3">15</td>
     </tr>
     <tr>
       <td>TIME</td>
       <td colspan="3">20 MINUTES</td>
     </tr>
     <tr>
       <td>PASSING MARKS</td>
       <td colspan="3">70%</td>
     </tr>
    </tbody>
   </table>
   <a class="btn" style="background-color: #043369 !important; color:white !important" href="python.html">Join Now</a>
      </div>
    </div>
  </div>
 <div class="w-100 d-flex justify-content-start">
         <a href= "homepage.html ">
         <button  class="my-4 btn" style="background-color:#043369; color:white">Back to Main</button>
        </a>
   </div>
`;
}

function windowchangemodule() {
  divelement.innerHTML = `

<div class="mt-2 p-3" style="border-bottom: 1px solid rgba(116, 109, 109, 0.37);">
  <h1 style="display:Inline;" class="ms-md-5">MODULE-1</h1> <span> (3 Subjects) </span>
</div>

<div class="accordion w-75 accordion-flush mt-4" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        HTML & CSS
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <table class="table">
   <tbody class="fw-bold";>
     <tr>
       <td>QUIZ NAME</td>
       <td colspan="3">HTLM & CSS</td>
     </tr>
     <tr>
       <td>TOTAL QUESTIONS</td>
       <td colspan="3">15</td>
     </tr>
     <tr>
       <td>TIME</td>
       <td colspan="3">20 MINUTES</td>
     </tr>
     <tr>
       <td>PASSING MARKS</td>
       <td colspan="3">70%</td>
     </tr>
    </tbody>
   </table>
   <a class="btn" style="background-color: #043369 !important; color:white !important" href="quiz.html">Join Now</a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Javascript
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <table class="table" style="color:"#350661";">
   <tbody class="fw-bold" >
     <tr>
       <td>QUIZ NAME</td>
       <td colspan="3">JAVASCRIPT</td>
     </tr>
     <tr>
       <td>TOTAL QUESTIONS</td>
       <td colspan="3">15s</td>
     </tr>
     <tr>
       <td>TIME</td>
       <td colspan="3">20 MINUTES</td>
     </tr>
     <tr>
       <td>PASSING MARKS</td>
       <td colspan="3">70%</td>
     </tr>
    </tbody>
   </table>
   <a class="btn" style="background-color: #043369 !important; color:white !important" href="javascriptquiz.html">Join Now</a>
      </div>
    </div>
  </div>
   <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseOne">
        PYTHON
      </button>
    </h2>
    <div id="flush-collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <table class="table">
   <tbody class="fw-bold";>
     <tr>
       <td>QUIZ NAME</td>
       <td colspan="3">PYTHON</td>
     </tr>
     <tr>
       <td>TOTAL QUESTIONS</td>
       <td colspan="3">15</td>
     </tr>
     <tr>
       <td>TIME</td>
       <td colspan="3">20 MINUTES</td>
     </tr>
     <tr>
       <td>PASSING MARKS</td>
       <td colspan="3">70%</td>
     </tr>
    </tbody>
   </table>
   <a class="btn" style="background-color: #043369 !important; color:white !important" href="python.html">Join Now</a>
      </div>
    </div>
  </div>
  <div class="w-100 d-flex justify-content-start">
         <a href= "homepage.html ">
         <button  class="my-4 btn" style="background-color:#043369; color:white">Back to Main</button>
        </a>
   </div>
   
 
`;
}

var name=localStorage.getItem("information")
var information=JSON.parse(name)
console.log(information) 


document.getElementById("username").innerHTML=
`
${information.Name}
`
function unablebackfrommainpage(){ 
  var getpagelocation=localStorage.getItem("location")
  if(getpagelocation==="mainpage"){
  window.location.href="index.html"}
}

function mainpage(){
  pagedirectiontomain= localStorage.setItem("location","mainpage")
  getpagelocation=localStorage.getItem("location")

}


function modecheck(){
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

function darkmode (){
  if(!moderadio.checked){
      localStorage.setItem("mode","lightmode")
  }else{
      localStorage.setItem("mode","darkmode")
  }
  modecheck()
 
  } 


  window.onload= modecheck()




window.onload= unablebackfrommainpage()


// function noBack() {
//     window.history.forward();}
// noBack()
// history.pushState(null, null, location.href);
// window.onpopstate = function () {
//     history.go(1)}