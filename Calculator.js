
const text = document.getElementById('display');

function clearDisplay() {
    text.value = '';
}

function append(input) {
    text.value += input;
}

function deletetext() {
    text.value = text.value.slice(0, -1);
}

function calculate() {
    try {
        text.value = eval(text.value);
    } catch {
        text.value = 'Error';
    }
}