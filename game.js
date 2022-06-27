// import animalsArr from "./data";
// console.log(animalsArr);

const animalsArr = [
  {
    title: "gato",
    question: "https://cdn-icons-png.flaticon.com/512/1864/1864514.png",
    answers: ["pato", "gato", "oso"],
  },
  {
    title: "perro",
    question: "https://cdn-icons-png.flaticon.com/512/1998/1998627.png",
    answers: ["perro", "pato", "gato"],
  },
  {
    title: "leon",
    question: "https://cdn-icons-png.flaticon.com/512/1998/1998713.png",
    answers: ["gato", "leon", "oso"],
  },
  {
    title: "vaca",
    question: "https://cdn-icons-png.flaticon.com/512/1998/1998610.png",
    answers: ["vaca", "leon", "oso"],
  },
  {
    title: "cerdo",
    question: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    answers: ["oso", "leon", "cerdo"],
  },
  {
    title: "oveja",
    question:
      "https://cdn-icons.flaticon.com/png/512/2711/premium/2711858.png?token=exp=1656319435~hmac=bd55b79f602e6b15f9af6fcaab970407",
    answers: ["oveja", "gato", "oso"],
  },
  {
    title: "pajaro",
    question:
      "https://cdn-icons.flaticon.com/png/512/2677/premium/2677104.png?token=exp=1656325868~hmac=a11ba7c281e3d5beb7da534f510af496",
    answers: ["cerdo", "leon", "pajaro"],
  },
  {
    title: "burro",
    question: "https://cdn-icons-png.flaticon.com/128/3802/3802054.png",
    answers: ["oso", "oveja", "burro"],
  },
  {
    title: "caballo",
    question: "https://cdn-icons-png.flaticon.com/512/1998/1998679.png",
    answers: ["leon", "caballo", "pajaro"],
  },
  {
    title: "conejo",
    question: "https://cdn-icons-png.flaticon.com/512/1998/1998765.png",
    answers: ["conejo", "gato", "cerdo"],
  },
  {
    title: "cabra",
    question: "https://cdn-icons-png.flaticon.com/128/1998/1998662.png",
    answers: ["oso", "cabra", "pajaro"],
  },
  {
    title: "pato",
    question: "https://cdn-icons-png.flaticon.com/128/1012/1012677.png",
    answers: ["pato", "cabra", "conejo"],
  },
];
const startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", startGame);

const questionImage = document.getElementById("image-question");
const answerButtons = document.getElementById("answer-buttons");

const levelBtn1 = document.getElementById("level-btn1");
levelBtn1.addEventListener("click", startGame);

const levelBtn2 = document.getElementById("level-btn2");
levelBtn2.addEventListener("click", startLevel2);

const random = Math.floor(Math.random() * animalsArr.length);
let takeAQuestion = "";

function startGame() {
  console.log("started");
  levelBtn1.style.visibility = "hidden";
  levelBtn2.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  takeAQuestion = getRandomQuest();
  displayQuestion(takeAQuestion);
}

function getRandomQuest() {
  const random = Math.floor(Math.random() * animalsArr.length);
  return animalsArr[random];
}

function displayQuestion(randomQuest) {
  document.getElementById("answer-btn1").innerHTML = randomQuest.answers[0];
  document.getElementById("answer-btn2").innerHTML = randomQuest.answers[1];
  document.getElementById("answer-btn3").innerHTML = randomQuest.answers[2];
  document.getElementById("answer-buttons").style.visibility = "visible";

  document.getElementById("image-question").src = randomQuest.question;
  document.getElementById("question-images").style.visibility = "visible";
  document.getElementById("points-sec").style.visibility = "visible";
}

let points = 0;

function chooseAnswer(ev) {
  if (ev.target.innerText === takeAQuestion.title) {
    points++;
    document.getElementById("points").innerHTML = points;
    startGame();
  }
}

answerButtons.addEventListener("click", (e) => chooseAnswer(e));

// **********************************************************************************
// level 2
// 

let input = document.getElementsByClassName("answer-input");
let submitBtn = document.getElementById("submit-btn");
let answerForm = document.getElementById("answer-form");

function startLevel2() {
  console.log("started");
  document.getElementById("answer-input").value = "";
  levelBtn1.style.visibility = "hidden";
  levelBtn2.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  takeAQuestion = getRandomQuest();
  displayQuestion2(takeAQuestion);

}

function displayQuestion2(randomQuest) {
  document.getElementById("answer-buttons").style.visibility = "hidden";
  document.getElementById("image-question").src = randomQuest.question;
  document.getElementById("question-images").style.visibility = "visible";
  document.getElementById("points-sec").style.visibility = "visible";
  document.getElementById("answer-input").style.visibility = "visible";
  document.getElementById("submit-btn").style.visibility = "visible";
}

function chooseAnswer2(input) {
  console.log("input value in choseAnswer2 ", input);
  
  if (input === takeAQuestion.title) {
    points++;
    document.getElementById("points").innerHTML = points;

    startLevel2();
  }
}
answerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputAnswer = document.getElementById("answer-input").value;

  chooseAnswer2(inputAnswer);
});

