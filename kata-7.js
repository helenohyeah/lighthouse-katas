const checkAir = function (samples, threshold) {
  let dirtyCount = 0;
  for (sample of samples) {
    if (sample === "dirty") {
      dirtyCount++;
    }
  }
  return (dirtyCount / (samples.length - 1) < threshold) ? "Clean" : "Polluted";
};

// testing
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)); // Polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)); // Polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)) // Clean