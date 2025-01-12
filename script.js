const backgroundSound = document.querySelector(".my-audio");
const switchSoundButton = document.querySelector(".switch-sound");
const hero1 = document.querySelector(".hero1");
const hero2 = document.querySelector(".hero2");
const healthBarHero1 = document.querySelector(".health-bar-hero1");
const healthBarHero2 = document.querySelector(".health-bar-hero2");
const progressBarHero1 = document.querySelector(".progress-bar-hero1");
const progressBarHero2 = document.querySelector(".progress-bar-hero2");
const countdown = document.querySelector(".countdown");

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

hero1.style.left = "50px";
hero2.style.left = "650px";
healthBarHero1.style.left = "100px";
healthBarHero1.style.bottom = "270px";
healthBarHero2.style.left = "700px";
healthBarHero2.style.bottom = "270px";
progressBarHero1.style.width = "116px";
progressBarHero2.style.width = "116px";
countdown.style.transform = "translate(-50%,-50%)";
let hero1Touch = false;
let hero2Touch = false;
let countdownNumber = 3;

const heroMovement = (direction, hero, frames) => {
  if (direction === "right") {
    hero.style.transform = "scaleX(1)";
  } else {
    hero.style.transform = "scaleX(-1)";
  }
  for (let i = 0; i < frames.length; i++) {
    setTimeout(() => {
      hero.src = frames[i];
    }, i * 90);
  }
  for (let i = 0; i < 7; i++) {
    setTimeout(() => {
      if (direction === "right") {
        hero.style.left = parseInt(hero.style.left) + 10 + "px";
      } else {
        hero.style.left = parseInt(hero.style.left) - 10 + "px";
      }
    }, i * 6);
  }
};

const healthBarMove = (healthBar, direction, hero) => {
  if (direction === "right") {
    healthBar.style.left = parseInt(hero.style.left) + 120 + "px";
  } else {
    healthBar.style.left = parseInt(hero.style.left) - 20 + "px";
  }
};

const heroPunchAnimation = (hero, listAnimation) => {
  for (let i = 0; i < listAnimation.length; i++) {
    setTimeout(() => {
      hero.src = listAnimation[i];
    }, i * 80);
  }
};

const heroTouch = (direction, heroTouch) => {
  const touch = parseInt(hero2.style.left) - parseInt(hero1.style.left);

  if (touch <= 110 && touch > -30 && direction === "right") {
    if (heroTouch === "hero1") {
      hero1Touch = true;
    }
    if (heroTouch === "hero2") {
      hero2Touch = true;
    }
  } else if (direction === "right") {
    if (heroTouch === "hero1") {
      hero1Touch = false;
    }
    if (heroTouch === "hero2") {
      hero2Touch = false;
    }
  }

  if (touch < 40 && touch >= -100 && direction === "left") {
    if (heroTouch === "hero1") {
      hero1Touch = true;
    }
    if (heroTouch === "hero2") {
      hero2Touch = true;
    }
  } else if (direction === "left") {
    if (heroTouch === "hero1") {
      hero1Touch = false;
    }
    if (heroTouch === "hero2") {
      hero2Touch = false;
    }
  }
};

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
    } else {
      startGame();
    }
  }, 1400);
};

window.addEventListener("keydown", (event) => {
  if (event.key === "d" && parseInt(progressBarHero1.style.width) !== 0) {
    if (parseInt(hero1.style.left) <= 680) {
      heroMovement("right", hero1, hero1Move);
      healthBarMove(healthBarHero1, "right", hero1);
      heroTouch("right", "hero1");
    }
  }
  if (event.key === "a" && parseInt(progressBarHero1.style.width) !== 0) {
    if (parseInt(hero1.style.left) >= 50) {
      heroMovement("left", hero1, hero1Move);
      healthBarMove(healthBarHero1, "left", hero1);
      heroTouch("left", "hero1");
    }
  }
  if (
    event.key === "ArrowLeft" &&
    parseInt(progressBarHero2.style.width) !== 0
  ) {
    if (parseInt(hero2.style.left) >= 50) {
      heroMovement("left", hero2, hero2Move);
      healthBarMove(healthBarHero2, "left", hero2);
      heroTouch("right", "hero2");
    }
  }
  if (
    event.key === "ArrowRight" &&
    parseInt(progressBarHero2.style.width) !== 0
  ) {
    if (parseInt(hero2.style.left) <= 680) {
      heroMovement("right", hero2, hero2Move);
      healthBarMove(healthBarHero2, "right", hero2);
      heroTouch("left", "hero2");
    }
  }
  if (event.key === "c" && parseInt(progressBarHero1.style.width) !== 0) {
    heroPunchAnimation(hero1, hero1Punch);
    if (hero1Touch === true || hero2Touch === true) {
      healthBarHero2.style.zIndex = "2";
      healthBarHero1.style.zIndex = "1";
      hitHero(progressBarHero2, healthBarHero2, hero2, hero2Kill);
    }
  }
  if (event.key === "m" && parseInt(progressBarHero2.style.width) !== 0) {
    heroPunchAnimation(hero2, hero2Punch);
    if (hero2Touch === true || hero1Touch === true) {
      healthBarHero2.style.zIndex = "1";
      healthBarHero1.style.zIndex = "2";
      hitHero(progressBarHero1, healthBarHero1, hero1, hero1Kill);
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

startGame();
