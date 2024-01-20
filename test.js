function calculateTotalPrice(order) {
  let sum = 0;
  for (const value of order) {
    sum += value;
  }
  return sum;
}


console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));