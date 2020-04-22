"use strict";


let money = +prompt("Ваш Ваш бюджет на месяц?", "рубли");
let time = prompt("Введите дату в формате YYYY - MM - DD", "2020 - 04 - 20");

let app = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
app.expenses[prompt("Введите обязательную статью расходов в этом месяце:")] = +prompt("Во сколько обойдется?");

alert(app.budget/30);
//alert(app.timeData);

console.log(app.expenses);

// confirm();