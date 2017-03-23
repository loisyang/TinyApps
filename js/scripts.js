// $(document).ready(function() {

// to make sure full pager always works, make sure the first section is always 'firstPage'
  
// })

$(window).on("load",function(){
    // Animate loader off screen
    $("body").fadeIn("slow");

    $('#fullpage').fullpage({
    anchors: ['firstPage', 'fourthPage', 'thirdPage','secondPage','lastPage'],
    menu: '#menu ',
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['Intro', 'Omega Go','123Tiles','Letterix','NeverEnd'],
    showActiveTooltip: true,
    keyboardscrolling: true,
    scrollingSpeed: 800,
    responsiveWidth: 1024,
    responsiveHeight: 400,
    loopBottom: true,
    fixedElements: '#header',

  })
});

// Add a custom video player control
document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

// var mediaPlayer;
// function initialiseMediaPlayer(){
//     mediaPlayer = document.getElementById('media-video');
//     mediaPlayer.controls = true
// }

// function togglePlayPause() {
//    var btn = document.getElementById('play-pause-button');
//    if (mediaPlayer.paused || mediaPlayer.ended) {
//       btn.title = 'pause';
//       btn.innerHTML = 'pause';
//       btn.className = 'pause';
//       mediaPlayer.play();
//    }
//    else {
//       btn.title = 'play';
//       btn.innerHTML = 'play';
//       btn.className = 'play';
//       mediaPlayer.pause();
//    }
// }

// function changeButtonType(btn, value) {
//    btn.title = value;
//    btn.innerHTML = value;
//    btn.className = value;
// }

// function stopPlayer() {
//    mediaPlayer.pause();
//    mediaPlayer.currentTime = 0;
// }

// function changeVolume(direction) {
//    if (direction === '+') mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
//    else mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
//    mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
// }

// function toggleMute() {
//    var btn = document.getElementById('mute-button');
//    if (mediaPlayer.muted) {
//       changeButtonType(btn, 'mute');
//       mediaPlayer.muted = false;
//    }
//    else {
//       changeButtonType(btn, 'unmute');
//       mediaPlayer.muted = true;
//    }
// }

// function replayMedia() {
//    resetPlayer();
//    mediaPlayer.play();
// }


// mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
// function updateProgressBar() {
//    var progressBar = document.getElementById('progress-bar');
//    var percentage = Math.floor((100 / mediaPlayer.duration) *
//    mediaPlayer.currentTime);
//    progressBar.value = percentage;
//    progressBar.innerHTML = percentage + '% played';
// }

// function resetPlayer() {
//    progressBar.value = 0;
//    mediaPlayer.currentTime = 0;
//    changeButtonType(playPauseBtn, 'play');
// }

