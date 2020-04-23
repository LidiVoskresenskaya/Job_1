"use strict";


let money = +prompt("Ваш Ваш бюджет на месяц?", "рубли"),
    time = prompt("Введите дату в формате YYYY - MM - DD", "2020 - 04 - 20");

let app = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};


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
};

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




app.moneyPerDay = app.budget / 30;
alert('Ежедневный бюджет: ' + app.moneyPerDay);

if (app.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка.');
} else if (app.moneyPerDay > 100 && app.moneyPerDay < 2000) {
    console.log('Средний уровень достатка.');
} else if (app.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка.');
} else {
    console.log('Произошла ошибка.');
}

console.log(app.expenses);