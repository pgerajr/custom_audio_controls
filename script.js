let music = document.getElementById("song");
let clock = document.getElementById("timer");
let count_display = document.getElementById("counter");
let go = document.getElementById("play");
let wait = document.getElementById("pause");


function play() {
    music.play();
    count_display.style.display = "block";
    go.style.display = "none";
    wait.style.display = "inline-block";
}

function pause() {
    music.pause();
    go.style.display = "inline-block";
    wait.style.display = "none";
}

function stop() {
    music.pause();
    music.currentTime = 0;
    count_display.style.display = "none";
    go.style.display = "inline-block";
    wait.style.display = "none";
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
