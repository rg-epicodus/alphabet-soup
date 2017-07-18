$(document).ready(function() {
  $("#playButton").click(function(playSound) {
    // event.preventDefault;

    var soundFile = 'audio/arabic/L_05.mp3';
    playSound(soundFile);
    // setInterval(function () {
    //     playSound(soundFile);
    // }, 4000);

    function playSound(audio) {
        var soundElement = '<audio style="display:none; width: 0px; height: 0px;" id="audioNotifier" src="' + audio + '" controls preload="auto" autobuffer></audio>';
        $('#audioContainer').html(soundElement);
        $('#audioNotifier')[0].play();
    }

  });
});
