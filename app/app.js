const p = 3.14;
const currentYear = 2020;
const rateDollarToEuro = 0.82;

class Widget {
    constructor(func, chekTwoInput = false) {
        func(this.prepare(chekTwoInput))
    }

    prepare(chekTwoInput) {
        let core = document.createElement('DIV');
        let input = document.createElement('INPUT');
        let button = document.createElement('BUTTON');
        button.innerText = "Enter";
        input.setAttribute('placeholder', 'Enter value');
        let result = document.createElement('SPAN');
        result.innerText = 'Тут будет ответ';
        core.appendChild(input);

        if (chekTwoInput) {
            let input2 = document.createElement('INPUT');
            input2.setAttribute('placeholder', 'Enter value');
            core.appendChild(input2);
        }
        core.appendChild(button);
        core.appendChild(result);
        core.classList.add('widget');
        core.setAttribute('id', Date.now().toString());
        document.body.appendChild(core);
        return core;
    }
}

function getResult(index, value = 0, value2 = 0) {
    switch (index) {
        case 0:
            /*1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».*/
            return `Привет, ${value === '' ? 'анонимус': value}`;
        case 1:
            /*2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. 
            Текущий год укажите в коде как константу.*/
            return `Вам - ${ value > currentYear ? 'меньше нуля?!': currentYear - value} лет`;
        case 2:
            /*3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.*/
            return `Периметр квадрата - ${(value > 0) ? value ** 2: 'меньше нуля?!'} у.е.`;
        case 3:
            /*4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.*/
            return `Площадь - ${(value > 0) ? p *(value ** 2): 'менше нуля?!'} у.е.`;
        case 5:
            /*5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет 
            добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.*/
            return `Необходимая скорость ${(value > 0 && value2 > 0) ? value / value2 + ' км в час': 'неизвесна'}`;
        case 6:
            /*6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. 
            Курс валюты храните в константе.*/
            return (!(value === '') && value >= 0) ? `${value}$ это ${value * rateDollarToEuro}€` : 'Невожможно преобразовать';
        case 7:
            /*7. Пользователь указывает объем флешки в Гб. 
            Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.*/
            let number = Math.trunc(value / 0.82);
            return (value < 0) ? 'Невозможно расчитать' : `На флешку размером ${value === '' ? 0: value} Гб помещается ${number} ${(number == 1) ? 'файл': (number < 5 && number > 0) ? 'файла': 'файлов'} размером 820 Мб`;
        case 9:
            /*8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит 
            сколько шоколадок может купить пользователь и сколько сдачи у него останется. */
            let num = value / value2;
            return (value < 0 || value2 <= 0) ? 'Не, ты чёт напутал' : `Имея ${value === '' ? 0: value}у.е. при цене ${value2}у.е. вы можете купить ${Math.trunc(num)} шт и сдача ${value - Math.trunc(num) * value2}`;
        case 10:
            /*9. Запросите у пользователя трехзначное число и выведите его задом наперед. 
            Для решения задачи вам понадобится оператор % (остаток от деления).*/
            return `Перевернутое число - ${Math.trunc(value / 100) % 10 + Math.trunc(value / 10) % 10 * 10 + value % 10 * 100}`;
        case 11:
            /*10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. 
            В задании используйте логические операторы. В задании не надо использовать if или switch.*/

            //не надо использовать if или switch ?????????
            //return `Число ${value % 2 > 0 ? "не ": ""}четное`;
            return `Результат проверки на чётность ${!Boolean(value % 2)}`;
    }
}

let questions = ['Ваше имя', 'Год рождения', 'Длина стороны квадрата', 'Радиус окружности',
    'Расстояние в км', 'Врямя в часах', 'Количество доларов', 'Объем флешки Гб',
    'Сумма денег в кошельке', 'Цена одной шоколадки', 'Трехзначное число', 'Целое число'
];

for (let i = 0; i < 12; i++) {
    let chekTwoInput = i == 4 || i == 8;

    new Widget((content) => {
        let input01 = content.querySelector('input');
        let input02;
        input01.setAttribute('placeholder', questions[i]);
        if (chekTwoInput) {
            input02 = content.querySelectorAll('input')[1];
            input02.setAttribute('placeholder', questions[++i]);
        }

        content.querySelector('button').addEventListener('click', () => {
            content.querySelector('span').innerText = getResult(i, input01.value, chekTwoInput ? input02.value : false);
            input01.value = '';
            if (chekTwoInput) {
                input02.value = ''
            }
        });
    }, chekTwoInput);



}