const score_el = document.getElementById("score");

const first_el = document.getElementById("first_num");
const second_el = document.getElementById("second_num");
const submit_el = document.getElementById("add");
console.log(submit_el);
const input_answer = document.getElementById("answer");

const first_random = Math.floor(Math.random() * 9);
const second_random = Math.floor(Math.random() * 9);
console.log(first_random, typeof first_random);
console.log(second_random, typeof second_random);

first_el.innerText = first_random;
second_el.innerText = second_random;

submit_el.addEventListener("click", () => {
  let mult = first_random * second_random;
  let input_num = Number(input_answer.value);
  console.log(mult);
  console.log(input_num, typeof input_num);
  let scoring = Number(score_el.innerText);
});
