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
let ex1 = prompt("Введите обязательную статью расходов в этом месяце:"),
    ex2 = +prompt("Во сколько обойдется?"),
    ex3 = prompt("Введите обязательную статью расходов в этом месяце:"),
    ex4 = +prompt("Во сколько обойдется?");

app.expenses[ex1] = ex2;
app.expenses[ex3] = ex4;

alert(app.budget / 30);
//alert(app.timeData);

console.log(app.expenses);

// confirm();