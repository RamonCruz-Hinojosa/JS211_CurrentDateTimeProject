// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.

const numToString = () => {
  console.log(String(document.getElementById("numtostr").value));
  document.getElementById("numberstr").innerHTML =
    "Number changed to string! More info in the console.";
  console.log(
    "This data type is " + typeof document.getElementById("numtostr").value
  );
};

// console.log(numToString(3));

// Write a JavaScript program to convert a string to the number.

const stringToNum = () => {
  console.log(Number(document.getElementById("strtonum").value));
  document.getElementById("stringnum").innerHTML =
    "string changed into a number!";
  console.log(
    "this data type is " +
      typeof Number(document.getElementById("strtonum").value)
  );
};

// console.log(stringToNum("4"));

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

// i dont know how to make an input field that can take all data types

const checkType = () => {
  console.log(typeof document.getElementById("checkdata").value);
};

// console.log(checkType(4));

// Write a JavaScript program that adds 2 numbers together.
let answerAddTwo = document.getElementById("answeraddtwo");

const addTwo = () => {
  let one = Number(firstnum.value) || 0;
  let two = Number(secondnum.value) || 0;
  let sum = one + two;
  answeraddtwo.innerHTML = "The sum of those numbers is " + sum;
};

// console.log(addTwo(3, 6));

// Write a JavaScript program that runs only when 2 things are true.

const bothTrue = () => {
  if (Number(truefirst.value) === 1 && Number(truesecond.value) === 2) {
    document.getElementById("arebothtrue").innerHTML = "Both are true!";
  } else {
    document.getElementById("arebothtrue").innerHTML =
      "One or both are not true!";
  }
};

// console.log(bothTrue(4, 6));

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = () => {
  if (Number(onetruefirst.value) === 1 || Number(onetruesecond.value) === 2) {
    document.getElementById("isonetrue").innerHTML = "One or both are true!";
  } else {
    document.getElementById("isonetrue").innerHTML = "Both are not true!";
  }
};

// console.log(oneTrue(3, 4));
// Write a JavaScript program that runs when both things are not true.

const bothNotTrue = () => {
  if (Number(nottrueone.value) != 1 && Number(nottruetwo.value) != 2) {
    document.getElementById("bothnottrue").innerHTML = "Both are not true!";
  } else {
    document.getElementById("bothnottrue").innerHTML = "One or both are true!";
  }
};

// console.log(bothNotTrue(45, 0));

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
