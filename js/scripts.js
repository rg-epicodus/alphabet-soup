
function Learner(name,age,language) {
  this.name = name;
  this.age = age;
  this.language = language;
}
Learner.prototype.returnInfo = function() {
  return ("Hello " + this.name + "! Click each letter to hear the " + this.language + " pronnunciation.");
}


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
  event.preventDefault();
  $("#landingTitle").hide();
  $("#landingInput").hide();
  var name = $("input.enter-name").val();

  var age = parseInt($("input.enter-age").val());

  var language = $("#languageSelector").val();

  var userInput = new Learner(name,age,language);
  $(".dumpInput").append("<li>" + userInput.returnInfo() + "</li>");
  // $("#dumpInput2").append("<li>" + userInput.returnInfo() + "</li>");

  if (language === "arabic") {
    $("#arabic").show();
  } else if (language === "english") {
    $("#english").show();
  } else {
    $("#ASL").show();
  }

  $(".button-row").click(function() {
    $("#landingTitle").show();
    $("#landingInput").show();
    $("#hide-languages").hide();
    $("#hide-language").empty();
    reload();
  })

$("form#userInput").click(function() {
    location.reload();
});
// document.forms["#userInput"].reset();

// $("replay").click()function(event){
//   event.preventDefault();
//   // add function to reset page and start over
//   // add a button that swaps language
// }

  });
});
