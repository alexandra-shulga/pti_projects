// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы


// Создать функцию isUndefined которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если значение равно undefined иначе возвращает false.
// Пример работы:
// isUndefined(undefined);
// => true
// isUndefined('hello');
// => false

var isUndefined = function (value) {
    return value === undefined;

    // if (value === undefined) {
    //     return true;
    // } else {
    //     return false;
    // }
};
isUndefined(undefined);
isUndefined('hello');

// Создать функцию isNull которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если значение равно null иначе возвращает false.
// Пример работы:
// isNull(null);
// => true

var isNull = function (value) {
    return value === null;

    // if (value === null ) {
    //     return true;
    // } else {
    //     return false;
    // }
};
isNull(null);

// Создать функцию isBoolean которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если принимаемое значение является значением логического типа данных. В противном случае вернет false.
// Пример работы:
// isBoolean(null);
// => false
// isBoolean(false);
// => true

var isBoolean = function (value) {
    return value === false || value === true;

    // if (value === false || value === true) {
    //     return true;
    // } else {
    //     return false;
    // }
};
isBoolean(true);
isBoolean(null);

// Создать функцию size которая принимает в качестве единственного входящего параметра массив и возвращает количество элементов в массиве.
// Пример работы:
// size([7, 2, 3, 5, 5, 3]);
// => 6

var size = function (list) {
    return list.length;
};
size([17, 12, 13, 15, 15, 13, 13, 34]);

// Создать функцию first которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает первое из них.
// Пример работы:
// first([5, 4, 3, 2, 1]);
// => 5

var first = function (list) {
    return list[0];
};
first([6, 41, 32, 32, 1]);

// Создать функцию last которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает последнее из них.
// Пример работы:
// last([5, 4, 3, 2, 1]);
// => 1

var last = function (list) {
    return list[list.length - 1];
};
last([5, 4, 3, 2, 1]);

// Создать функцию getPositiveNumbers которая принимает массив чисел и возвращает массив положительных чисел найденных в исходном массиве.
// Пример работы:
// getPositiveNumbers([10, -5, 100, -2, 10100]);
// => [10, 100, 1000]

var getPositiveNumbers = function (list) {
    var result = [];
    var index = 0;
    while (index < list.length) {
        if (list[index] > 0) {
            result[result.length] = list[index];
        }
        index++;
    }
    return result;
};
getPositiveNumbers([10, -18, 20, -5, 3000, 100, -2, 40, 1000]);

// Создать функцию isEven которая возвращает true если число четное или false в противном случае.
// Пример работы:
// isEven(10);
// => true
// isEven(8);
// => true
// isEven(7);
// => false

var isEven = function (number) {
    return number % 2 === 0;

    // if (number % 2 === 0)
    //     return true;
    // return false;
}
isEven(8);
isEven(7);

// Создать функцию push которая принимает массив и произвольное значение и возвращает копию массива + произвольное значение (которое находится в конце массива)
// Пример работы:
// push([1, 2, 3, 4], 5);
// => [1, 2, 3, 4, 5]

var push = function (list, item) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        result[i] = list[i];
    }
    result[list.length] = item;
    return result;
}
push([1, 2, 3, 4], 5);

// Создать функцию unshift которая принимает массив и произвольное значение и возвращает копию массива + произвольное значение (которое находится в начале массива)
// Пример работы:
// unshift([1, 2, 3, 4], 5);
// => [5, 1, 2, 3, 4]

var unshift = function (list, item) {
    result = [];
    result [0] = item;
    for (var i = 0; i < list.length; i++) {
        result[i+1] = list[i];
    }
    return result;
};
unshift([1, 2, 3, 4], 5);

// Создать функцию pop которая принимает массив и возвращает копию массива без последнего значения.
// Пример работы:
// pop([1, 2, 3, 4]);
// => [1, 2, 3]

var pop = function (list) {
    result = [];
    for (var i = 0; i < list.length -1; i++) {
        result[i] = list[i]
    };
    return result;
}
pop([1, 2, 3, 4]);

// Создать функцию shift которая принимает массив и возвращает копию массива без первого значения.
// Пример работы:
// shift([1, 2, 3, 4]);
// => [2, 3, 4]

var shift = function (list) {
    result = [];
    for(i = 1; i < list.length; i++)  {
        result[i -1] = list[i]
    };
    return result;
}
shift([1, 2, 3, 4]);

// Создать функцию compact которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает копию массива без undefined значений.
// Пример работы:
// compact([10, 1, 4, 2, undefined, 3]);
// => [10, 1, 4, 2, 3]

var compact = function (list) {
    var j = 0;
    result = [];
    for (i = 0; i < list.length; i++) {
        if (list[i] !== undefined) {
            result[j] = list[i];
            j++;
        }
    };
    return result;
}
compact([10, 1, 4, 2, undefined, 3]);

// Создать функцию contains которая принимает два входящих параметра (массив значений простых типов данных и значение простого типа данных).
// Функция вернет true если в массиве содержится определенное значение. Иначе функция вернет false.
// Пример работы:
// contains([1, 2, 3], 3);
// => true

var contains = function (list, item) {
    var index = 0;
    while (index < list.length) {
        if (list[index] === item) {
           return true;
        }
        index++;
    }
    return false;
};
contains([1, 2, 3], 3);

// Создать функцию without которая возвращает копию массива, в которой удалены все значения второго аргумента указанного при вызове функции.
// Пример работы:
// without([3, 6, 7, 'rere'], 6);
// => [3, 7, 'rere']

var without = function (list, item) {
    var result = [];
    var index = 0;
    while (index < list.length) {
        if (list[index] !== item) {
            result[result.length] = list[index];
        }
        index++;
    }
    return result;
};
without([3, 6, 7, 'rere'], 6);

// Создать функцию uniq которая принимает массив элементов и возвращает новый массив на основе входящего, где все значения уникальны.
// Пример работы:
// uniq([1, 2, 1, 4, 1, 3]);
// => [1, 2, 4, 3]

var uniq = function (list) {
    result = [];
    for (i = 0; i < list.length ; i++) {
        var found = false;
        for (j = 0; j < result.length; j++) {
            if (result[j] === list[i]) {
                found = true;
            }
        }
        if (!found) {
            result[result.length] = list[i];
        }
    }
    return result;
};
uniq([1, 2, 1, 4, 1, 3]);

// Создать функцию intersection которая принимает два массива и возвращает массив элементов, встречающихся в каждом из переданных массивов. Значения не должны повторяться.
// Пример работы:
// intersection([1, 2, 3], [101, 2, 1, 2]);
// => [1, 2]

var intersection = function (list1, list2) {
    result = [];
    for (i = 0; i < list1.length ; i++) {
        var found = false;
        for (j = 0; j < list2.length; j++) {
            if (list2[j] === list1[i]) {
                found = true;
            }
        }
        if (found) {
            result[result.length] = list1[i];
        }
    }
    return result;
}
intersection([1, 2, 3], [101, 2, 1, 2]);

// Создать функцию reverse которая принимает массив и возвращает копию входящего массива с элементами в обратном порядке.
// Пример работы:
// reverse([1, 'lol', 5, {}, []]);
// => [[], {}, 5, "lol", 1]

var reverse = function (list) {
    result = [];
    for (i = list.length - 1; i >= 0; i--) {
        result[result.length] = list[i];
    }
    return result;
}
reverse([1, 'lol', 5, {}, []]);

// Создать функцию join которая принимает массив и возвращает строку состоящую из его элементов разделенных запятой (по-умолчанию) или любым другим разделителем указанным во втором аргументе вызываемой функции.
// Пример работы:
// join([1, 'lol', 5, 'dro']);
// => "1,lol,5,dro"
// join([1, 'lol', 5, 'dro'], '+');
// => "1+lol+5+dro"

var join = function (list, delim) {
    if (delim === null || delim === undefined) {
        delim = ',';
    }
    var result = '';
    var index = 0;
    while (index < list.length) {
        result += list[index];
        if (index < list.length -1) {
            result += delim;
        }
        index++;
    }
    return result;
    return list.join(delim)
};
join([1, 'lol', 5, 'dro']);



var join = function (list, delim) {
    if (delim === null || delim === undefined) {
        delim = '+';
    }
    var result = '';
    var index = 0;
    while (index < list.length) {
        result += list[index];
        if (index < list.length -1) {
            result += delim;
        }
        index++;
    }
    return result;
    return list.join(delim)
};
join([1, 'lol', 5, 'dro'], '+');

// Создать функцию indexOf которая вернёт позицию, на которой находится элемент value в массиве array, или -1, если данный элемент не был найден.
// Пример работы:
// indexOf([77, 2, 3], 2);
// => 1

var indexOf = function (list, value) {
    var index = 0;
    while (index < list.length) {
        if (list[index] === value) {
            return index;
        }
        index++;
    }
    return -1;
};
indexOf([77, 2, 3], 2);

// Создать функцию lastIndexOf которая паринимает два параметра (массив, значение) и ищет значение в массиве и возвращет его индекс, но делает это не с начала массива, а с его конца.
// Т.е. возвращает позицию последнего вхождения значения в массиве значений. Иначе возвращает -1.
// Пример работы:
// lastIndexOf([1, 2, 3, 1, 2, 3], 2);
// => 4

var lastIndexOf = function (list, value) {
    var index = list.length -1;
    while (index >= 0) {
        if (list[index] === value) {
            return index;
        }
        index--;
    }
    return -1;
};
lastIndexOf([1, 2, 3, 1, 2, 3], 2);

// Создать функцию concat которая принимает два массива и возвращает новый массив состоящий из значений первого и второго.
// Пример работы:
// concat(['a', 'b', 'c'], ['d', 'e', 'f']);
// => [ "a", "b", "c", "d", "e", "f" ]

var concat = function (list1, list2) {
    result = [];
    for(i = 0; i < list1.length; i++)  {
        result[i] = list1[i]
    };
    for(i = 0; i < list2.length; i++) {
        result[i+list1.length] = list2[i]
    };
    return result;
}
concat(['a', 'b', 'c'], ['d', 'e', 'f']);

// Создать функцию slice которая принимает 3 параметра. Массив и два числа (begin и end). Возвращает копию части исходного массива. Начиная с индекса begin и заканчивая индексом end включительно (или концом массива если параметр end отстутствует).
// Пример работы:
// slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 3);
// => ['camel', 'duck']



// Создать функцию splice которая принимает 4 параметра. Массив, два числа (start и deleteCount) и массив. Возвращает копию части первого массива добавляя элементы второго массива начиная с индекса start. Параметр deleteCount это количество элементов которые необходимо удалить начиная с индекса start.
// Пример работы:
// splice(['Jan', 'March', 'April', 'June'], 1, 0, ['Feb']);
// => ['Jan', 'Feb', 'March', 'April', 'June']
// splice(['Jan', 'Feb', 'March', 'April', 'June'], 4, 1, ['May', 'June', 'July']);
// => ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July']



// Создать функцию getMatrixSum которая принимает матрицу чисел и возвращает сумму всех чисел.
// Пример работы:
// getMatrixSum([[1, 2], [0, 4], [1, 2]]);
// => 10

var getMatrixSum = function (matrix) {
    var sum = 0;
    for (i = 0; i < matrix.length; i++) {
        var list = matrix[i];
        for (j = 0; j < list.length; j++) {
            sum += list[j]
        }
    }
    return sum;
}
getMatrixSum([[1, 2], [0, 4], [1, 2]]);

// Создать функцию getMatrixSumByDiagonal которая принимает квадратную матрицу чисел и возвращает сумму чисел по диагонали (слева направо, сверху вниз).
// Пример работы:
// var matrix = [
//      [1, 2, 3],
//      [3, 0, 4],
//      [0, 1, 2]
// ];
// getMatrixSumByDiagonal(matrix);
// => 3

var getMatrixSumByDiagonal = function (matrix) {
    var sum = 0;
    for (i = 0; i < matrix.length; i++) {
        var list = matrix[i];
        for (j = 0; j < list.length; j++) {
            if (i === j) {
                sum += list[j]
            }
        }
    }
    return sum;
}
getMatrixSumByDiagonal(matrix);

// Создать функцию transposeMatrix которая принимает матрицу и возвращает транспонированную матрицу (Транспонированная матрица — матрица полученная из исходной матрицы заменой строк на столбцы).
// Пример работы:
// var matrix = [
//      [1, 1, 1],
//      [2, 2, 2],
//      [3, 3, 3]
// ];
// transposeMatrix(matrix);
// => [
//      [1, 2, 3],
//      [1, 2, 3],
//      [1, 2, 3]
// ]

var transposeMatrix = function (matrix) {
    var matrix2 = [] // [undefined, undefined, undefined] => [[], [], []]
    for (i = 0; i < matrix.length; i++) {
        var list = matrix[i];
        for (j = 0; j < list.length; j++) {
            if (matrix2[j] == null) {
                matrix2[j] = []
            }
            matrix2[j][i] = matrix[i][j]
        }
    }
    return matrix2;
}
var matrix = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];

// Создать функцию min которая принимает в качестве единственного входящего параметра массив чисел и возвращает наименьшее из них.
// Пример работы:
// min([10, 5, 100, 2, 1000]);
// => 2

var min = function (list) {
    var index = 1;
    var min1 = list[0];
    while (index < list.length) {
        if (list[index] < min1) {
            min1 = list[index];
        }
        index++;
    }
    return min1;
};
min([10, 5, 100, 2, 1000]);

// Создать функцию max которая принимает в качестве единственного входящего параметра массив чисел и возвращает наибольшее из них.
// Пример работы:
// max([10, 5, 100, 2, 1000]);
// => 1000

var max = function (list) {
    var index = 1;
    var max1 = list[0];
    while (index < list.length) {
        if (list[index] > max1) {
            max1 = list[index];
        }
         index++;
    }
    return max1;
};
max([10, 5, 100, 2, 1000]);

// Создать функцию sort которая принимает массив чисел и возвращает новый массив где числа (входящего массива) отсортированны в порядке возрастания.
// Двумя способами: Сортировка пузырьком и Сортировка выбором.
// Пример работы:
// sort([1, 10, 21, 2]);
// => [1, 2, 10, 21]


// Создать функцию charAt которая принимает строку и индекс и возвращает указанный символ из строки.
// Пример работы:
// charAt('March', 0);
// => 'M'

var charAt = function (string, index) {
    return string[index];
}
charAt('March', 0);

// Создать функцию repeat которая принимает строку и число count и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки.
// Пример работы:
// repeat('Work', 6);
// => 'WorkWorkWorkWorkWorkWork'

var repeat = function (str, number) {
    var result = '';
    var index = 0;
    while (index < number) {
        result += str;
        index++;
    }
    return result;
};
repeat('Work', 6);

// Создать функцию trim которая удаляет пробельные символы с начала и c конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'


// Создать функцию replace которая принимает 3 параметра (строку и две подстроки). Возвращает новую строку с заменой первой подстроки на вторую. Только первое найденное вхождение.
// Пример работы:
// replace('The quick brown fox jumped over the lazy dog.', 'dog', 'ferret');
// => 'The quick brown fox jumped over the lazy ferret.'


// Создать функцию split которая разбивает строку на массив строк путём разделения строки указанной подстрокой.
// Пример работы:
// split('2018-12-01', '-');
// => ["2018", "12", "01"]
// split('Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec', ',');
// => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


// Создать функцию sum которая принимает массив чисел и возвращает их сумму.
// Пример работы:
// sum([2, 2, 3]);
// => 7

var sum = function (list) {
    var count = 0;
    var sum1 = 0;
    while (count < list.length) {
        sum1 += list[count];
        count = count +1;
    }
    return sum1;
};
sum([2, 2, 3]);

// Создать функцию sumOfAllArguments которая принимает произвольное количество чисел и возвращает их сумму.
// Пример работы:
// sumOfAllArguments(2, 2, 3);
// => 7
// sumOfAllArguments(2, 2, 3, 3, 10);
// => 20



// Создать функцию sum как наследуемый метод массива который возвращает сумму своих числовых элементов.
// Пример работы:
// [2, 2, 3].sum();
// => 7
// [2, 2, 3, 3, 10].sum();
// => 20



// Создать функцию multiply которая принимает массив чисел и возвращает их произведение.
// Пример работы:
// multiply([2, 2, 3]);
// => 12

var multiply = function (list) {
    var index = 0;
    var mul = 1;
    while (index < list.length) {
        mul *= list[index];
        index ++;
    }
    return mul;
};
ultiply([2, 2, 3]);

// Создать функцию abs которая принимает число и возвращает его абсолютное значение.
// Пример работы:
// abs(-4);
// => 4

var abs = function (number) {
    if (number >= 0) return number;
    return -number;
};
abs(-4)

// Создать функцию pow которая принимает два числа и возводит первое число в степень (представленную вторым числом).
// Пример работы:
// pow(2, 2);
// => 4
// pow(3, 3);
// => 27

var pow = function (number, power) {

}
pow(2, 2);
pow(3, 3);

// Создать функцию round которая возвращает число, округлённое к ближайшему целому.
// Пример работы:
// round(6.2);
// => 6
// round(6.8);
// => 7
// round(6.5);
// => 7


// Создать функцию random с двумя (или одним) входными параметрами (min, max). Возвращает случайное целое число (можно использовать Math.random и Math.round), в диапазоне от min до max, включительно. Если вы передали только один агрумент, будет использован диапазон от 0 до переданного числа (т.е. до max).
// Пример работы:
// random(0, 100);
// => 42


// Создать функцию keys которая возвращает массив имен всех свойств(ключей) принимаемого объекта.
// Пример работы:
// keys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"]


// Создать функцию values которая возвращает массив значений всех свойств принимаемого объекта.
// Пример работы:
// values({one: 1, two: 2, three: 3});
// => [1, 2, 3]


// Создать функцию pairs которая возвращает список пар [свойство, значение] входящего объекта.
// Пример работы:
// pairs({one: 1, two: 2, three: 3});
// => [["one", 1], ["two", 2], ["three", 3]]


// Создать функцию invert которая возвращает копию входящего объекта где свойства - значения, а значения - свойства.
// Чтобы это заработало, нужно, чтобы все значения свойств объекта могли быть уникально преобразованы в строки.
// Пример работы:
// invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
// => {Moses: "Moe", Louis: "Larry", Jerome: "Curly"}


// Создать функцию omit которая возвращает копию объекта без указанного свойства.
// Пример работы:
// omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
// => {name: 'moe', age: 50}



// Создать функцию has которая проверяет, содержит ли объект указанный ключ (свойство). Если да, то возвращает true иначе false.
// Пример работы:
// has({a: 1, b: 2, c: 3}, 'b');
// => true



// Создать функцию isMatch которая проверяет, содержатся ли ключи-значения в объекте. Если да, то возвращает true иначе false.
// Пример работы:
// isMatch({name: 'moe', age: 32}, {age: 32});
// => true



// Создать функцию isEmpty которая вернёт true если коллекция (объект или массив) не содержит ни одного значения, в противном случае вернет false.
// Пример работы:
// isEmpty([]);
// => true
// isEmpty([1, 2, 3]);
// => false
// isEmpty({});
// => true
// isEmpty({x: 4});
// => false



// Создать функцию extend с двумя входными параметрами (объект destination и объект source). Скопирует все свойства из объекта source в объект destination. Если объект source имеет одноименные свойства с объектом destination, то значения destination будут затёрты значениями из source.
// Пример работы:
// extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}



// Создать функцию defaults с двумя входными параметрами (объект object и объект default). Функция defaults проинициализирует неопределённые (undefined) свойства объета значениями одноимённых свойств из default. Если же какие-то свойства объекта уже определены, то они не будут изменены.
// Пример работы:
// defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"});
// => {flavor: "chocolate", sprinkles: "lots"}



// Создать функцию each с двумя входными параметрами (массив и функция iteratee). Функция each проходит по всему списку элементов, вызывая для каждого из них функцию iteratee.
// При каждом вызове в iteratee будут переданы два аргумента: (element, index).
// Пример работы:
// each([1, 2, 3], function(element, index) { console.log(element, index); });
// => выведет в консоль все цифры и соответствующие им индексы по очереди



// Создать функцию map с двумя входными параметрами (массив и функция iteratee). Функция map возвращает новый массив, полученный преобразованием каждого элемента массива в функции iteratee.
// Функция iteratee получает два аргумента: значение value, индекс index.
// Пример работы:
// map([1, 2, 3], function(value) { return value * 3; });
// => [3, 6, 9]



// Создать функцию findIndex с двумя входными параметрами (массив и функция predicate). Функция findIndex так же как и indexOf, возвращает первый индекс того значения, для которого функция predicate вернёт true. Если такой элемент не был найден, вернёт -1.
// Пример работы:
// findIndex([4, 6, 8, 12], function(value) { return value === 8; });
// => 2



// Создать функцию find с двумя входными параметрами (массив list и функция predicate). Функция find вызывает для каждого элемента list функцию сравнения predicate, возвращая первый элемент, для которого predicate вернула true, или undefined, если ни один элемент не подошёл.
// Пример работы:
// find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// => 2


// Создать функцию filter с двумя входными параметрами (массив list и функция predicate) которая проходит через каждое значение list, возвращая массив всех значений, для которых predicate вернул true.
// Пример работы:
// filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// => [2, 4, 6]


// Создать функцию reject с двумя входными параметрами (массив list и функция predicate) которая возвращает массив, содержащий все значения list, за исключением элементов, для которых функция predicate вернула значение true. Т.е. reject является «антонимом» filter.
// Пример работы:
// reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [1, 3, 5]


// Создать функцию every с двумя входными параметрами (массив list и функция predicate). Вернёт true, если для каждого значения из list predicate вернёт true.
// Пример работы:
// every([2, 4, 5], function(num) { return num % 2 == 0; });
// => false


// Создать функцию some с двумя входными параметрами (массив list и функция predicate). Вернёт true, если хотя бы для одного значения из list predicate вернёт true.
// Пример работы:
// some([2, 4, 5], function(num) { return num % 2 == 0; });
// => true


// Создать функцию partition с двумя входными параметрами (массив array и функция predicate). Разобъёт массив array на две части: одна - для элементов которой функция predicate вернёт true, и другая - для всех остальных.
// Пример работы:
// partition([0, 1, 2, 3, 4, 5], function(num) { return num % 2 == 0; });
// => [[0, 2, 4], [1, 3, 5]]


// Создать функцию isCVV которая принимает строку. Возвращает true если строка состоит из 3 или 4 цифр. В реализации функции использовать регулярные выражения.
// Пример работы:
// isCVV('670');
// => true
// isCVV('0965');
// => true
// isCVV('69');
// => false


// Создать функцию isOnlyLettersOrNumbers которая принимает строку. Возвращает true если строка состоит только из букв английского алфавита или только из цифр. В реализации функции использовать регулярные выражения.
// Пример работы:
// isOnlyLettersOrNumbers('670');
// => true
// isOnlyLettersOrNumbers('tree');
// => true
// isOnlyLettersOrNumbers('b2b');
// => false


// Создать функцию isLettersAndNumbers которая принимает строку. Возвращает true если строка состоит из смеси букв английского алфавита и цифр. В реализации функции использовать регулярные выражения.
// Пример работы:
// isLettersAndNumbers('670');
// => false
// isLettersAndNumbers('tree');
// => false
// isLettersAndNumbers('b2b');
// => true


// Создать функцию isOnlyLettersAndNumbers которая принимает строку. Возвращает true если строка состоит из букв английского алфавита и цифр (наличие каждого типа символов необязательно). В реализации функции использовать регулярные выражения.
// Пример работы:
// isOnlyLettersAndNumbers('670');
// => true
// isOnlyLettersAndNumbers('tree');
// => true
// isOnlyLettersAndNumbers('b2b');
// => true
// isOnlyLettersAndNumbers('2+2=4');
// => false


// Создать функцию-конструктор Circle которая принимает 3 параметра: координаты центра окружности (x, y) и ее радиус (radius). Возвращает объект с собственными тремя свойствами (x, y, radius) и унаследованными тремя методами.
// 1. Метод getDiameter возвращает диаметр откружности. Формула расчета диаметра: diameter = 2 * radius
// 2. Метод getPerimeter возвращает длину откружности. Формула расчета длины окружности: perimeter = Math.PI * diameter
// 3. Метод getSquare возвращает площадь откружности. Формула расчета площади окружности: square = Math.PI * (radius в квадрате)
// Пример работы:
// var circle = new Circle(5, 5, 5);
// circle.getDiameter();
// => 10
// circle.getPerimeter();
// => 31.41592653589793
// circle.getSquare();
// => 78.53981633974483