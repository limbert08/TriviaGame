var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "Who is the greatest Tennis Player of all Time?",
  answers: ["Rafael Nadal", "Roger Federer", "Pete Sampras", "Andre Agassi"],
  correctAnswer: "Rafael Nadal"
}, {
  question: "Who is the greatest NBA Basketball Player of all Time?",
  answers: ["Charles Barkley", "Michael Jordan", "Robert Jaworski", "Magic Johnson"],
  correctAnswer: "Michael Jordan"
}, {
  question: "Who is the greatest Baseball Player of all Time?",
  answers: ["Derek Jeter", "Carl Ripken", "Babe Ruth", "Bernie Williams"],
  correctAnswer: "Babe Ruth"
}, {
  question: "Who is the greatest NFL Football Player of all Time?",
  answers: ["Tom Brady", "Jerry Rice", "Joe Montana", "Peyton Manning"],
  correctAnswer: "Peyton Manning"
}, {
  question: "Who is the greatest Soccer Player of all Time?",
  answers: ["Pele", "Maradona", "Messi", "Ronaldo", "Neymar"],
  correctAnswer: "Pele"
}, {
  question: "Who is the greatest Olympic Swimmer of all Time?",
  answers: ["Missy Franklin", "Katie Ledecky", "Michael Phelps", "Natalie Coughlin"],
  correctAnswer: "Katie Ledecky"
}, {
  question: "Who is the greatest Olympic Gymnast of all Time?",
  answers: ["Nastia Liukin", "Simone Biles", "Nadia Comaneci", "McKayla Maroney"],
  correctAnswer: "Nadia Comaneci"
}, {
  question: "Who is the greatest Olympic Runner of all Time?",
  answers: ["Marion Jones", "Florence Joyner", "Tyson Gay", "Usain Bolt"],
  correctAnswer: "Usain Bolt"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  myTimer: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME IS UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.myTimer, 1000);
    //timer = setTimeout(game.myTimer, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'> 60 </span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<h1> &nbsp;</h1>");
    panel.append("<button id='done'> Finish </button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
  
});

