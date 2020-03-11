const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const pause = document.getElementById('pause');
const heart = document.getElementById('heart');
const submit = document.getElementById('submit');
const form = document.getElementById('comment-form');
const formElements = form.elements;
const comments = document.getElementById('list');
const likesList = document.querySelector(".likes")

let countBySec = setInterval(increment, 1000);
let counter = document.getElementById('counter');
let count = parseInt(counter.innerText, 10);

const likes = [];

document.addEventListener("DOMContentLoaded", function() {  
    plus.addEventListener('click', increment);
    minus.addEventListener('click', decrement);
    heart.addEventListener('click', addLike);
    pause.addEventListener('click', pauseResume);
    form.addEventListener("submit", createComment);
});

function decrement() {
    count --;
    counter.innerHTML = count;
}

function increment() {
    count ++;
    counter.innerHTML = count;
}

function pauseResume() {
    if (pause.innerText == "pause") {
        pauseAll();
    } else if (pause.innerText == "resume") {
        resumeAll();
    }
}

function pauseAll(){
    pause.innerText = "resume"
    clearInterval(countBySec)
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    // for (i = 0; i < elements.length; i++) {
    //     elements[i].readOnly = true;
    // }
}

function resumeAll(){
    pause.innerText = "pause";
    countBySec = setInterval(increment, 1000);
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
}

function createComment(event){
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const newComment = document.createElement("li");
    newComment.innerText = commentInput.value

    comments.appendChild(newComment)
    event.target.reset();
}

// these functions work for the likes, but are not *exactly* like the example

function addLike(){
    if (likes[count]) {
        likes[count]++;
    } else {
        likes[count] = 1;
    }
    displayLikes();
}

function displayLikes() {
    likesList.innerText = ""
    for (i = 0; i < likes.length; i++){
        if (likes[i]) {
            const newLike = document.createElement("li")  
            newLike.textContent = `${i} has ${likes[i]} likes`
            likesList.appendChild(newLike)
        }
    }
}

///////// 'like' function that kind of works, will come back later

// function addLike() {
//     if (likes[count]) {
//         likes[count]++;
//         for (i = 0; i < likes.length; i++){
//             f = document.querySelector('[data-num="'+count+'"]');
//             f.innerText = `${count} has been liked ${likes[i]} times`
//         }
//     } 
//     else {
//         likes[count] = 1;
//         likesList.innerText = ""
//         const newLike = document.createElement("li");
//         newLike.setAttribute("data-num", count);
//         newLike.textContent = `${count} has 1 like`
//         likesList.appendChild(newLike)
//     }
// }