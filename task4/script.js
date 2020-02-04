let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
 start(); 
let appData = { // создаем объект (далее поля объекта)
    budget: money, // бюджет 
    timeData: time, // данные времени
    expenses: {}, // объект с обязательными расходами
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], // массив данных с доп. доходом
    savings: true,
    chooseExpenses: function() {
      for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдется?");
     
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length <= 50) {
            console.log("Data is correct");
            appData.expenses[a] = b;
        } else {
            alert("Вы ввели некорректные данные");
            i--;
        }
    }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay); 
    },
    detectLevel: function() {
      if (appData.moneyPerDay < 100) {
        console.log("Миниальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
    },
    checksavings: function() {
      if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save/100/12+percent).toFixed(); 
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
    },
    chooseOptExpenses: function() {
      for (let i = 1; i <= 3; i++) {
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
    }
    },
    chooseIncome: function() {
      
      while(true) {
            let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', "");   
            if (items == null || items == '' || !isNaN(items)) {
                    continue;
            }else {
                appData.income = items.split(', ');
            }
      while(true) {
      let add = prompt('Может быть что-то ещё? (перечислите через запятую)');
      if (add == null || add == '' || !isNaN(add)) {
        continue;
      }else {
          
          appData.income = appData.income.concat((add.split(', ')));
          //appData.income.push(add);
          break;
      }
      
    }
    //appData.income.sort();
      break;
    }
    
appData.income.forEach(function(item, i , mass) {
    alert("Способы доп заработка: " + (i+1) + ") " + item);
});

    }
};

for (let key in appData) {
    console.log(key + ': ' + appData[key]);
    }
// 3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)


