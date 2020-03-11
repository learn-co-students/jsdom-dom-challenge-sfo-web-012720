const counter = document.getElementById('counter');
counter.innerHTML = 0
let count = 0;

document.addEventListener("DOMContentLoaded", () => {

    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const heart = document.getElementById('heart')
    const pause = document.getElementById('pause')    

    plus.addEventListener('click', incCount);
    minus.addEventListener('click', decCount);
    heart.addEventListener('click', addLike);
    pause.addEventListener('click', pauseBtn);
    
    setInterval(contInc, 1000);
});

function contInc() { 
    count++;   
    counter.innerHTML=count;
}

const incCount = event => {
    count ++;
    counter.innerHTML = count;
}
const decCount = event => {
    count --;
    counter.innerHTML = count;
}


// function likeCount() {    
    
//     const newLikeList = document.getElementsByClassName('likes')[0];
//     const newLike = document.createElement('li');

//     newLike.innerText = `${counter.innerHTML} has ${likes++}`;
//     newLikeList.appendChild(newLike);
// }
const likes = [];
const newLikeList = document.getElementsByClassName('likes')[0];
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
            newLike.textContent = `${i} has ${likes[i]} like(s)`
            likesElement.appendChild(newLike)
        }
    }
}

function pauseBtn() {
    console.log('it work');
}
