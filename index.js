document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.classList.add('playing');
        } else {
            audioPlayer.pause();
            playButton.classList.remove('playing');
        }
    });
});
