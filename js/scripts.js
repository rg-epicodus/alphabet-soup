
function Learner(name,age,language) {
  this.name = name;
  this.age = age;
  this.language = language;
}
Learner.prototype.returnInfo = function() {
  return (this.name + " " + this.age + " " + this.language);
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

// $("replay").click()function(event){
//   event.preventDefault();
  //add function to reset page and start over
  //add a button that swaps language
}

  });
});
