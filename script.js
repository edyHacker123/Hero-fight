import { heroPunchAnimation } from "./animations.js";
import { heroMovement, healthBarMove } from "./movement.js";
import { heroTouch } from "./mechanics.js";
import dataGame from "./dataGame.js";
const {
  hero1,
  backgroundSound,
  switchSoundButton,
  hero2,
  healthBarHero1,
  healthBarHero2,
  progressBarHero1,
  progressBarHero2,
  countdown,
  startGameLayout,
  startBtn,
  hero1Touch,
  hero2Touch,
} = dataGame;

// const backgroundSound = document.querySelector(".my-audio");
// const switchSoundButton = document.querySelector(".switch-sound");
// const hero1 = document.querySelector(".hero1");
// const hero2 = document.querySelector(".hero2");
// const healthBarHero1 = document.querySelector(".health-bar-hero1");
// const healthBarHero2 = document.querySelector(".health-bar-hero2");
// const progressBarHero1 = document.querySelector(".progress-bar-hero1");
// const progressBarHero2 = document.querySelector(".progress-bar-hero2");
// const countdown = document.querySelector(".countdown");
// const startGameLayout = document.querySelector(".start-game-layout");
// const startBtn = document.querySelector(".start-btn");

hero1.style.left = "50px";
hero2.style.left = "650px";
healthBarHero1.style.left = "100px";
healthBarHero1.style.bottom = "270px";
healthBarHero2.style.left = "700px";
healthBarHero2.style.bottom = "270px";
progressBarHero1.style.width = "116px";
progressBarHero2.style.width = "116px";
countdown.style.transform = "translate(-50%,-50%)";
// let hero1Touch = false;
// let hero2Touch = false;
let countdownNumber = 3;
let gameOn = false;

const hero1Move = [
  "./images/hero1/move_1.png",
  "./images/hero1/move_2.png",
  "./images/hero1/move_3.png",
  "./images/hero1/frame_1.png",
];
const hero2Move = [
  "./images/hero2/move_1.png",
  "./images/hero2/move_2.png",
  "./images/hero2/move_3.png",
  "./images/hero2/frame_1.png",
];
const hero1Punch = [
  "./images/hero1/punch1.png",
  "./images/hero1/punch2.png",
  "./images/hero1/punch3.png",
  "./images/hero1/frame_1.png",
];
const hero2Punch = [
  "./images/hero2/punch1.png",
  "./images/hero2/punch2.png",
  "./images/hero2/punch3.png",
  "./images/hero2/frame_1.png",
];
const hero2Kill = [
  "./images/hero2/kill1.png",
  "./images/hero2/kill2.png",
  "./images/hero2/kill3.png",
];

const hero1Kill = [
  "./images/hero1/kill1.png",
  "./images/hero1/kill2.png",
  "./images/hero1/kill3.png",
];

const hero1Kick = [
  "./images/hero1/kick1.png",
  "./images/hero1/kick2.png",
  "./images/hero1/kick3.png",
  "./images/hero1/frame_1.png",
];

const hero2Kick = [
  "./images/hero2/kick1.png",
  "./images/hero2/kick2.png",
  "./images/hero2/kick3.png",
  "./images/hero2/Frame_1.png",
];

const hitHero = (progressBarHero, healthBarHero, hero, heroKill) => {
  if (progressBarHero.style.width === "8.4px") {
    progressBarHero.style.width = "0px";
    healthBarHero.style.visibility = "hidden";
    for (let i = 0; i < heroKill.length; i++) {
      setTimeout(() => {
        hero.src = heroKill[i];
      }, 130 * i);
    }
  } else {
    progressBarHero.style.width =
      parseInt(progressBarHero.style.width) - 11.6 + "px";
    hero.style.filter = "sepia(1) hue-rotate(-30deg) saturate(7)";
    setTimeout(() => {
      hero.style.filter = "";
    }, 150);
  }
};

const startGame = () => {
  let size = 2;
  for (let i = 0; i < 200; i++) {
    setTimeout(() => {
      size = size - 0.01;
      countdown.style.transform = "translate(-50%,-50%)" + `scale(${size})`;
    }, 7 * i);
  }
  setTimeout(() => {
    countdownNumber--;
    countdown.src = `./images/countdown/${countdownNumber}.png`;
    if (countdownNumber === 0) {
      countdown.src = "./images/countdown/fight.png";
      countdown.style.transform = "translate(-50%,-50%) scale(0.4)";
      setTimeout(() => {
        countdown.style.display = "none";
        gameOn = true;
      }, 1000);
    } else {
      startGame();
    }
  }, 1400);
};

window.addEventListener("keydown", (event) => {
  if (
    event.key === "d" &&
    parseInt(progressBarHero1.style.width) !== 0 &&
    gameOn
  ) {
    if (parseInt(hero1.style.left) <= 680) {
      heroMovement("right", hero1, hero1Move);
      healthBarMove(healthBarHero1, "right", hero1);
      heroTouch("right", "hero1");
    }
  }
  if (
    event.key === "a" &&
    parseInt(progressBarHero1.style.width) !== 0 &&
    gameOn
  ) {
    if (parseInt(hero1.style.left) >= 50) {
      heroMovement("left", hero1, hero1Move);
      healthBarMove(healthBarHero1, "left", hero1);
      heroTouch("left", "hero1");
    }
  }
  if (
    event.key === "ArrowLeft" &&
    parseInt(progressBarHero2.style.width) !== 0 &&
    gameOn
  ) {
    if (parseInt(hero2.style.left) >= 50) {
      heroMovement("left", hero2, hero2Move);
      healthBarMove(healthBarHero2, "left", hero2);
      heroTouch("right", "hero2");
    }
  }
  if (
    event.key === "ArrowRight" &&
    parseInt(progressBarHero2.style.width) !== 0 &&
    gameOn
  ) {
    if (parseInt(hero2.style.left) <= 680) {
      heroMovement("right", hero2, hero2Move);
      healthBarMove(healthBarHero2, "right", hero2);
      heroTouch("left", "hero2");
    }
  }
  if (
    event.key === "c" &&
    parseInt(progressBarHero1.style.width) !== 0 &&
    gameOn
  ) {
    heroPunchAnimation(hero1, hero1Punch);
    if (hero1Touch === true || hero2Touch === true) {
      healthBarHero2.style.zIndex = "2";
      healthBarHero1.style.zIndex = "1";
      hitHero(progressBarHero2, healthBarHero2, hero2, hero2Kill);
    }
  }
  if (
    event.key === "m" &&
    parseInt(progressBarHero2.style.width) !== 0 &&
    gameOn
  ) {
    heroPunchAnimation(hero2, hero2Punch);
    if (hero2Touch === true || hero1Touch === true) {
      healthBarHero2.style.zIndex = "1";
      healthBarHero1.style.zIndex = "2";
      hitHero(progressBarHero1, healthBarHero1, hero1, hero1Kill);
    }
  }
  if (event.key === "x") {
    for (let i = 0; i < hero1Kick.length; i++) {
      setTimeout(() => {
        hero1.src = hero1Kick[i];
      }, i * 80);
    }
  }
  if (event.key === "n") {
    for (let i = 0; i < hero2Kick.length; i++) {
      setTimeout(() => {
        hero2.src = hero2Kick[i];
      }, i * 80);
    }
  }
});

switchSoundButton.addEventListener("click", () => {
  backgroundSound.volume = 0.2;
  if (switchSoundButton.innerHTML === "🔈") {
    switchSoundButton.innerHTML = "🔊";
    backgroundSound.play();
  } else {
    switchSoundButton.innerHTML = "🔈";
    backgroundSound.pause();
  }
});

startBtn.addEventListener("click", () => {
  startGameLayout.style.display = "none";
  startGame();
});
