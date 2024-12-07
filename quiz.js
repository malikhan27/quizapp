var htmlQuiz = [
    {
      question: "HTML Stands for ?",
      option1: "Hypertext",
      option2: "Markup",
      option3: "HyperSuperText",
      option4: "HyperText-Markup-Language",
      answer: "HyperText-Markup-Language",
    },
    {
      question: "Which Element used to bold text in HTML?",
      option1: "img",
      option2: "h1",
      option3: "strong",
      option4: "p",
      answer: "strong",
    },
    {
      question: "Which Element used for Image in HTML?",
      option1: "span",
      option2: "div",
      option3: "image",
      option4: "img",
      answer: "img",
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      option1: "link",
      option2: "a",
      option3: "hyperlink",
      option4: "url",
      answer: "a",
    },
    {
      question:
        "Which attribute is used to define the background color of a webpage in HTML?",
      option1: "bgcolor",
      option2: "color",
      option3: "background",
      option4: "style",
      answer: "bgcolor",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      option1: "break",
      option2: "br",
      option3: "hr",
      option4: "line",
      answer: "br",
    },
    {
      question: "Which tag is used for creating an ordered list in HTML?",
      option1: "ul",
      option2: "li",
      option3: "ol",
      option4: "dl",
      answer: "ol",
    },
    {
      question: "Which tag is used to define a table in HTML?",
      option1: "table",
      option2: "tr",
      option3: "td",
      option4: "thead",
      answer: "table",
    },
    {
      question: "Which HTML tag is used to display a form in a webpage?",
      option1: "input",
      option2: "form",
      option3: "button",
      option4: "textarea",
      answer: "form",
    },
    {
      question:
        "What is the default value of the type attribute for an <input> tag in HTML?",
      option1: "text",
      option2: "password",
      option3: "checkbox",
      option4: "radio",
      answer: "text",
    },
    {
      question: "What does CSS stand for?",
      option1: "Computer",
      option2: "Cascading",
      option3: "Creative",
      option4: "Colorful",
      answer: "Cascading",
  },
  {
      question: "Which property is used to change the background color in CSS?",
      option1: "bgcolor",
      option2: "background-color",
      option3: "color",
      option4: "bg-color",
      answer: "background-color",
  },
  {
      question: "Which property is used to change the font of an element?",
      option1: "font-style",
      option2: "font-family",
      option3: "font-size",
      option4: "text-font",
      answer: "font-family",
  },
  {
      question: "Which property is used to set the space between the text and the border of a box?",
      option1: "padding",
      option2: "margin",
      option3: "border-spacing",
      option4: "text-space",
      answer: "padding",
  },
  {
      question: "What is the correct syntax for referring to an external style sheet in HTML?",
      option1: "link",
      option2: "stylesheet",
      option3: "style",
      option4: "css",
      answer: "link",
  },
  ];
  
  var questionNo=1
  var questionCount = 0;
  var score = 0;
  var quizDiv=document.getElementById('main')
  var quizOptions=document.getElementsByName('option')
  var wrongquestions=new Array

  function renderQuestion(){
    quizDiv.innerHTML=`<div class="quiz-container">
        <h4>QUSETION NO . ${questionNo}</h4>
        <p class="question">${htmlQuiz[questionCount].question}</p>
        
        <div class="option">
            <input type="radio" id="option1" name="option" value=${htmlQuiz[questionCount].option1}>
            <label class="w-100 h-100" for="option1">${htmlQuiz[questionCount].option1}</label>
        </div>

        <div class="option">
            <input type="radio" id="option2" name="option" value=${htmlQuiz[questionCount].option2}>
            <label class="w-100 h-100" for="option2">${htmlQuiz[questionCount].option2}</label>
        </div>

        <div class="option">
            <input type="radio" id="option3" name="option" value=${htmlQuiz[questionCount].option3}>
            <label class="w-100 h-100" for="option3">${htmlQuiz[questionCount].option3}</label>
        </div>

        <div class="option">
            <input type="radio" id="option4" name="option" value=${htmlQuiz[questionCount].option4}>
            <label class="w-100 h-100" for="option4">${htmlQuiz[questionCount].option4}</label>
        </div>

        <button onclick="nextQuestion()" class="submit-btn mt-2 me-1">Next</button>
    </div>`
  }

  window.onload= renderQuestion()

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
        if (quizOptions[i].value === htmlQuiz[questionCount].answer) {
          score++;
          console.log(score)
        } 
        else{
          wrongquestions.push({wrongquestion:htmlQuiz[questionCount].question,
            wronganswer: quizOptions[i].value,
            rightanswer:htmlQuiz[questionCount].answer})
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
  
      if (questionCount < htmlQuiz.length - 1) {
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
    var percentage = Math.round(score/htmlQuiz.length*100)
    document.getElementById('heading').classList.add("w-100","text-center","me-2")
    document.getElementById('heading').innerHTML= '<h1>HTML & CSS <br> Quiz Result</h1>'
    quizDiv.innerHTML= `
  <div class="results-container d-flex flex-column align-items-center">
    <span class="none" id="remarks"></span>
    <p>Total Questions: <span class="result-stat" id="total-questions">${htmlQuiz.length}</span></p>
    <p>Correct Answers: <span class="result-stat" id="correct-answers">${score}</span></p>
    <p class="mt-5 w-100 h-100">Percentage</p> 
    <div class="result-stat text-center d-flex flex-column align-items-center justify-content-center mt-2" id="percentage">${percentage}%</div>
    <button onclick=" wrongQuestionswindow()" class="mt-3 btn" style="background-color:#043369; color:white">REVIEW YOUR WRONG ANSWER</button>
  </div>`
var remarkelement=document.getElementById("remarks")
if(percentage<70){
    remarkelement.innerHTML="FAILED! BETTER LUCK NEXT TIME";
    remarkelement.className="failed"
    document.getElementById('percentage').classList.add("failed")

}
    else{
    remarkelement.innerHTML='PASSED! CONGRATULATIONS';
    remarkelement.className="passed"
     document.getElementById('percentage').classList.add("passed")


    }
}

function wrongQuestionswindow(){
  if(wrongquestions.length!==0){
  quizDiv.classList.add("d-none")
  document.getElementById('heading').innerHTML= '<h1>HTML & CSS <br> Wrong Answers Review</h1>'
  for(i=0;i<wrongquestions.length;i++){
   document.getElementById("list-ol").innerHTML+=`<li class="mt-3">
   <span class="question"> ${wrongquestions[i].wrongquestion} </span><br> <span class="wrong">
  ${wrongquestions[i].wronganswer} </span> <br> <span class="right">${wrongquestions[i].rightanswer}</span>
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
  