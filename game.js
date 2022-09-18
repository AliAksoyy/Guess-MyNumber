const randomNumber = Math.trunc(Math.random() *100 +1 )
console.log(randomNumber)

document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value)
  const msg = document.querySelector(".msg")
  if(!guessInput) {
    msg.textContent = "pleasa a number"
  }else if (randomNumber === guessInput) {
    msg.innerText = "Congrats you win"
    document.querySelector("body").style.background = "green"
  }
})