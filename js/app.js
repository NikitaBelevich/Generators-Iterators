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

