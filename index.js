class CalculationError extends Error {
  constructor(message) {
    super(message);
    this.name = "CalculationError";
  }
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  try {
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    
    if (!firstNum || !secondNum) {
      throw new CalculationError("Both numbers must be provided");
    }

    if (isNaN(firstNum) || isNaN(secondNum)) {
      throw new CalculationError("Both inputs must be valid numbers");
    }

    if (operator === '/' && secondNum == 0) {
      throw new Error("Cannot divide by zero");
    }

    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (error) {
    if (error instanceof CalculationError) {
      console.error("Calculation Error:", error.message);
    } else {
      console.error("Unknown Error:", error.message);
    }
    output.innerHTML = error.message;
  } finally {
    console.log("Calculation attempted");
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
let data = {name: "number", number: 2};
let button1 = document.querySelector('#console-dir');
let button2 = document.querySelector('#console-dirxml');

document.getElementById('console-log').addEventListener('click', () => console.log("Console Log Demo"));
document.getElementById('console-error').addEventListener('click', () => console.error("Console Error Demo"));
document.getElementById('console-count').addEventListener('click', () => console.count("Count Button"));
document.getElementById('console-warn').addEventListener('click', () => console.warn("Console Warn Button"));
document.getElementById('console-assert').addEventListener('click', () => console.assert(data.value == 3, { number: data.number, errorMsg: `The number does not equal 3`}));
document.getElementById('console-clear').addEventListener('click', () => console.clear());
document.getElementById('console-dir').addEventListener('click', () => console.dir(button1));
document.getElementById('console-dirxml').addEventListener('click', () => console.dirxml(button2));
document.getElementById('console-group-start').addEventListener('click', () => {
    console.group("console.group");
});
document.getElementById('console-group-end').addEventListener('click', () => console.groupEnd());
document.getElementById('console-table').addEventListener('click', () => console.table([{ name: "Jaewon", age: 21 }, { name: "Cairo", age: 20 }]));
document.getElementById('start-timer').addEventListener('click', () => console.time("Timer Button"));
document.getElementById('end-timer').addEventListener('click', () => console.timeEnd("Timer Button"));
document.getElementById('console-trace').addEventListener('click', () => console.trace());

document.getElementById('trigger-error').addEventListener('click', () => {
  try {
    let noElement = document.querySelector('#random-abcdef').value;
  } catch (error) {
    console.log("Sad");
    console.error("Error triggered:", error.message);
  }
});

window.onerror = function(message, source, lineno, colno, error) {
  console.log("Error happened");
  console.error("Global Error Caught:", message, "at", source, ":", lineno, ":", colno);
  return true;
};