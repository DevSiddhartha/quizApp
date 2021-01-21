var readlineSync = require("readline-sync");
const chalk = require('chalk');

var userName = readlineSync.question("Enter your name : ");
console.log("Welcome " + userName + " to DO YOU KNOW SIDDHARTHA !");
console.log("Instructions: Type the option name (a,b,c,d) and press Enter.");

var score = 0;

//high score array object
var highScore = [
  {
    name : "Sid",
    score : 5
  },
  {
    name : "Shashank",
    score : 4
  }
]

//array of objects

var questions = [
  { question : "What is my full name ? \n a)Siddhartha \n b)Siddhartha Kumar \n c)Siddhartha Kumar Singh \n d)Siddhartha Singh \n",
  answer : "c"
  },
  {
    question : "What is my Nickname ? \n a)Sid \n b)Kittu \n c)Siddhu \n d)Siddy \n",
    answer : "b"
  },
  {
    question : "Where do I live ? \n a)Delhi \n b)Hamirpur \n c)Kanpur \n d)Lucknow \n",
    answer : "d"
  },
  {
    question : "Who is my favorite Marvel hero ? \n a)Captain America \n b)Iron Man \n c)Thor \n d)Hulk \n",
    answer : "b"
  },
  {
    question : "What's my favorite drink ? \n a)Chai \n b)Coffee \n c)Cold Drink \n d)Hot Chocolate \n",
    answer : "a"
  }
]

//function for calling game
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log(chalk.greenBright("right !"));
    score++;
  }else{
    console.log(chalk.redBright("wrong !"));
  }
  console.log("current score is: " + score);
  console.log("-------------------------");
}

for(var i = 0; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}
console.log(chalk.blue.bgRed.bold("Your score is : " + score));
console.log(chalk.bgBlue("\nCurrent High Score = 4"));
console.log("Send me a screenshot if your score is more than current high score !");