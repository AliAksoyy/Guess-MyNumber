const randomNumber = Math.trunc(Math.random() *100 +1 )
console.log(randomNumber)

let score = 10
let topScore = 0

document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value)
  const msg = document.querySelector(".msg")
  if(!guessInput) {
    msg.textContent = "pleasa a number"
  }else if (randomNumber === guessInput) {
    msg.innerText = "Congrats you win"
    // document.querySelector("body").style.background = "green"
      document.querySelector("body").classList.add("bg-success")
      document.querySelector(".secret-number").textContent = randomNumber
      if(score > topScore) {
        topScore = score
        document.querySelector(".top-score").textContent = topScore
      }
  }else {
 score -= 1;
    if(score>0) {
 guessInput > randomNumber
   ? (msg.textContent = "Decrease")
   : (msg.textContent = "Inrease");
 document.querySelector(".score").textContent = score;
    }else {
      msg.textContent = "You lost"
      document.querySelector(".score").disabled =true;
      document.querySelector("body").style.background = "red"
      document.querySelector(".secret-number").textContent =randomNumber
    }
   
  }
})

document.querySelector(".again-btn").addEventListener("click", () => {
  document.querySelector(".msg").textContent = "start"
  document.querySelector(".score").textContent = 10
  document.querySelector(".check-btn").disabled =false
  document.querySelector(".secret-number").textContent = "?"
      document.querySelector("body").style.background = "black";
  
})