// Получаем элементы из DOM
const calculateButton = document.getElementById('calculateButton');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const resultParagraph = document.getElementById('result');

// Функция для выполнения вычислений
calculateButton.addEventListener('click', () => {
    // Получаем значения из полей ввода
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;

    // Проверка на NaN (не число)
    if (isNaN(num1) || isNaN(num2)) {
        resultParagraph.textContent = "Введите корректные числа!";
        return;
    }

    let result;

    // Выполнение операции в зависимости от выбранного оператора
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Проверка на деление на ноль
            if (num2 === 0) {
                resultParagraph.textContent = "Ошибка: деление на ноль!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultParagraph.textContent = "Неизвестный оператор!";
            return;
    }

    // Выводим результат на страницу
    resultParagraph.textContent = `Результат: ${result}`;
});