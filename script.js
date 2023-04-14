



const quizDb = [
    {
        para: " 1:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ullam quisquamoloremque? Earum totam magni sit voluptas nihil.Exercitationem quod quam modi cumque nam assumendaicta dolores sint atque saepe!",
        clue: " clue1:check the paragraph once",
        question: "Q1:What is the fullform of HTML?",
        a: "HyperText Makeup Language",
        b: "HyperText Markup Language",
        c: "HyperText Mark Language",
        d: "Hyper Markup Language",
        ans: "ans2"

    },
    {
        para: " 2:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ullam quisquamoloremque? Earum totam magni sit voluptas nihil.Exercitationem quod quam modi cumque nam assumendaicta dolores sint atque saepe!",

        clue: " clue2:check the paragraph once",
        question: "Q2:What is the fullform of JS?",
        a: "JavaScript",
        b: "HyperText Markup Language",
        c: "HyperText Mark Language",
        d: "Hyper Markup Language",
        ans: "ans1"

    },
    {
        para: " 3:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ullam quisquamoloremque? Earum totam magni sit voluptas nihil.Exercitationem quod quam modi cumque nam assumendaicta dolores sint atque saepe!",
        clue: " clue3:check the paragraph once",
        question: "Q3:What is the fullform of CSS?",
        a: "HyperText Makeup Language",
        b: "HyperText Markup Language",
        c: "Cascading Style Sheets",
        d: "Hyper Markup Language",
        ans: "ans3"
    },
    {
        para: " 4:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ullam quisquamoloremque? Earum totam magni sit voluptas nihil.Exercitationem quod quam modi cumque nam assumendaicta dolores sint atque saepe!",
        clue: " clue4:check the paragraph once",
        question: "Q4:What is the fullform of  HTTP?",
        a: "Hypertext transfer protocol",
        b: "HyperText Markup Language",
        c: "HyperText Mark Language",
        d: "Hyper Markup Language",
        ans: "ans1"
    },
    {
        para: "5:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ullam quisquamoloremque? Earum totam magni sit voluptas nihil.Exercitationem quod quam modi cumque nam assumendaicta dolores sint atque saepe!",
        clue: " clue5:the clue is" + ("https://google.com"),
        question: "Q5:What is the fullform of HTTPS?",
        a: "HyperText transfer protocol secure",
        b: "HyperText Markup Language",
        c: "HyperText Mark Language",
        d: "Hyper Markup Language",
        ans: "ans1"

    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const Clue = document.querySelector('.clues');
const para=document.querySelector('.para');

let questionCount = 0;
let score = 0;
 
 
const loadQuestion = () => {


    const questionList = quizDb[questionCount];
    Clue.innerText = questionList.clue;
    para.innerText=questionList.para;
    question.innerText = questionList.question;



    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}

loadQuestion();




const getAnswerCkecked = () => {
    let answer;
    answers.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id;
        }

    })
    return answer;
}

const deSelectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getAnswerCkecked();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDb[questionCount].ans) {
        score++;
    }
    questionCount++;
    if (questionCount < quizDb.length) {
        loadQuestion();
    }
    else {
        if (score / quizDb.length == 1) {
            showScore.innerHTML = `
            <h3>you won</h3>
           <button class="btn" onclick="location.reload()">Play again</button>
            `
        }
        else {
            showScore.innerHTML = `
            <h3>you lost</h3>
           <button class="btn" onclick="location.reload()">Try again</button>
            `
        }
        showScore.classList.remove('scoreArea');
    }
    deSelectAll();

})