var resultdiv=document.getElementById('main2')
var getresultinfo=localStorage.getItem("resultinformation")
    getresultinfo=JSON.parse(getresultinfo)
    console.log(getresultinfo)
document.getElementById('heading').classList.add("w-100","text-center","me-2")
    document.getElementById('heading').innerHTML= '<h1>HTML & CSS <br> Quiz Result</h1>'
    resultdiv.innerHTML= `
  <div class="results-container d-flex flex-column align-items-center">
    <span class="none" id="remarks"></span>
    <p>Total Questions: <span class="result-stat" id="total-questions">${getresultinfo.Total}</span></p>
    <p>Correct Answers: <span class="result-stat" id="correct-answers">${getresultinfo.Usermarks}</span></p>
    <p class="mt-5 w-100 h-100">Percentage</p> 
    <div class="result-stat text-center d-flex flex-column align-items-center justify-content-center mt-2" id="percentage">${getresultinfo.userpercentage}%</div>
    <button onclick=" wrongQuestionswindow()" class="mt-3 btn" style="background-color:#043369; color:white">REVIEW YOUR WRONG ANSWER</button>
    <button onclick=" gobackHome()" class="mt-3 btn" style="background-color:#043369; color:white">Back to main</button>

  </div>`
var remarkelement=document.getElementById("remarks")
if(getresultinfo.userpercentage<70){
    remarkelement.innerHTML="FAILED! BETTER LUCK NEXT TIME";
    remarkelement.className="failed"
    document.getElementById('percentage').classList.add("failed")

}
    else{
    remarkelement.innerHTML='PASSED! CONGRATULATIONS';
    remarkelement.className="passed"
     document.getElementById('percentage').classList.add("passed")


    }

    
function wrongQuestionswindow(){
 document.getElementById("resultbutton").classList.remove("d-none")
  var wrongquestions=localStorage.getItem("wrongquestionlist")
  var wrongquestionarray=JSON.parse(wrongquestions)

  if(wrongquestionarray.length!==0){
  resultdiv.classList.add("d-none")
  document.getElementById('heading').innerHTML= '<h1>HTML & CSS <br> Wrong Answers Review</h1>'
  for(i=0;i<wrongquestionarray.length;i++){
   document.getElementById("list-ol").innerHTML+=`<li class="mt-3">
   <span class="question"> ${wrongquestionarray[i].wrongquestion} </span><br> <span class="wrong">
  ${wrongquestionarray[i].wronganswer} </span> <br> <span class="right">${wrongquestionarray[i].rightanswer}</span>
   </li>`
    
  }
}else{
  Swal.fire({
    title: "You have got 100%",
    text: "YOU HAVE'NT DONE ANY QUESTION WRONG",
    icon: "success",
  });
}

  }

  history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1)}

function gobackHome(){
  window.location.href="homepage.html"
}

function gobackresult(){
  window.location.href="result.html"
}