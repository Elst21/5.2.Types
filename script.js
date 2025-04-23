function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a-b;
}
function divide(a, b) {
    if (b === 0) {
        return "Ошибка: Деление на ноль невозможно.";
     }
     return a / b;
}
function multiply(a, b) {
    return a * b;
}

function performCalculation() {
    // Получаем значения из полей ввода
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');

    let result;

    // Проверяем, что введены корректные числа
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = "Ошибка: введите корректные числа!";
        return;
    }

    // Выполнение операции в зависимости от выбранного значения
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                resultElement.textContent = "Ошибка: деление на ноль!";
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultElement.textContent = "Ошибка: неизвестная операция!";
            return;
    }

    // Отображаем результат на странице
    resultElement.textContent = `Результат: ${result}`;
}