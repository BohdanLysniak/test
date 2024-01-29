function getExtremeScores(scores) {
  return `{ best: ${Math.max(...scores)}, worst: ${Math.min(...scores)} }`
};

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
console.log({ best: 93, worst: 17 });