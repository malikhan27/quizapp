
var pythonQuiz = [
    {
        question: "What does Python stand for?",
        option1: "Program",
        option2: "Pythonic",
        option3: "Pyridon",
        option4: "None",
        answer: "None",
    },
    {
        question: "Which keyword is used to define a function in Python?",
        option1: "function",
        option2: "def",
        option3: "func",
        option4: "define",
        answer: "def",
    },
    {
        question: "Which operator is used for exponentiation in Python?",
        option1: "*",
        option2: "/",
        option3: "^",
        option4: "**",
        answer: "**",
    },
    {
        question: "Which data type is used to store decimal values in Python?",
        option1: "int",
        option2: "float",
        option3: "double",
        option4: "decimal",
        answer: "float",
    },
    {
        question: "Which method is used to find the length of a string in Python?",
        option1: "size",
        option2: "length",
        option3: "count",
        option4: "len",
        answer: "len",
    },
    {
        question: "Which keyword is used to handle exceptions in Python?",
        option1: "catch",
        option2: "error",
        option3: "except",
        option4: "handle",
        answer: "except",
    },
    {
        question: "Which function is used to convert a string to an integer in Python?",
        option1: "int()",
        option2: "str()",
        option3: "float()",
        option4: "convert()",
        answer: "int()",
    },
    {
        question: "What type of loop is used when the number of iterations is known in advance?",
        option1: "while",
        option2: "for",
        option3: "do-while",
        option4: "repeat",
        answer: "for",
    },
    {
        question: "Which Python module is used to work with dates and times?",
        option1: "datetime",
        option2: "time",
        option3: "date",
        option4: "calendar",
        answer: "datetime",
    },
    {
        question: "Which Python function is used to print output to the console?",
        option1: "echo",
        option2: "out()",
        option3: "print()",
        option4: "display()",
        answer: "print()",
    },
    {
        question: "Which operator is used to compare values in Python?",
        option1: "=",
        option2: "==",
        option3: "===",
        option4: "!=",
        answer: "==",
    },
    {
        question: "Which function is used to get the input from the user in Python?",
        option1: "input()",
        option2: "get()",
        option3: "read()",
        option4: "ask()",
        answer: "input()",
    },
    {
        question: "What is the file extension for Python files?",
        option1: ".py",
        option2: ".txt",
        option3: ".python",
        option4: ".pyr",
        answer: ".py",
    },
    {
        question: "Which data type is used to store multiple items in Python?",
        option1: "tuple",
        option2: "list",
        option3: "dictionary",
        option4: "set",
        answer: "list",
    },
    {
        question: "Which Python statement is used to exit a loop?",
        option1: "stop",
        option2: "exit",
        option3: "break",
        option4: "end",
        answer: "break",
    }
];

  var questionNo=1
  var questionCount = 0;
  var score = 0;
  var quizDiv=document.getElementById('main')
  var quizOptions=document.getElementsByName('option')
  var wrongquestions=new Array
  var resultinfo={quizName:""}

  function renderQuestion(){
    quizDiv.innerHTML=`<div class="quiz-container">
        <h4>QUSETION NO . ${questionNo}</h4>
        <p class="question">${pythonQuiz[questionCount].question}</p>
        
        <div class="option">
            <input type="radio" id="option1" name="option" value=${pythonQuiz[questionCount].option1}>
            <label class="w-100 h-100" for="option1">${pythonQuiz[questionCount].option1}</label>
        </div>

        <div class="option">
            <input type="radio" id="option2" name="option" value=${pythonQuiz[questionCount].option2}>
            <label class="w-100 h-100" for="option2">${pythonQuiz[questionCount].option2}</label>
        </div>

        <div class="option">
            <input type="radio" id="option3" name="option" value=${pythonQuiz[questionCount].option3}>
            <label class="w-100 h-100" for="option3">${pythonQuiz[questionCount].option3}</label>
        </div>

        <div class="option">
            <input type="radio" id="option4" name="option" value=${pythonQuiz[questionCount].option4}>
            <label class="w-100 h-100" for="option4">${pythonQuiz[questionCount].option4}</label>
        </div>

        <button onclick="nextQuestion()" class="submit-btn mt-2">Next</button>
    </div>`
  }

  var getresultinfo=localStorage.getItem("resultinformation")
    getresultinfo=JSON.parse(getresultinfo);


function quizattendancecheck(){
    if(getresultinfo.quizName==="PYTHON"){
      window.location.href="result.html"
    }
  }

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
        if (quizOptions[i].value === pythonQuiz[questionCount].answer) {
          score++;
          console.log(score)
        } 
        else{
          wrongquestions.push({wrongquestion:pythonQuiz[questionCount].question,
            wronganswer: quizOptions[i].value,
            rightanswer:pythonQuiz[questionCount].answer})
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
  
      if (questionCount < pythonQuiz.length - 1) {
        questionNo++
        questionCount++;
        deSelect();
        renderQuestion();
      }else{
        resultWindow()
      }
    }
  }




function resultWindow(){
  localStorage.setItem("wrongquestionlist",JSON.stringify(wrongquestions))
  var percentage = Math.round(score/pythonQuiz.length*100)
  resultinfo={
    Total:pythonQuiz.length,
    Usermarks:score,
    userpercentage:percentage,
    quizName:"PYTHON"
    }
    localStorage.setItem("resultinformation",JSON.stringify(resultinfo))

  
  window.location.href="result.html"
}

renderQuestion()
window.onload= quizattendancecheck()