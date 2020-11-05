let music = document.getElementById("song");
let clock = document.getElementById("timer");
let count_display = document.getElementById("counter");

function play() {
    music.play();
    count_display.style.display = "block"
}

function stop() {
    music.pause();
    music.currentTime = 0;
    count_display.style.display = "none";

}

function backward() {
    music.currentTime -= 15;
}

function forward() {
    music.currentTime += 15;
}

function slowDown() {
    music.playbackRate -= 0.1;
}

function speedUp() {
    music.playbackRate += 0.1;
}

music.ontimeupdate = function () {
    timer();
}

function timer() {
    clock.innerHTML = Math.floor(music.currentTime);
}