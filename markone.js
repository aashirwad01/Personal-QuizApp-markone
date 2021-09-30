const readlineSync=require("readline-sync");
const chalk =require('chalk');
const boldre=chalk.bold.red;
const boldye=chalk.bold.yellow;
const inv=chalk.inverse;
var score =0;

var questions=[{
  question:"Where do i study ? " ,
  answer: "BIT Mesra"
},
{
  question:"Fictional charater i am totally obssesed about? ",
  answer:"Sherlock Holmes"
},
{
  question:"Which sport i like most? ",
  answer :"Cricket"
},
{
  question : "My favorite sportsperson ? ",
  answer:"Sourav Ganguly"
},
{
  question : "Which Sweet i like the most ? ",
  answer:"Perukia"
}
];

var userName=readlineSync.question(boldye("What is your name? "));
console.log(chalk.green("-------------------------"))
console.log(chalk.cyan("Welcome ")+inv(userName.toUpperCase())+chalk.green("\nHow much you Know Aashirwad ? "));
console.log(chalk.yellow("-------------------------"))

function quiz(question, answer){
  var inputAnswer=readlineSync.question(chalk.blue(question));
  if(inputAnswer.toLowerCase()===answer.toLowerCase()){
    console.log(boldye("Right Answer "));
    score++;
    console.log(chalk.yellow(score));
    console.log(chalk.red("-------------------------"))
    
    
  }
  else{
    console.log(boldre("Oops Wrong Answer ")+ boldye("Correct Answer is "),
    chalk.green(answer));
    console.log(chalk.yellow(score));
    console.log(chalk.red("-------------------------"))
  }

}

for(var i=0;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer)
}
console.log(chalk.cyan("-------------------------"))
console.log(chalk.green("Your Final Score is"),boldye(score));
console.log(chalk.whiteBright("Thanks for Playing"));
