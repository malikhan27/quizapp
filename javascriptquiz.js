
var jsQuiz = [
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        option1: "//",
        option2: "/*",
        option3: "#",
        option4: "--",
        answer: "//",
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        option1: "let",
        option2: "var",
        option3: "const",
        option4: "declare",
        answer: "let",
    },
    {
        question: "Which operator is used to compare values and types in JavaScript?",
        option1: "==",
        option2: "===",
        option3: "!=",
        option4: ":'",
        answer: "===",
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        option1: "push",
        option2: "pop",
        option3: "shift",
        option4: "unshift",
        answer: "push",
    },
    {
        question: "What is the correct way to create a function in JavaScript?",
        option1: "function() {}",
        option2: "def() {}",
        option3: "func() {}",
        option4: "create() {}",
        answer: "function() {}",
    },
    {
        question: "Which function is used to parse a string into an integer in JavaScript?",
        option1: "parseInt",
        option2: "toInt",
        option3: "convert",
        option4: "parseString",
        answer: "parseInt",
    },
    {
        question: "Which method is used to remove the last element of an array in JavaScript?",
        option1: "pop",
        option2: "shift",
        option3: "unshift",
        option4: "slice",
        answer: "pop",
    },
    {
        question: "Which data type is used to store multiple values in JavaScript?",
        option1: "array",
        option2: "object",
        option3: "string",
        option4: "boolean",
        answer: "array",
    },
    {
        question: "Which method is used to convert a value to a string in JavaScript?",
        option1: "toString",
        option2: "convert",
        option3: "stringify",
        option4: "str",
        answer: "toString",
    },
    {
        question: "What is the correct syntax to output 'Hello World' in JavaScript?",
        option1: "console.output('Hello World');",
        option2: "console.log('Hello World');",
        option3: "print('Hello World');",
        option4: "echo('Hello World');",
        answer: "console.log('Hello World');",
    },
    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        option1: "==",
        option2: "=",
        option3: "===",
        option4: "=>",
        answer: "=",
    },
    {
        question: "Which method is used to find the length of a string in JavaScript?",
        option1: "size",
        option2: "length",
        option3: "count",
        option4: "len",
        answer: "length",
    },
    {
        question: "Which keyword is used to define a constant in JavaScript?",
        option1: "const",
        option2: "let",
        option3: "var",
        option4: "define",
        answer: "const",
    },
    {
        question: "Which method is used to test if a string contains a specified substring in JavaScript?",
        option1: "includes",
        option2: "contains",
        option3: "find",
        option4: "indexOf",
        answer: "includes",
    },
    {
        question: "Which method is used to combine two or more arrays in JavaScript?",
        option1: "concat",
        option2: "merge",
        option3: "combine",
        option4: "join",
        answer: "concat",
    }
];

  var questionNo=1
  var questionCount = 0;
  var score = 0;
  var quizDiv=document.getElementById('main')
  var quizOptions=document.getElementsByName('option')
  var wrongquestions=new Array;
  var quizname
  var resultinfo;
  var information;
  var moderadio=document.getElementById("mode")
var mainbodydiv=document.getElementById("mainbody")
var attemptquiz;
  function renderQuestion(){
    quizDiv.innerHTML=`<div class="quiz-container">
        <h4>QUSETION NO . ${questionNo}</h4>
        <p class="question">${jsQuiz[questionCount].question}</p>
        
        <div class="option">
            <input type="radio" id="option1" name="option" value=${jsQuiz[questionCount].option1}>
            <label class="w-100 h-100" for="option1">${jsQuiz[questionCount].option1}</label>
        </div>

        <div class="option">
            <input type="radio" id="option2" name="option" value=${jsQuiz[questionCount].option2}>
            <label class="w-100 h-100" for="option2">${jsQuiz[questionCount].option2}</label>
        </div>

        <div class="option">
            <input type="radio" id="option3" name="option" value=${jsQuiz[questionCount].option3}>
            <label class="w-100 h-100" for="option3">${jsQuiz[questionCount].option3}</label>
        </div>

        <div class="option">
            <input type="radio" id="option4" name="option" value=${jsQuiz[questionCount].option4}>
            <label class="w-100 h-100" for="option4">${jsQuiz[questionCount].option4}</label>
        </div>

        <button onclick="nextQuestion()" class="submit-btn mt-2">Next</button>
    </div>`
  }

  

  quizname=localStorage.getItem("requestquiz")
  attemptquiz=localStorage.getItem("javaresultinformation")
  attemptquiz= JSON.parse(attemptquiz)
  

  function checkattempt(){
    if(attemptquiz){
      if(attemptquiz.quizname===quizname){
        window.location.href="result.html"
  
      }
    }
  
  
  }
  
  checkattempt()

  function deSelect() {
    for (var i = 0; i < quizOptions.length; i++) {
      quizOptions[i].checked = false;
    }
  }

  function nextQuestion() {
    var optionChecked = false;
    for (var i = 0; i < quizOptions.length; i++) {
      if (quizOptions[i].checked) {
        optionChecked = true;
  
        // so check that selected option is equal to answer so increment the score
        if (quizOptions[i].value === jsQuiz[questionCount].answer) {
          score++;
          console.log(score)
        } 
        else{
          wrongquestions.push({wrongquestion:jsQuiz[questionCount].question,
            wronganswer: quizOptions[i].value,
            rightanswer:jsQuiz[questionCount].answer})
            console.log(wrongquestions)
          }

        }
      }
    
  
    // if no option selected ( if block )
    if (!optionChecked) {
      Swal.fire({
        title: "No Option Selected",
        text: "Please Select Any Option",
        icon: "error",
      });
    } else {
      // radio checked = true
  
      if (questionCount < jsQuiz.length - 1) {
        questionNo++
        questionCount++;
        deSelect();
        renderQuestion();
      }else{
        resultWindow()
        pagetoresult()
      }
    }
  }




function resultWindow(){
  localStorage.setItem("wrongquestionlistjava",JSON.stringify(wrongquestions))
  var percentage = Math.round(score/jsQuiz.length*100)
  resultinfo={
    quizname:"Javascript",
    Total:jsQuiz.length,
    Usermarks:score,
    userpercentage:percentage,}
  
    localStorage.setItem("javaresultinformation",JSON.stringify(resultinfo))
  }


information=localStorage.getItem("information")
    information=JSON.parse(information)

function pagetoresult(){
  quizDiv.innerHTML=`<div class="quiz-container">
  <p class="question">CONGRATULATIONS ${information.Name} </p>
  <p class="question">YOU HAVE COMPLETED YOUR QUIZ</p>
  <p><b>CHECK YOUR RESULT HERE</b></p>
  <a href="result.html"><button class="submit-btn mt-2">CHECK YOUR RESULT</button></a>
</div>`
   


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

  function unablebackfrommainpage(){ 
    var getpagelocation=localStorage.getItem("location")
    if(getpagelocation==="mainpage"){
    window.location.href="index.html"}
  }
  unablebackfrommainpage()

window.onload= modecheck()





renderQuestion()