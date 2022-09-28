
window.onload = function(){
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Who invented Python Program Language",
        a: "Guido von Rossom",
        b: "Dennis Richie",
        c: "Eric Naam",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "What is the full form of ACL",
        a: "Access Current list",
        b: "Access Control list",
        c: "Automation Cypher Light",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "which of the programming language is purely oops based",
        a: "Python",
        b: "Java",
        c: "c++",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which of the language don't need main method",
        a: "Java",
        b: "c++",
        c: "c",
        d: "none of the above",
        correct: "d",
    },
    {
        question: "Django is purely written in ",
        a: "c++",
        b: "Javascript",
        c: "Python",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Which was the first programming language designed for AI programming",
        a: "LISP",
        b: "Python",
        c: "swift",
        d: "none of the above",
        correct: "a",
    }
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
// console.log(answerEls)
const questionEl = document.getElementById('question1')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
let unattemp = 10;
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           unattemp--
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           sessionStorage.setItem("marks", score);
           window.location.href="scores.html"
       }
    }
})

var sec         = 10,
    countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';
        
        secpass();
    }, 1000);

function secpass() {
    'use strict';
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    if (min < 10) {
        
        min = '0' + min;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
    
    if (sec > 0) {
        
        sec = sec - 1;
        
    } else {
        
        clearInterval(countDown);
        
        sessionStorage.setItem("marks", score);
        sessionStorage.setItem("una", unattemp);

        window.location.href="timeUp.html"
        
    }
}

}