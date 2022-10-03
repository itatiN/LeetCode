var countOdds = function (low, high) {
    let a = 0;
    for (let i = low; i <= high; i++) {
      if (i % 2 !== 0) {
        a++;
      }
    }
    return a;
  };