let money,
    time;
 
money = +prompt("Ваш бюджет на месяц?");
console.log(money);

time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(time);

let appData = { // создаем объект (далее поля объекта)
    budget: money, // бюджет 
    timeData: time, // данные времени
    expenses: {}, // объект с обязательными расходами
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], // массив данных с доп. доходом
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");
 
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
        console.log("Data is correct");
        appData.expenses[a] = b;
    } else {
        alert("Вы ввели некорректные данные");
        i--;
    }
}

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");
 
//     if (typeof(a) === 'string' && typeof(a) != 'null' && typeof(b) != 'null' && a != '' && b != '' && a.length < 50) {
//         console.log("Data is correct");
//         appData.expenses[a] = b;
//     } else {
//         alert("Вы ввели некорректные данные");
//         i--;
//     }
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");
 
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length <= 50) {
//         console.log("Data is correct");
//         appData.expenses[a] = b;
//     } else {
//         alert("Вы ввели некорректные данные");
//         i--;
//     }
//     i++;

// } while (i < 2);

appData.moneyPerDay = appData.budget/30; 

if (appData.moneyPerDay < 100) {
    console.log("Миниальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
