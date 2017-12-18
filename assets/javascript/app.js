//STAGE

var panel = $("#question-containerA");

// list of questions
var questionsArray = [{
  question: "Who is the greatest Tennis Player of all Time?",
  answers: ["Rafael Nadal", "Roger Federer", "Pete Sampras", "Andre Agassi"],
  rightResponse: "Rafael Nadal"
}, {
  question: "Who is the greatest NBA Basketball Player of all Time?",
  answers: ["Charles Barkley", "Michael Jordan", "Robert Jaworski", "Magic Johnson"],
  rightResponse: "Michael Jordan"
}, {
  question: "Who is the greatest Baseball Player of all Time?",
  answers: ["Derek Jeter", "Carl Ripken", "Babe Ruth", "Bernie Williams"],
  rightResponse: "Babe Ruth"
}, {
  question: "Who is the greatest NFL Football Player of all Time?",
  answers: ["Tom Brady", "Jerry Rice", "Joe Montana", "Peyton Manning"],
  rightResponse: "Peyton Manning"
}, {
  question: "Who is the greatest Soccer Player of all Time?",
  answers: ["Pele", "Maradona", "Messi", "Ronaldo", "Neymar"],
  rightResponse: "Pele"
}, {
  question: "Who is the greatest Olympic Swimmer of all Time?",
  answers: ["Missy Franklin", "Katie Ledecky", "Michael Phelps", "Natalie Coughlin"],
  rightResponse: "Katie Ledecky"
}, {
  question: "Who is the greatest Olympic Runner of all Time?",
  answers: ["Marion Jones", "Florence Joyner", "Tyson Gay", "Usain Bolt"],
  rightResponse: "Usain Bolt"
}


];  //array

var arrayWrongAnswers = [];

// timer

var timer;

var xGame = {    // parent

  correctAnswer: 0,
  incorrectAnswer: 0,
  counter: 60,    // 60 second countdown clock  

  myTimer: function() {
    xGame.counter--;
    $("#counter-span").html(xGame.counter);
    if (xGame.counter === 0) {
      console.log("TIME IS UP");
      xGame.done();
    }
  },

  start: function() {  // load questions
    timer = setInterval(xGame.myTimer, 1000);
    //timer = setTimeout(xGame.myTimer, 1000);

    $("#child-containerA").prepend("<h2>Time Remaining: <span id='counter-span'> 60 </span> Seconds</h2>");

    $("#start").remove();  

    for (var i = 0; i < questionsArray.length; i++) {
      panel.append("<h2>" + questionsArray[i].question + "</h2>");

      for (var k = 0; k < questionsArray[i].answers.length; k++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questionsArray[i].answers[k] + "''>" + questionsArray[i].answers[k]);
      }
    }

    panel.append("<h1> &nbsp;</h1>");
    panel.append("<button id='done'> Finish </button>");
  
  },   // start func

  done: function() {   // check answers

    //$( "div" ).each(function( index, element );

    jQuery.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questionsArray[0].rightResponse) {
        xGame.correctAnswer++;
      }
      else {
        xGame.incorrectAnswer++;
        arrayWrongAnswers.push("\"Tennis\"");
      }
    });

    jQuery.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questionsArray[1].rightResponse) {
        xGame.correctAnswer++;
      }
      else {
        xGame.incorrectAnswer++;
        arrayWrongAnswers.push("\"Basketball\"");
      }
    });

    jQuery.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questionsArray[2].rightResponse) {
        xGame.correctAnswer++;
      }
      else {
        xGame.incorrectAnswer++;
        arrayWrongAnswers.push("\"Baseball\"");
      }
    });

    jQuery.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questionsArray[3].rightResponse) {
        xGame.correctAnswer++;
      }
      else {
        xGame.incorrectAnswer++;
        arrayWrongAnswers.push("\"Football\"");
      }
    });

    jQuery.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questionsArray[4].rightResponse) {
        xGame.correctAnswer++;
      }
      else {
        xGame.incorrectAnswer++;
        arrayWrongAnswers.push("\"Soccer\"");
      }
    });

    jQuery.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questionsArray[5].rightResponse) {
        xGame.correctAnswer++;
      }
      else {
        xGame.incorrectAnswer++;
        arrayWrongAnswers.push("\"Swimmer\"");
      }
    });

    jQuery.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questionsArray[6].rightResponse) {
        xGame.correctAnswer++;
      }
      else {
        xGame.incorrectAnswer++;
        arrayWrongAnswers.push("\"Runner\"");
      }
    });

    this.result();

  },  // done func

  result: function() {

    clearInterval(timer);

    $("#child-containerA h2").remove();

    panel.html("<h2>RESULTS:</h2>");
    panel.append("<h2>Correct Answers: " + this.correctAnswer + "</h2>");
    panel.append("<h2>Incorrect Answers: " + this.incorrectAnswer + "</h2>");
    panel.append("<h2>Please correct your answer to question/s: " + arrayWrongAnswers + "</h2>");
    panel.append("<h2>No Answer/Blank: " + (questionsArray.length - (this.incorrectAnswer + this.correctAnswer)) + "</h2>");
  }  // result func

};  // game

// CLICK EVENTS

$(document).on("click", "#start", function() {
  xGame.start();
});


$(document).on("click", "#done", function() {
  xGame.done();
  
});

