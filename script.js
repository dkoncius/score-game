// JS dom selectors
const p1Text = document.querySelectorAll("span")[0]
const p2Text = document.querySelectorAll("span")[1]
const maxScoreText = document.querySelectorAll("span")[2]

const input = document.querySelector("input")
const p1Btn = document.querySelectorAll("button")[0]
const p2Btn = document.querySelectorAll("button")[1]
const resetBtn = document.querySelectorAll("button")[2]

let maxScore = input.value
maxScoreText.innerText = maxScore

let p1Score = 0
let p2Score = 0

let gameOver = false

// JS dom events
input.addEventListener("change", function(){
    maxScore = input.value
    maxScoreText.innerText = maxScore
})

p1Btn.addEventListener("click", function(){
    if(maxScore > p1Score && gameOver == false) {
        p1Score++
        p1Text.innerText = p1Score

        // Animation
        p1Text.classList.add("shrink")
        setTimeout(function(){
         p1Text.classList.remove("shrink")
        }, 100)
    }
   
    if(maxScore == p1Score) {
     p1Text.style.color = "green"
     gameOver = true
    }
})

p2Btn.addEventListener("click", function(){
    if(maxScore > p2Score && gameOver == false) {
        p2Score++
        p2Text.innerText = p2Score

          // Animation
          p2Text.classList.add("shrink")
          setTimeout(function(){
           p2Text.classList.remove("shrink")
          }, 100)
    }
   
    if(maxScore == p2Score) {
     p2Text.style.color = "red"
     gameOver = true
    }
})

resetBtn.addEventListener("click", function(){
    p1Score = 0
    p1Text.innerText = p1Score
    p1Text.style.color = "#0E5E6F"

    p2Score = 0
    p2Text.innerText = p2Score
    p2Text.style.color = "#0E5E6F"

    maxScore = 5
    maxScoreText.innerText = maxScore
    input.value = maxScore

    gameOver = false
})