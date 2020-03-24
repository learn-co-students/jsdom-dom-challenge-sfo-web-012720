const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const pauseButton = document.getElementById('pause');
const likeButton = document.getElementById('heart');
const form = document.getElementById('comment-form');
const comments = document.getElementById('list');
const likes = []
const likesElement = document.getElementsByClassName('likes')[0];

let countBySec = setInterval(incrementCounter, 1000);
let counter = document.getElementById('counter');
let count = parseInt(counter.innerText, 10)


function incrementCounter() {
    count++;
    counter.innerHTML = count;
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
}

function setCounter() {
    if (pauseButton.innerText == "pause") {
        pauseCounter();
    } else if (pauseButton.innerText == "resume") {
        resumeCounter();
    }
    
}

function pauseCounter(){
    pauseButton.innerText = "resume"
    clearInterval(countBySec)
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
}

function resumeCounter(){
    pauseButton.innerText = "pause";
    countBySec = setInterval(incrementCounter, 1000);
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
}

function addLike(){
    if (likes[count]) {
        likes[count]++;
    } else {
        likes[count] = 1;
    }
    displayLikes();
}

function displayLikes() {
    likesElement.innerHTML = ""
    for (i = 0; i < likes.length; i++){
        if (likes[i]) {
            const newLike = document.createElement("li")  
            newLike.textContent = `${i} has ${likes[i]} likes`
            likesElement.appendChild(newLike)
        }
    }
}

function createComment(event){
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const newComment = document.createElement("li");
    newComment.innerText = commentInput.value

    comments.appendChild(newComment)
};

plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', decrementCounter);
likeButton.addEventListener('click', addLike);
pauseButton.addEventListener('click', setCounter);
form.addEventListener("submit", createComment);