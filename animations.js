const heroPunchAnimation = (hero, listAnimation) => {
  for (let i = 0; i < listAnimation.length; i++) {
    setTimeout(() => {
      hero.src = listAnimation[i];
    }, i * 80);
  }
};

export { heroPunchAnimation };
