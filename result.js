var resultdiv = document.getElementById ('main2');
var getresultinfopython = localStorage.getItem ('pythonresultinformation');
var getresultinfojava = localStorage.getItem ('javaresultinformation');
var getresultinfohtml = localStorage.getItem ('htmlresultinformation');
var quizname = localStorage.getItem ('requestquiz');
var moderadio=document.getElementById("mode")
var mainbodydiv=document.getElementById("mainbody")

function resultgenerate () {
  getresultinfopython = JSON.parse (getresultinfopython);
  getresultinfojava = JSON.parse (getresultinfojava);
  getresultinfohtml = JSON.parse (getresultinfohtml);

  if(getresultinfohtml){
  if (getresultinfohtml.quizname === quizname) {
    document
      .getElementById ('heading')
      .classList.add ('w-100', 'text-center', 'me-2');
    document.getElementById (
      'heading'
    ).innerHTML = `<h1>${quizname} Quiz Result</h1>`;
    resultdiv.innerHTML = `
  <div class="results-container d-flex flex-column align-items-center">
    <span class="none" id="remarks"></span>
    <p>Total Questions: <span class="result-stat" id="total-questions">${getresultinfohtml.Total}</span></p>
    <p>Correct Answers: <span class="result-stat" id="correct-answers">${getresultinfohtml.Usermarks}</span></p>
    <p class="mt-5 w-100 h-100">Percentage</p> 
    <div class="result-stat text-center d-flex flex-column align-items-center justify-content-center mt-2" id="percentage">${getresultinfohtml.userpercentage}%</div>
    <button onclick=" wrongQuestionswindow()" class="mt-3 btn" style="background-color:#043369; color:white">REVIEW YOUR WRONG ANSWER</button>
    <button onclick=" gobackHome()" class="mt-3 btn" style="background-color:#043369; color:white">Back to main</button>

  </div>`;
    var remarkelement = document.getElementById ('remarks');
    if (getresultinfohtml.userpercentage < 70) {
      remarkelement.innerHTML = 'FAILED! BETTER LUCK NEXT TIME';
      remarkelement.className = 'failed';
      document.getElementById ('percentage').classList.add ('failed');
    } else {
      remarkelement.innerHTML = 'PASSED! CONGRATULATIONS';
      remarkelement.className = 'passed';
      document.getElementById ('percentage').classList.add ('passed');
    }
  }}

  if(getresultinfojava){
  if (getresultinfojava.quizname === quizname) {
    document
      .getElementById ('heading')
      .classList.add ('w-100', 'text-center', 'me-2');
    document.getElementById (
      'heading'
    ).innerHTML = `<h1>${quizname} Quiz Result</h1>`;
    resultdiv.innerHTML = `
    <div class="results-container d-flex flex-column align-items-center">
      <span class="none" id="remarks"></span>
      <p>Total Questions: <span class="result-stat" id="total-questions">${getresultinfojava.Total}</span></p>
      <p>Correct Answers: <span class="result-stat" id="correct-answers">${getresultinfojava.Usermarks}</span></p>
      <p class="mt-5 w-100 h-100">Percentage</p> 
      <div class="result-stat text-center d-flex flex-column align-items-center justify-content-center mt-2" id="percentage">${getresultinfojava.userpercentage}%</div>
      <button onclick=" wrongQuestionswindow()" class="mt-3 btn" style="background-color:#043369; color:white">REVIEW YOUR WRONG ANSWER</button>
      <button onclick=" gobackHome()" class="mt-3 btn" style="background-color:#043369; color:white">Back to main</button>
  
    </div>`;
    var remarkelement = document.getElementById ('remarks');
    if (getresultinfojava.userpercentage < 70) {
      remarkelement.innerHTML = 'FAILED! BETTER LUCK NEXT TIME';
      remarkelement.className = 'failed';
      document.getElementById ('percentage').classList.add ('failed');
    } else {
      remarkelement.innerHTML = 'PASSED! CONGRATULATIONS';
      remarkelement.className = 'passed';
      document.getElementById ('percentage').classList.add ('passed');
    }
  }}

  if(getresultinfopython){
  if (getresultinfopython.quizname === quizname) {
    document
      .getElementById ('heading')
      .classList.add ('w-100', 'text-center', 'me-2');
    document.getElementById (
      'heading'
    ).innerHTML = `<h1>${quizname} Quiz Result</h1>`;
    resultdiv.innerHTML = `
      <div class="results-container d-flex flex-column align-items-center">
        <span class="none" id="remarks"></span>
        <p>Total Questions: <span class="result-stat" id="total-questions">${getresultinfopython.Total}</span></p>
        <p>Correct Answers: <span class="result-stat" id="correct-answers">${getresultinfopython.Usermarks}</span></p>
        <p class="mt-5 w-100 h-100">Percentage</p> 
        <div class="result-stat text-center d-flex flex-column align-items-center justify-content-center mt-2" id="percentage">${getresultinfopython.userpercentage}%</div>
        <button onclick=" wrongQuestionswindow()" class="mt-3 btn" style="background-color:#043369; color:white">REVIEW YOUR WRONG ANSWER</button>
        <button onclick=" gobackHome()" class="mt-3 btn" style="background-color:#043369; color:white">Back to main</button>
    
      </div>`;
    var remarkelement = document.getElementById ('remarks');
    if (getresultinfopython.userpercentage < 70) {
      remarkelement.innerHTML = 'FAILED! BETTER LUCK NEXT TIME';
      remarkelement.className = 'failed';
      document.getElementById ('percentage').classList.add ('failed');
    } else {
      remarkelement.innerHTML = 'PASSED! CONGRATULATIONS';
      remarkelement.className = 'passed';
      document.getElementById ('percentage').classList.add ('passed');
    }
  }
}
}



function wrongQuestionswindow () {
  if(getresultinfohtml){
  if (getresultinfohtml.quizname === quizname) {
    document.getElementById ('resultbutton').classList.remove ('d-none');
    var wrongquestionshtml = localStorage.getItem ('wrongquestionlisthtml');
    var wrongquestionsjava = localStorage.getItem ('wrongquestionlistjava');
    var wrongquestionspython = localStorage.getItem ('wrongquestionlistpyhton');

    var wrongquestionarrayhtml = JSON.parse (wrongquestionshtml);
    var wrongquestionarrayjava = JSON.parse (wrongquestionsjava);
    var wrongquestionarraypython = JSON.parse (wrongquestionspython);

    if (wrongquestionarrayhtml.length !== 0) {
      resultdiv.classList.add ('d-none');
      document.getElementById (
        'heading'
      ).innerHTML = ` <h1>${quizname}<br>Wrong Answers Review</h1>`;
      for (i = 0; i < wrongquestionarrayhtml.length; i++) {
        document.getElementById ('list-ol').innerHTML += `<li class="mt-3">
   <span class="question"> ${wrongquestionarrayhtml[i].wrongquestion} </span><br> <span class="wrong">
  ${wrongquestionarrayhtml[i].wronganswer} </span> <br> <span class="right">${wrongquestionarrayhtml[i].rightanswer}</span>
   </li>`;
      }
    } else {
      Swal.fire ({
        title: 'You have got 100%',
        text: "YOU HAVE'NT DONE ANY QUESTION WRONG",
        icon: 'success',
      });
    }
  } }
  
  if(getresultinfojava) {
    if(getresultinfojava.quizname === quizname) {
    document.getElementById ('resultbutton').classList.remove ('d-none');
    var wrongquestionshtml = localStorage.getItem ('wrongquestionlisthtml');
    var wrongquestionsjava = localStorage.getItem ('wrongquestionlistjava');
    var wrongquestionspython = localStorage.getItem ('wrongquestionlistpyhton');

    var wrongquestionarrayhtml = JSON.parse (wrongquestionshtml);
    var wrongquestionarrayjava = JSON.parse (wrongquestionsjava);
    var wrongquestionarraypython = JSON.parse (wrongquestionspython);

    if (wrongquestionarrayjava.length !== 0) {
      resultdiv.classList.add ('d-none');
      document.getElementById (
        'heading'
      ).innerHTML = ` <h1>${quizname}<br>Wrong Answers Review</h1>`;
      for (i = 0; i < wrongquestionarrayjava.length; i++) {
        document.getElementById ('list-ol').innerHTML += `<li class="mt-3">
   <span class="question"> ${wrongquestionarrayjava[i].wrongquestion} </span><br> <span class="wrong">
  ${wrongquestionarrayjava[i].wronganswer} </span> <br> <span class="right">${wrongquestionarrayjava[i].rightanswer}</span>
   </li>`;
      }
    } else {
      Swal.fire ({
        title: 'You have got 100%',
        text: "YOU HAVE'NT DONE ANY QUESTION WRONG",
        icon: 'success',
      });
    }
  } }
  
 if(getresultinfopython){ {if (getresultinfopython.quizname === quizname) {
    document.getElementById ('resultbutton').classList.remove ('d-none');
    var wrongquestionshtml = localStorage.getItem ('wrongquestionlisthtml');
    var wrongquestionsjava = localStorage.getItem ('wrongquestionlistjava');
    var wrongquestionspython= localStorage.getItem('wrongquestionlistpython')

    var wrongquestionarrayhtml = JSON.parse (wrongquestionshtml);
    var wrongquestionarrayjava = JSON.parse (wrongquestionsjava);
    var wrongquestionarraypython = JSON.parse (wrongquestionspython);
    console.log(wrongquestionarraypython)

    if (wrongquestionarraypython.length !== 0) {
      resultdiv.classList.add ('d-none');
      document.getElementById (
        'heading'
      ).innerHTML = ` <h1>${quizname}<br>Wrong Answers Review</h1>`;
      for (i = 0; i < wrongquestionarraypython.length; i++) {
        document.getElementById ('list-ol').innerHTML += `<li class="mt-3">
   <span class="question"> ${wrongquestionarraypython[i].wrongquestion} </span><br> <span class="wrong">
  ${wrongquestionarraypython[i].wronganswer} </span> <br> <span class="right">${wrongquestionarraypython[i].rightanswer}</span>
   </li>`;
      }
    } else {
      Swal.fire ({
        title: 'You have got 100%',
        text: "YOU HAVE'NT DONE ANY QUESTION WRONG",
        icon: 'success',
      });
    }
  }
}}
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


 function mainpage(){
    pagedirectiontomain= localStorage.setItem("location","mainpage")
    getpagelocation=localStorage.getItem("location")
  
  }

function gobackHome () {
  window.location.href = 'homepage.html';
}

function gobackresult () {
  window.location.href = 'result.html';
}

function unablebackfrommainpage(){ 
  var getpagelocation=localStorage.getItem("location")
  if(getpagelocation==="mainpage"){
  window.location.href="index.html"}
}
unablebackfrommainpage()
modecheck()
resultgenerate ();