
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

  $(".mainPage").click(function() {
    document.getElementById("userInput").reset();
    $("#landingTitle").show();
    $("#landingInput").show();
    $("#hide-languages").hide();
    $("#hide-languages").empty();
  })

  $(".languageSwap").click(function() {
    document.getElementById("userInput").reset();
    $("#landingTitle").show();
    $("#landingInput").show();
    $("#hide-languages").hide();
    $("#hide-languages").empty();
  })

// Button to change languages currently only changes once -rg
// function languageSwap() {
//   var language = $("#languageSelector").val();
//   if (language === "arabic") {
//     $("#arabic").hide();
//     $("#english").show();
//   } else if (language === "english") {
//     $("#english").hide();
//     $("#arabic").show();
//   }
// }


  });
});
