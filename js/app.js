'use strict';

// Task1. Сделайте функцию-генератор, которая будет возвращать итератор. Первый вызов метода next итератора должен вернуть 1, второй вызов - 2, третий вызов - 3.
function* gener1() {
    yield 1;
    yield 2;
    yield 3;
}

let iter1 = gener1();
console.group('Task 1');
for (const num of iter1) {
    console.log(num);
}
console.groupEnd('Task 1');

// Task 2. Дан массив. С помощью функции-генератора создайте итератор, перебирающий элементы массива по одному.
let arr2 = [3, 'hi', 55, 0, 'true', undefined, 555];

function* gener2(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}
let iter2 = gener2(arr2);

console.group('Task 2');
for (const elem of iter2) {
    console.log(elem);
}
console.groupEnd('Task 2');

//Task 3. Дан массив. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать по два элемента массива (сначала первые два, потом вторые два и так далее). Элементы должны возвращаться в виде массива из двух элементов.
let arr3 = [1,2,3,4,5,6,7,8];

function* gener3(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // Каждый раз возвращаем массив с элементами
        yield [arr[i], arr[i + 1]];
    }
}
let iter3 = gener3(arr3);

console.group('Task 3');
for (const elem of iter3) {
    console.log(elem);
}
console.groupEnd('Task 3');

//Task 4. Дан массив с числами. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать следующий элемент массива, являющийся четным числом.
let arr4 = [2, '~~', 56, 33, 'false', 8, 0, new Date(), 99, 100];
function* gener4(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ( (typeof arr[i] == 'number') && (arr[i] % 2 == 0) ) {
            yield arr[i];
        }
    }
}

let iter4 = gener4(arr4);

console.group('Task 4');
console.log(arr4);
for (const elem of iter4) {
    console.log(elem);
}
console.groupEnd('Task 4');

// Task 5. Дан объект. С помощью функции-генератора создайте его итератор, переберите элементы этого объекта с помощью цикла for-of.
let obj5 = {
    a: 'One',
    b: 'Two',
    c: 'Three',
};
function* gener5(obj) {
    for (const key in obj) {
        yield obj[key];
    }
}

let iter5 = gener5(obj5);

console.group('Task 5');
console.log(obj5);
for (const elem of iter5) {
    console.log(elem);
}
console.groupEnd('Task 5');


//Task 6. Дан объект. Сделайте так, чтобы его элементы можно было перебрать с помощью цикла for-of.
let obj6 = {
    'name': 'object6',
    'Task Number': 6,
    alertHi() {
        alert(`I'm object number 6`);
    },
    *[Symbol.iterator]() {
        for (const key in this) {
           yield this[key];
        }
    },
};

console.group('Task 6');
console.log(obj6);
for (const elem of obj6) {
    console.log(elem);
}
console.groupEnd('Task 6');


// Task 7. Дан массив. Переберите элементы этого массива через цикл for-of так, чтобы в каждой итерации в переменную elem записывался элемент массива, а в переменную key - ключ.
let arr7 = [3,'one', undefined, 324];
let iter7 = arr7.entries();
console.group('Task 7');
console.log(arr7);
for (const [key, value] of iter7) {
    console.log(key, value);
}
console.groupEnd('Task 7');

// Task 8. Пусть дан объект. Создайте символ и добавьте в объект еще один элемент, ключом которого будет созданный символ, а значением - какая-нибудь строка. Переберите объект через цикл for-in, убедитесь в том, что новый элемент не появляется при переборе.
let obj8 = {
    1: 'a',
    2: 'b',
    3: 'c',
};

let sym8 = Symbol();
obj8[sym8] = 'Hello';
console.group('Task 8');
for (const key in obj8) {
    console.log(key);
}
console.groupEnd('Task 8');

// Task 9. Пусть дан объект. Добавьте в него еще один элемент, значением которого будет функция, выводящая на экран '!', а ключом - созданный вами символ.
let sym8Func = Symbol();
obj8[sym8Func] = () => {console.error('warning!');};
console.group('Task 9');
console.log(obj8);
console.groupEnd('Task 9');


