
function Learner(name,age,language) {
  this.name = name;
  this.age = age;
  this.language = language;
}
Learner.prototype.returnInfo = function() {
  return (this.name + " " + this.age + " " + this.language);
}

function replay() {
  $("#arabic").hide();
  $("#english").hide();
  $("#landingInput").show();
  document.getElementById("userInput").reset();
}

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
  event.preventDefault();
  $("#landingInput").hide();
  var name = $("input.enter-name").val();

  var age = parseInt($("input.enter-age").val());

  var language = $("#languageSelector").val();

  var userInput = new Learner(name,age,language);
  $("#dumpInput").append("<li>" + userInput.returnInfo() + "</li>");

  if (language === "arabic") {
    $("#arabic").show();
  } else if (language === "english") {
    $("#english").show();
  }

  });
});
