let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let openBracket = true;

inputBox.value = string;

buttons.forEach(element => {
  element.addEventListener('click', (b) => {
    let value = b.target.innerText;
    const operators = ['+', '-', '*', '/', '%'];

    if (value == '=') {
      try {
        string = String(eval(string));
        inputBox.value = string;
      } catch {
        inputBox.value = "Error";
        string = '';
      }
    } else if (value == 'AC') {
      string = '';
      inputBox.value = string;
    } else if (value == 'DEL') {
      string = string.slice(0, -1);
      inputBox.value = string;
    } else if (value == '()') {
      string += openBracket ? '(' : ')';
      openBracket = !openBracket;
      inputBox.value = string;
    } else {
      const lastChar = string[string.length - 1];
      if (operators.includes(value) && (string === '' || operators.includes(lastChar))) {
        return;
      }
      string += value;
      inputBox.value = string;
    }
  });
});
