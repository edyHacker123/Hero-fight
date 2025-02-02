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

export { heroMovement, healthBarMove };
