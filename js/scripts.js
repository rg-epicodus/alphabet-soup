$(document).ready(function() {

var soundFile = 'audio/tick.mp3';
playSound(soundFile);
setInterval(function () {
    playSound(soundFile);
}, tempo);

function playSound(audio) {
    var soundElement = '<audio style="display:none; width: 0px; height: 0px;" id="audioNotifier" src="' + audio + '" controls preload="auto" autobuffer></audio>';
    $('#audioContainer').html(soundElement);
    $('#audioNotifier')[0].play();
}

});
