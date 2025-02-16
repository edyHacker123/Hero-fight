const hero1 = document.querySelector(".hero1");
const hero2 = document.querySelector(".hero2");

const heroTouch = (direction, heroTouch) => {
  const touch = parseInt(hero2.style.left) - parseInt(hero1.style.left);

  if (touch <= 110 && touch > -30 && direction === "right") {
    if (heroTouch === "hero1") {
      return true;
    }
    if (heroTouch === "hero2") {
      return true;
    }
  } else if (direction === "right") {
    if (heroTouch === "hero1") {
      return false;
    }
    if (heroTouch === "hero2") {
      return false;
    }

  }

  if (touch < 40 && touch >= -100 && direction === "left") {
    if (heroTouch === "hero1") {
      return true;
    }
    if (heroTouch === "hero2") {
      return true;
    }
  } else if (direction === "left") {
    if (heroTouch === "hero1") {
      return false;
    }
    if (heroTouch === "hero2") {
      return false;
    }
  }
};

export { heroTouch };
