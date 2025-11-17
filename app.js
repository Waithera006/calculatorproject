let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (b) => {
        let value = b.target.innerText;

        if (value === '=') {
            try {
                string = eval(string).toString();
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = "";
            }
        }
        else if (value === 'AC') {
            string = "";
            inputBox.value = string;
        }
        else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        }
        else if (value === '±') {
            if (string) {
                string = (eval(string) * -1).toString();
                inputBox.value = string;
            }
        }
        else {
            string += value;
            inputBox.value = string;
        }
    });
});
