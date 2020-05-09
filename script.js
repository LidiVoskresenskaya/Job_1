"use strict";

let money, time;

function start() {
    money = +prompt("Ваш Ваш бюджет на месяц?", "рубли");
    time = prompt("Введите дату в формате YYYY - MM - DD", "2020 - 04 - 20");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш Ваш бюджет на месяц?", "рубли");
    }
}
start();

let app = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
                b = +prompt("Во сколько обойдется?", '');
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('done');
                app.expenses[a] = b;
            } else if (confirm('У вас больше нет расходов в этом месяце?')) {
                console.log('ОК');
            } else {
                i--;
                console.log('i--');
            }
        }
    },
    chooseOptExpenses: function () { // Функция для определения необязательных расходов
        for (let i = 1; i <= 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
                console.log('done');
                app.optionalExpenses[i] = a;
            } else if (confirm('У вас больше нет необязательных расходов?')) {
                console.log('ОК');
            } else {
                i--;
                console.log('i--');
            }
        }
    },
    detectDayBudget: function () { // Расчет дневного бюджета
        app.moneyPerDay = (app.budget / 30).toFixed(1); //округление до 1 знака после запятой 
        alert('Бюджет на 1 день составляет ' + app.moneyPerDay + ' рублей.');
    },
    detectLevel: function () { // Расчет уровня достатка
        if (app.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка.');
        } else if (app.moneyPerDay > 100 && app.moneyPerDay < 2000) {
            console.log('Средний уровень достатка.');
        } else if (app.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка.');
        } else {
            console.log('Произошла ошибка.');
        }
    },
    checkSavings: function () {
        if (app.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
            app.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + app.monthIncome);
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", "");
        if ((typeof (items)) != 'string' || (typeof (items)) == null || items == '') {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            app.income = items.split(', '); // Перевод строки в массив
            app.income.push(prompt('Может что-то еще?')); // Добавление элементов в конец массива            }
            app.income.sort(); // Сортировка по алфавиту
        }

        app.income.forEach(function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + '. ' + itemmassive);
        });
    }
};

for (let key in app) {
    console.log("Наша программа включает в себя данные: " + key + " - " + app[key]);
}



//Используем цинл While

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
//         b = +prompt("Во сколько обойдется?", '');
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         app.expenses[a] = b;
//     } else if (confirm('У вас больше нет расходов в этом месяце?')) {
//         console.log('ОК');
//     } else {
//         i--;
//         console.log('i--');
//     }
//     i++;
// }

// Используем цинкл DO ... Whili

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
//         b = +prompt("Во сколько обойдется?", '');
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         app.expenses[a] = b;
//     } else if (confirm('У вас больше нет расходов в этом месяце?')) {
//         console.log('ОК');
//     } else {
//         i--;
//         console.log('i--');
//     }
//     i++;
// }
// while (i < 2);