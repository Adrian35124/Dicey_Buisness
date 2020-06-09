document.addEventListener("DOMContentLoaded", function () {
document.getElementById("#genDie")
document.getElementById("#rerollBtn")
document.getElementById("#sum")
sum.addEventListener("click", () => {
    let sum = 0;
    diceArr.forEach(x => sum += x.value)
    alert(sum)
    
} 
)})
rerollBtn.addEventListener("click", () => diceArr.forEach(x => x.rollDice()));
let diceArr = [];

genDie.addEventListener("click", () => new Die());
    class Die {
    constructor(value) {
      this.value = value;
      this.diceDiv = document.createElement("div");
      this.diceDiv.className = "dice";
      document.body.appendChild(this.diceDiv);
      this.diceDiv.addEventListener("click", () => this.rollDice());
      diceArr.push(this)
      this.rollDice()
    }
    rollDice() {
      this.value = Math.floor(Math.random() * 6 + 1);
      this.diceDiv.innerText = this.value;
    }
  }

