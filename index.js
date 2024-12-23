const christmasTrees = (n) => {
  for (let i = 1; i < n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(i * 2 - 1);
    const layer = spaces + stars;
    console.log(layer);
  }
}
christmasTrees(10);
