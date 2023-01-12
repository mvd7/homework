let array = [2, 29, 39, 33, 5, 14];
let sum = 0;

let arrayHTML = document.querySelector(`.array-elements`);
let sumHTML = document.querySelector(`.sum-numbers`);

for (let i = 0; i < array.length; i++) {
  sum += array[i];
  arrayHTML.innerText = `${array}`;
  sumHTML.innerText = `sum of the array is: ${sum}`;
}
