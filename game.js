const animalsArr = [
  {
    title: "gato",
    question:
      "https://cdn-icons-png.flaticon.com/512/1864/1864514.png",
    answers: ["pato", "gato", "oso"],
  },
  {
    title: "perro",
    question:
      "https://cdn-icons-png.flaticon.com/512/1998/1998627.png",
    answers: ["perro", "pato", "gato"],
  },
  {
    title: "leon",
    question:
      "https://cdn-icons-png.flaticon.com/512/1998/1998713.png",
    answers: ["gato", "leon", "oso"],
  },
  { title: "vaca",
    question: "https://cdn-icons-png.flaticon.com/512/1998/1998610.png",
    answers: ["vaca", "leon", "oso"],
  },
  { title: "cerdo",
  question:
  "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
  answers: ["oso", "leon", "cerdo"],
  },
  { title: "oveja",
  question: "https://cdn-icons.flaticon.com/png/512/2711/premium/2711858.png?token=exp=1656319435~hmac=bd55b79f602e6b15f9af6fcaab970407",
  answers: ["oveja", "gato", "oso"],
  },
  { title: "pajaro",
  question: "https://cdn-icons.flaticon.com/png/512/2677/premium/2677104.png?token=exp=1656325868~hmac=a11ba7c281e3d5beb7da534f510af496",
  answers: ["cerdo", "leon", "pajaro"],
  },
  { title: "burro",
  question:"https://cdn-icons-png.flaticon.com/128/3802/3802054.png",
  answers: ["oso", "oveja", "burro"],
  },
  { title: "caballo",
    question : "https://cdn-icons-png.flaticon.com/512/1998/1998679.png",
    answers: ["leon", "caballo", "pajaro"],
  },
  { title: "conejo",
    question: "https://cdn-icons-png.flaticon.com/512/1998/1998765.png",
    answers: ["conejo", "gato", "cerdo"],
  },
  { title: "cabra",
    question: "https://cdn-icons-png.flaticon.com/128/1998/1998662.png",
    answers: ["oso", "cabra", "pajaro"],
  },
  { title: "pato",
    question: "https://cdn-icons-png.flaticon.com/128/1012/1012677.png",
    answers: ["pato", "cabra", "conejo"],
},
];

const startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", startGame);

let points  = 0;

const questionImage = document.getElementById("image-question");
const answerButtons = document.getElementById("answer-buttons");

const random = Math.floor(Math.random() * animalsArr.length);

function startGame() {
  

  startBtn.style.visibility = "hidden";
  takeAQuestion = getRandomQuest();
  displayQuestion(takeAQuestion);
  chooseAnswer();
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


 let newHandle = function chooseAnswer (ev) {
    if (ev.target.innerText === takeAQuestion.title) {
       points++;
       (document.getElementById("points").innerHTML) = points;
      startGame();
    }
  };
 
  answerButtons.addEventListener("click", newHandle);


