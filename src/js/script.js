'use strict';

let money = 'Ваш бюджет на месяц?',
    time = 'Введите дату в формате YYYY-MM-DD';

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let category = prompt('Введите обязательную статью расходов в этом месяце');
let price = prompt('Во сколько обойдется?');

appData.expenses[category] = price;

console.log(appData);

money = appData.expenses[category]/30;

console.log(money);
alert('Бюджет на день: ' + money + '฿');

