
function Learner(name,age,language) {
  this.name = name;
  this.age = age;
  this.language = language;
}
Learner.prototype.returnInfo = function() {
  return (this.name + " " + this.age + " " + this.language);
}

function languageChoice () {
  if (this.language === 'arabic') {
    console.log("they chose arabic.")
  }
}



$(document).ready(function() {
  $("form#userInput").submit(function(event) {
  event.preventDefault();
  var name = $("input.enter-name").val();

  var age = parseInt($("input.enter-age").val());

  var language = $("#languageSelector").val();

  var userInput = new Learner(name,age,language);
  console.log(userInput);
  console.log(userInput.returnInfo());
  $("#dumpInput").append("<li>" + userInput.returnInfo() + "</li>");

  languageChoice();
  });
});

