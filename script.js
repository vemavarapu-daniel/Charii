"use strict";

let high_score = -1;
let user_score = 0;
const s = () => {
  return Math.trunc(Math.random() * 20 + 1);
};

let random_gen = s();
console.log(random_gen);

//---------Again button-----

//test 1
//test-2

let y = function reset() {
  document.querySelector("body").style.backgroundColor = "#222";
  random_gen = s();
  console.log(random_gen);
  document.querySelector(".number").textContent = "?";

  document.querySelector(".message").textContent = "aadu brooo";
};

//----- x function------

let x = function random() {
  var guess = document.querySelector(".guess").value;
  guess = Number(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "bruhhhhhhh Input cheyu ";
  } else {
    if (guess === random_gen) {
      document.querySelector(".message").textContent =
        "nice raa Chari.. Mali adthava? AGAIN button noku";
      user_score += 2;
      document.querySelector(".number").textContent = random_gen;
      document.querySelector(".score").textContent = user_score;
      document.querySelector("body").style.backgroundColor = "Green";
    } else {
      if (guess > random_gen) {
        document.querySelector(".message").textContent =
          "konchem chinna number ra chari. Lower number";
        user_score -= 1;
        document.querySelector(".score").textContent = user_score;
        document.querySelector("body").style.backgroundColor = "Red";
      } else {
        document.querySelector(".message").textContent =
          "Konchem pedha numbver ra chari. Higher number";
        user_score -= 1;
        document.querySelector(".score").textContent = user_score;
        document.querySelector("body").style.backgroundColor = "Red";
      }
    }
    if (high_score < user_score) {
      high_score = user_score;
      document.querySelector(".highscore").textContent = high_score;
    }
  }
};

document.querySelector(".message").textContent;

document.querySelector(".message").textContent = "aadu brooo";

let a = console.log(document.querySelector(".score").textContent);

console.log(document.querySelector(".number").textContent);

document.querySelector(".check").addEventListener("click", x);
document.querySelector(".again").addEventListener("click", y);
