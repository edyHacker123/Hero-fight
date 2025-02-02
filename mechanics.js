import dataGame from "./dataGame.js";
const { hero1Touch, hero2Touch, hero1, hero2 } = dataGame;

const heroTouch = (direction, heroTouch) => {
  const touch = parseInt(hero2.style.left) - parseInt(hero1.style.left);

  if (touch <= 110 && touch > -30 && direction === "right") {
    if (heroTouch === "hero1") {
      dataGame.hero1Touch = true;
    }
    if (heroTouch === "hero2") {
      dataGame.hero2Touch = true;
    }
  } else if (direction === "right") {
    if (heroTouch === "hero1") {
      dataGame.hero1Touch = false;
    }
    if (heroTouch === "hero2") {
      dataGame.hero2Touch = false;
    }
  }

  if (touch < 40 && touch >= -100 && direction === "left") {
    if (heroTouch === "hero1") {
      dataGame.hero1Touch = true;
    }
    if (heroTouch === "hero2") {
      dataGame.hero2Touch = true;
    }
  } else if (direction === "left") {
    if (heroTouch === "hero1") {
      dataGame.hero1Touch = false;
    }
    if (heroTouch === "hero2") {
      dataGame.hero2Touch = false;
    }
  }
};

export { heroTouch };
