const timeCount = setInterval(timerOn, 1000);

// timer
let timer = document.getElementById('counter');
let seconds = 0;

let paused = false
function timerOn(){
    if (paused == false)
    seconds++;
    timer.innerText = `${seconds}`;
}

// add
const add = document.getElementById('plus')
add.addEventListener('click', function() {
    timer.innerText = `${seconds++}`;
})

// subtract
const sub = document.getElementById('minus')
sub.addEventListener('click', function() {
    timer.innerText = `${seconds--}`;
});

// heart/like
const heart = document.getElementById('heart');
let likes = document.querySelector('.likes');
let time = timer.innerText;
let likedTime = document.getElementById(time);
heart.addEventListener('click', addLike);
function addLike(like) {

}

// busted like garb
const heart = document.getElementById('heart');
heart.addEventListener('click', addLike());
function addLike(like) {
    let likes = document.querySelector('.likes');
    let time = timer.innerText;
    let likedTime = document.getElementById(time);

    if(like) {
        let likedTime = like.innerText;
        let likedArray = likedTime.split(' ');
        let likes = Number(likedArray.slice(-2,-1));
        likes.innerHTML = `${time} has ${likes + 1} likes`;
    } else {
        let like = document.createElement('like');
        likedTime.setAttribute('id', time);
        likedTime.innerHTML = `${time} has ${likes} likes`;
    }
}

// pause
const press = [submit, heart, add, sub];
const pause = document.getElementById('pause')

pause.addEventListener('click', function() {
    if (pause.innerText === 'pause') {;
    pause.innerText = 'resume';
    press.forEach(function(p){
        p.disabled = true;
    });
    paused = !paused;
} else {
    pause.innerText = 'pause';
    press.forEach(function(p) {
        p.disabled = false;
    })
    paused = !paused;
}
});


