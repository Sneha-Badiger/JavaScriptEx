const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which is the largest planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    nextButton.style.display = "none"; 
    scoreText.innerText = "";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });

    nextButton.style.display = "none"; 
}

function resetState() {
    answerButtons.innerHTML = "";
    nextButton.style.display = "none"; 
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            button.classList.add(correct ? "correct" : "wrong");
        }
    });

    nextButton.style.display = "block"; 
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Restart";
    nextButton.style.display = "block";

    // Remove previous event listeners to prevent duplication
    nextButton.removeEventListener("click", startQuiz);
    
    // Add a fresh event listener for restart
    nextButton.addEventListener("click", () => {
        startQuiz();
    }, { once: true }); // Ensures this event runs only once
}

startQuiz();
