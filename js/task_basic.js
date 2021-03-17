// ВНИМАНИЕ! Соблюдайте форматирование кода (отступы, переносы)

// Объявить три переменных с произвольным именем.

var makeNoise;
var power;
var papers;

// Объявить еще 6 переменных и присвоить им значения произвольных типов данных.

var name = 'Sasha';
var age = 23;
var is_a_girl = true;
var is_a_boy = false;
var haveCredit = null;
var previous_conviction = undefined;

// Создать массив из элементов, значения которых представлены всеми возможными типами данных в JavaScript.

var names = ['Sasha', 'Masha', 'Igor', 'Pasha', 'Lolita'];
var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var top_pop_singer = [
    {
        singer: 'Ariana Grande',
        avard: true
    },
    {
        singer: 'Travis Skott',
        avard: false
    },
    {
        singer: 'The Weeknd',
        avard: true
    },
    {
        singer: 'Saweetie',
        avard: true
    },
    {
        singer: 'Megan Three Station',
        avard: true
    }
];

// Создать объект из четырех свойств. Два свойства должны иметь значения простых типов данных. Два остальных свойства должны иметь значения составного (объектного) типа данных.

var object = {
    bottles: undefined,
    nonAlcogol: 'alcogol',
    a: {
        names: 'Pino-Grigio, Prosecco'
    },
    b: {
        sum: 1+1
    }
};

// Создать 5 объектов представляющих объекты реального мира. В каждом объекте должно быть не меньше 4 свойств.

var entrance = {
    login: "admin",
    password: "pass"
};

var registration = {
    city: "Ukraine",
    country: "Kyiv",
    eMail: "shulga.sasha12@gmail.com",
    number: '0954907879',
    male: "woman",
    age: 23,
    name: "Alexandra",
    surname: "Shulga",
    agreementWithTheRules: true
};

var gym_information = {
    abonForOneMounth: true,
    abonForOneYear: true,
    abonForHalfYear: false,
    timeAllDay: true,
    timeHAlfDay: false,
    ageCategoryUntil: 50,
    trainerForGym: true,
    trainerForStretching: true,
    trainerForYogga: false,
    shower: true,
    towels: true,
    males: 'women/man',
    openning: '8:00',
    closing: '23:00'
};

var sneakers = {
    model: 'Adidas Streetball',
    size: 38,
    code: 'FV5147',
    adress: 'ТРЦ ART MALL 2-й поверх, вул. Академіка Заболотного, 37, Київ',
    index: '02000',
    tefone: '095 185 4526',
    availability: true,
};

// Создать 5 массивов представляющих массивы некоторых значений из реальной жизни. В каждом массиве должно быть не меньше 4 элементов.

var cats = ['exotic', 'persian', 'semi-longhair', 'shorthair', 'somali', 'oriental'];

var tobaco = [
    {
        name: 'Asti',
        count: 18.5
    },
    {
        name: 'Balli',
        count: 11
    },
    {
        name: 'Arawak',
        count: 2.3
    },
    {
        name: 'Bonga',
        count: 5
    },
    {
        name: 'Daily Hookah',
        count: 8
    },
    {
        name: 'Gixom',
        count: 16
    },
    {
        name: 'Honey Badger',
        count: 2.6
    }
];

var colors = ['red', 'yellow', 'brown', 'orange', 'green'];

var cars = ['Acura', 'Bentley', 'Shkoda', 'Audi', 'Renault'];

var top_pop_singer = [
    {
        singer: 'Ariana Grande',
        avard: true
    },
    {
        singer: 'Travis Skott',
        avard: false
    },
    {
        singer: 'The Weeknd',
        avard: true
    },
    {
        singer: 'Saweetie',
        avard: true
    },
    {
        singer: 'Megan Three Station',
        avard: true
    }
];

// Создать массив из трех элементов и написать выражение возвращающее значение второго элемента.

var phones = ['Meizu', 'Samsung', 'Iphone'];
phones[1];

// Создать объект из трех свойств и написать выражение возвращающее значение третьего свойства указанного при определении объекта.

var computer = {
    model: 'F25TH35',
    price: 12345,
    memory: 465
};
computer.memory;

// Создать массив чисел (не менее 5 чисел) и вычислить сумму этих чисел возведенных в квадрат используя цикл while.

var list = [2, 3, 4, 2, 3];
var count = 0;
var sum = 0;
while (count < 5) {
    sum = sum + list[count] * list[count];
    count++;
}

// Создать функцию с двумя входными параметрами (числового типа данных) которая возвращает наибольшее из них.

var max = function(a, b) {
    if ( a > b ) {
        return a;
    } else {
        return b;
    }
};
max(3, 2);

// Создать функцию с двумя входными параметрами (числового типа данных) которая возвращает их сумму. Вызвать ее с произвольными аргументами (числового типа данных).

var sum = function(a, b) {
    return a + b;
};
sum(10, 4);

// Создать такие структуры данных чтобы выражение
// dro[1]().bro вернуло в качестве результата значение true,
// выражение a[4][1][1].y вернуло строку 'Север',
// выражение b.y().y.z()[3].autor вернуло строку 'Дима'.

var a = [1, 4, 7, 4 , [1, [3, {y: 'Cевер'}]]];

var dro = [0, function () {
    return {bro: true};
}];

var b = {
    y: function() {
        return {
            y: {
                z: function() {
                    return [0, 1, 2, {autor: 'Дима'}, 4];
                }
            }
        };
    }
};

// Создать объект со свойствами: x, getX, changeX. Где значение свойства "x" это число, а getX и changeX это методы которые манипулируют значением этого свойства "x". getX возвращает значение свойства "x", а changeX принимает в качестве аргумента число и результатом работы этого метода является присваивание этого числа свойству "x" объекта.