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
      "https://cdn-icons-png.flaticon.com/512/2600/2600600.png",
    answers: ["oveja", "gato", "oso"],
  },
  {
    title: "pajaro",
    question:
      "https://cdn-icons-png.flaticon.com/128/3069/3069186.png",
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
      "https://cdn-icons-png.flaticon.com/128/1998/1998721.png",
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
      "https://cdn-icons-png.flaticon.com/128/2298/2298491.png",
    answers: ["toro", "cabra", "serpiente"],
  },
  {
    title: "lobo",
    question:
      "https://cdn-icons-png.flaticon.com/128/6658/6658035.png",
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


const startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", startGame);

const questionImage = document.getElementById("image-question");
const answerButtons = document.getElementById("answer-buttons");
const startImage = document.getElementById("start-img");

const levelBtn1 = document.getElementById("level-btn1");
levelBtn1.addEventListener("click", startGame);

const levelBtn2 = document.getElementById("level-btn2");
levelBtn2.addEventListener("click", startLevel2);

const levelBtn3 = document.getElementById("level-btn3");
levelBtn3.addEventListener("click", startLevel3);

const random = Math.floor(Math.random() * animalsArr.length);
let takeAQuestion = "";

const refreshButton = document.getElementById("refresh");

let level3 = false;
const animalsNameArr = ["oso", "toro", "pajaro", "lobo", "loro", "gato", "perro", "serpiente", "cerdo", "cangrejo", "vaca", "mono", "cabra", "raton", "conejo", "leon", "oveja", "burro", "caballo", "pato", "gallo"];
let usersAnswersArr = [];

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);

function startGame() {
  levelBtn1.style.visibility = "hidden";
  levelBtn2.style.visibility = "hidden";
  levelBtn3.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  startImage.style.visibility = "hidden";
  
  
  let time = 10;
  document.getElementById("time").innerHTML = 10;
  countdown = setInterval(count, 1000);

  function count() {
    time--;
    time == 0 ? clearInterval(countdown) : countdown;
    time == 0 ? startGame() : countdown;
    document.getElementById("time").innerHTML = `${time}`;
  }
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
  clearInterval(countdown);


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

  level2 = false;
  level3 = false;

  let gameOverDiv = document.createElement("div");
  document.body.appendChild(gameOverDiv);
  gameOverDiv.className = "new-div";
  gameOverDiv.innerHTML = "Game Over";
}

// // **********************************************************************************
// level 2
//**********************************************************************************

let input = document.getElementsByClassName("answer-input");
let submitBtn = document.getElementById("submit-btn");
let answerForm = document.getElementById("answer-form");
let countdown;
let level2 = false;

function startLevel2() {
  level2 = true;
  let time = 10;
  document.getElementById("time").innerHTML = 10;
  countdown = setInterval(count, 1000);

  function count() {
    time--;
    time == 0 ? clearInterval(countdown) : countdown;
    time == 0 ? startLevel2() : countdown;
    document.getElementById("time").innerHTML = `${time}`;
  }

  document.getElementById("answer-input").value = "";
  levelBtn1.style.visibility = "hidden";
  levelBtn2.style.visibility = "hidden";
  levelBtn3.style.visibility = "hidden";
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
  if (input.toLowerCase() === takeAQuestion.title) {
    soundCorrect.play();
    points++;
    document.getElementById("points").innerHTML = points;

    if(points > 20){
      console.log("going to 3");
      level2 = false;
      level3 = true;
      startLevel3();
    } else {
    startLevel2();
  }} else {
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




// *************************************************************************************************
// Level 3

// *************************************************************************************************




function startLevel3 (){
  level3 = true;

  document.getElementById("answer-input").style.visibility = "visible";
  document.getElementById("answer-input").value = "";
  document.getElementById("answer-buttons").style.visibility = "hidden";
  document.getElementById("question-images").style.visibility = "hidden";
  document.getElementById("submit-btn").style.visibility = "hidden";
  document.getElementById("points-sec").style.visibility = "visible";
  document.getElementById("h2").style.visibility = "visible";

  levelBtn1.style.visibility = "hidden";
  levelBtn2.style.visibility = "hidden";
  levelBtn3.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  startImage.style.visibility = "hidden";
  
  let time = 30;
  document.getElementById("time").innerHTML = 30;
  countdown = setInterval(count, 1000);

  function count() {
    time--;
    time == 0 ? finishLevel3() : countdown;
    document.getElementById("time").innerHTML = `${time}`;
  }
  chooseAnswer3(input);
}

  function chooseAnswer3(input) {

    if (animalsNameArr.includes(input.toLowerCase())) {
      soundCorrect.play();
      points = points + 2;
      document.getElementById("points").innerHTML = points;
      document.getElementById("answer-input").value = "";


      let answerDiv = document.createElement("div");
      document.body.appendChild(answerDiv);
      answerDiv.className = "answer-div";
      answerDiv.innerHTML = input.toLowerCase();
      answerDiv.style.position = Math.floor(Math.random() * (100 + 1))
      
    } else {
      soundIncorrect.play();
      points--;
      document.getElementById("points").innerHTML = points;
      document.getElementById("answer-input").value = "";
      if (points < 0) {
        soundGameOver.play();
        gameOver();
      }
    }
  };

  answerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let inputAnswer = document.getElementById("answer-input").value;
  
    
    if(level2){
      clearInterval(countdown);
      chooseAnswer2(inputAnswer);
    } else if (level3){
      chooseAnswer3(inputAnswer);

    };
  });

  function finishLevel3 (){
  
      let finishDiv = document.createElement("div");
      document.body.appendChild(finishDiv);
      finishDiv.className = "finish-div";
      finishDiv.innerHTML = `${points} points. Muy bien!`;
      clearInterval(countdown);
      setTimeout(refreshPage, 5000);

  }
