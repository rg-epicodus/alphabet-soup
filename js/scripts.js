$(document).ready(function() {

var soundFile5 = 'audio/arabic/L_05.mp3';
playSound(soundFile);
setInterval(function () {
    playSound(soundFile);
}, 1000);

function playSound(audio) {
    var soundElement = '<audio style="display:none; width: 0px; height: 0px;" id="audioNotifier" src="' + audio + '" controls preload="auto" autobuffer></audio>';
    $('#audioContainer').html(soundElement);
    $('#audioNotifier')[0].play();
}

});
