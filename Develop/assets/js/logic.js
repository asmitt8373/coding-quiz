// TODO: add game logic
var quizcontainer = document.getElementById("quiz")
var resultsContainer = document.getElementById('results');
var btnEl = document.getElementById("startQuiz")
var currentQuestion;
var timerElement = document.getElementById("timer")

function buildQuiz(){
    document.getElementById("mainMenu").setAttribute("style", "display: none;")
    currentQuestion = 0;
    showQuestion()
    // timerStarts()
}

//presents the question
function showQuestion() {
    var quizEl = document.getElementById("quizArea");
    quizEl.innerHTML= "";
    var newH2 = document.createElement("h2");
    newH2.textContent = myQuestions[currentQuestion].question;

    var choiceA = document.createElement("button");
    choiceA.textContent = myQuestions[currentQuestion].answers.a;

    var choiceB = document.createElement("button");
    choiceB.textContent = myQuestions[currentQuestion].answers.b;

    var choiceC = document.createElement("button");
    choiceC.textContent = myQuestions[currentQuestion].answers.c;

    var choiceD = document.createElement("button");
    choiceD.textContent = myQuestions[currentQuestion].answers.d;
    //makes question to go to the next when its clicked
    choiceA.addEventListener("click", checkAnswerAndContinue)
    choiceB.addEventListener("click", checkAnswerAndContinue)
    choiceC.addEventListener("click", checkAnswerAndContinue)
    choiceD.addEventListener("click", checkAnswerAndContinue)
//presents the questions when you go to the next 
    quizEl.appendChild(newH2)
    quizEl.appendChild(choiceA)
    quizEl.appendChild(choiceB)
    quizEl.appendChild(choiceC)
    quizEl.appendChild(choiceD)
}
    var score = 0;
    var correct = new Audio("correct.wav")
    var wrong = new Audio("incorrect.wav")
function checkAnswerAndContinue(event) {
    console.log(event.target.textContent)
   
    // console.log(event.target)
    if( event.target.textContent === myQuestions[currentQuestion].correct_answer){
        score ++;
        alert("")
    } else {

    }

    currentQuestion++;
    if(currentQuestion< myQuestions.length) {
        showQuestion()
    }
}

function showResults(){}

// buildQuiz();
btnEl.addEventListener("click", buildQuiz)