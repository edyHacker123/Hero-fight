const backgroundSound = document.querySelector(".my-audio");
const switchSoundButton = document.querySelector(".switch-sound");
const hero1 = document.querySelector(".hero1");
const hero2 = document.querySelector(".hero2");
const healthBarHero1 = document.querySelector(".health-bar-hero1");
const healthBarHero2 = document.querySelector(".health-bar-hero2");

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

hero1.style.left = "50px";
hero2.style.left = "650px";
healthBarHero1.style.left = "100px";
healthBarHero1.style.bottom = "270px";
healthBarHero2.style.left = "700px";
healthBarHero2.style.bottom = "270px";
let hero1Touch = false;
let hero2Touch = false;

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

window.addEventListener("keydown", (event) => {
  if (event.key === "d") {
    if (parseInt(hero1.style.left) <= 680) {
      heroMovement("right", hero1, hero1Move);
      healthBarMove(healthBarHero1, "right", hero1);
      heroTouch("right", "hero1");
    }
  }
  if (event.key === "a") {
    if (parseInt(hero1.style.left) >= 50) {
      heroMovement("left", hero1, hero1Move);
      healthBarMove(healthBarHero1, "left", hero1);
      heroTouch("left", "hero1");
    }
  }
  if (event.key === "ArrowLeft") {
    if (parseInt(hero2.style.left) >= 50) {
      heroMovement("left", hero2, hero2Move);
      healthBarMove(healthBarHero2, "left", hero2);
      heroTouch("right", "hero2");
    }
  }
  if (event.key === "ArrowRight") {
    if (parseInt(hero2.style.left) <= 680) {
      heroMovement("right", hero2, hero2Move);
      healthBarMove(healthBarHero2, "right", hero2);
      heroTouch("left", "hero2");
    }
  }
  if (event.key === "c") {
    heroPunchAnimation(hero1, hero1Punch);
    console.log("hero1Touch", hero1Touch);
    console.log("hero2Touch", hero2Touch);
  }
  if (event.key === "m") {
    heroPunchAnimation(hero2, hero2Punch);
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
