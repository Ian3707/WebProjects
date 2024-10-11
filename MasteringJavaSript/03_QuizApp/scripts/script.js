const questions = [
    {
        question: "Largest animal in the world",
        answers: [
            {text: "Shark", correct: false},
            {text: "Elephant", correct: false},
            {text: "Whale", correct: true},
            {text: "Cheetah", correct: false}
        ]
    },
    {
        question: "Best programming language",
        answers: [
            {text: "Pascal", correct: false},
            {text: "C++", correct: false},
            {text: "Java", correct: true},
            {text: "JavaScript", correct: false}
        ]
    },
    {
        question: "Closest star",
        answers: [
            {text: "Sirius", correct: false},
            {text: "Vega", correct: false},
            {text: "Polar", correct: false},
            {text: "Sun", correct: true}
        ]
    },
    {
        question: "6th rainbow color",
        answers: [
            {text: "Blue", correct: false},
            {text: "Indigo", correct: true},
            {text: "Violet", correct: false},
            {text: "Green", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer__buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer__btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        ++score;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score}/${questions.length}!`;
    nextButton.style.display = "block";
    if(score < questions.length){
        nextButton.innerHTML = "Try again!";
    }else{
        nextButton.innerHTML = "Good job!";
    }
}

function handleNextButton(){
    ++currentQuestionIndex;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();