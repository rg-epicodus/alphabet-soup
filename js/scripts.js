function Learner(name,age) {
  this.name = name;
  this.age = age;
}
Learner.prototype.returnInfo = function() {
  return (this.name + " " + this.age);
}




$(document).ready(function() {
  $("form#userInput").submit(function(event) {
  event.preventDefault();
  var name = $("input.enter-name").val();

  var age = parseInt($("input.enter-age").val());

  var userInput = new Learner(name,age);
  console.log(userInput.returnInfo());
  $("#dumpInput").append("<li>" + userInput.returnInfo() + "</li>");

  });
});


//   $("#j-eem").click(function(playSound) {
//
//     var soundFile = 'audio/arabic/L_05.mp3';
//     playSound(soundFile);
//
//     function playSound(audio) {
//         var soundElement = '<audio style="display:none; width: 0px; height: 0px;" id="audioNotifier" src="' + audio + '" controls preload="auto" autobuffer></audio>';
//         $('#audioContainer').html(soundElement);
//         $('#audioNotifier')[0].play();
//     }
//
//   });
//
//   $(this.image).click(function(playSound) {
//
//     var soundFile = 'audio/arabic/L_05.mp3';
//     playSound(soundFile);
//
//     function playSound(audio) {
//         var soundElement = '<audio style="display:none; width: 0px; height: 0px;" id="audioNotifier" src="' + audio + '" controls preload="auto" autobuffer></audio>';
//         $('#audioContainer').html(soundElement);
//         $('#audioNotifier')[0].play();
//     }
//
//   });
//
// });
