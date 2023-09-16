function generatePattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        row += j;
      } else {
        row += "*";
      }
    }
    for (let k = i + 1; k <= n; k++) {
      row += k;
    }
    console.log(row);
  }
}

generatePattern(5);
