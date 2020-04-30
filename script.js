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
};

function chooseExpenses() {
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
}
chooseExpenses();

function chooseOptExpenses() {            // Функция для определения необязательных расходов
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
}

chooseOptExpenses();

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

console.log(app.expenses);

function detectDayBudget() {                         // Расчет дневного бюджета
    app.moneyPerDay = (app.budget / 30).toFixed(1); //округление до 1 знака после запятой 
    alert('Бюджет на 1 день составляет ' + app.moneyPerDay + ' рублей.');
}
detectDayBudget();

function detectLevel() {                            // Расчет уровня достатка
    if (app.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка.');
    } else if (app.moneyPerDay > 100 && app.moneyPerDay < 2000) {
        console.log('Средний уровень достатка.');
    } else if (app.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка.');
    } else {
        console.log('Произошла ошибка.');
    }
}
detectLevel();

function checkSavings() {
    if (app.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');
        app.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + app.monthIncome);
    }
}
checkSavings();

console.log(app);