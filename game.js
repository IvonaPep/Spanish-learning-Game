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
  {
    title: "oso",
    question: "https://cdn-icons-png.flaticon.com/128/1998/1998571.png",
    answers: ["pajaro", "pato", "oso"],
  },
  {
    title: "mono",
    question:
      "https://cdn-icons.flaticon.com/png/128/3195/premium/3195966.png?token=exp=1656399436~hmac=6d409fec5f4885e23069e03597390489",
    answers: ["mono", "pajaro", "leon"],
  },
  {
    title: "cangrejo",
    question: "https://cdn-icons-png.flaticon.com/128/1010/1010028.png",
    answers: ["cabra", "cerdo", "cangrejo"],
  },
  {
    title: "raton",
    question: "https://cdn-icons-png.flaticon.com/128/375/375105.png",
    answers: ["raton", "cangrejo", "oveja"],
  },
  {
    title: "gallo",
    question: "https://cdn-icons-png.flaticon.com/128/1864/1864470.png",
    answers: ["lobo", "oveja", "gallo"],
  },
  {
    title: "serpiente",
    question: "https://cdn-icons-png.flaticon.com/128/616/616653.png",
    answers: ["perro", "serpiente", "cerdo"],
  },
  {
    title: "toro",
    question:
      "https://cdn-icons.flaticon.com/png/128/3819/premium/3819549.png?token=exp=1656405801~hmac=04740bf8301767586a91247edc286e40",
    answers: ["toro", "cabra", "serpiente"],
  },
  {
    title: "lobo",
    question:
      "https://cdn-icons.flaticon.com/png/128/3359/premium/3359935.png?token=exp=1656405709~hmac=73ce003f8739128538e0429b091fb180",
    answers: ["serpiente", "gato", "lobo"],
  },
  {
    title: "loro",
    question: "https://cdn-icons-png.flaticon.com/128/427/427406.png",
    answers: ["loro", "cangrejo", "serpiente"],
  },
];

let soundCorrect = new Audio("sound_correct.mp3");
let soundIncorrect = new Audio("sound_incorrect.mp3");
let soundGameOver = new Audio("mixkit-sad-game-over-trombone-471 (1).wav");

// soundCorrect.play();
// soundIncorrect.play();
//soundGameOver.play();

const startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", startGame);

const questionImage = document.getElementById("image-question");
const answerButtons = document.getElementById("answer-buttons");
const startImage = document.getElementById("start-img");

const levelBtn1 = document.getElementById("level-btn1");
levelBtn1.addEventListener("click", startGame);

const levelBtn2 = document.getElementById("level-btn2");
levelBtn2.addEventListener("click", startLevel2);

const random = Math.floor(Math.random() * animalsArr.length);
let takeAQuestion = "";

const refreshButton = document.getElementById("refresh");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);

function startGame() {
  levelBtn1.style.visibility = "hidden";
  levelBtn2.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  startImage.style.visibility = "hidden";
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
    soundCorrect.play();

    if (points === 10) {
      startLevel2();
    } else {
      startGame();
    }
  } else {
    soundIncorrect.play();
    points--;
    document.getElementById("points").innerHTML = points;
    if (points < 0) {
      soundGameOver.play();
      gameOver();
    }
  }
}

answerButtons.addEventListener("click", (e) => chooseAnswer(e));

function gameOver() {
  document.getElementById("answer-form").style.visibility = "hidden";
  document.getElementById("answer-buttons").style.visibility = "hidden";
  document.getElementById("question-images").style.visibility = "hidden";
  document.getElementById("points-sec").style.visibility = "hidden";
  document.getElementById("answer-input").style.visibility = "hidden";
  document.getElementById("submit-btn").style.visibility = "hidden";

  let gameOverDiv = document.createElement("div");
  document.body.appendChild(gameOverDiv);
  gameOverDiv.className = "new-div";
  gameOverDiv.innerHTML = "Game Over";
}

// // **********************************************************************************
// level 2
//

let input = document.getElementsByClassName("answer-input");
let submitBtn = document.getElementById("submit-btn");
let answerForm = document.getElementById("answer-form");
let countdown;

function startLevel2() {
  let time = 10;
  document.getElementById("time").innerHTML = 10;
  countdown = setInterval(count, 1000);

  function count() {
    time--;
    time == 0 ? clearInterval(countdown) : countdown;
    document.getElementById("time").innerHTML = `${time}`;
  }

  document.getElementById("answer-input").value = "";
  levelBtn1.style.visibility = "hidden";
  levelBtn2.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  startImage.style.visibility = "hidden";
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
  if (input === takeAQuestion.title) {
    soundCorrect.play();
    points++;
    document.getElementById("points").innerHTML = points;

    startLevel2();
  } else {
    soundIncorrect.play();
    points--;
    document.getElementById("points").innerHTML = points;
    if (points < 0) {
      soundGameOver.play();
      gameOver();
    }
    startLevel2();
  }
}

answerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputAnswer = document.getElementById("answer-input").value;
  clearInterval(countdown);
  chooseAnswer2(inputAnswer);
});
