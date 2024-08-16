// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій

// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let squareRectangular = (a, b) => a * b;

console.log(squareRectangular(5, 10));

// ------------------------------------------------------------------------------------------------
// створити функцію яка обчислює та повертає площу кола з радіусом r

let squareCircle = (radius) => Math.PI * 2 * radius;

console.log(squareCircle(10));

//-------------------------------------------------------------------------------------------------
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let squareCylinder = (radius, height) => 2 * Math.PI * radius * (height + radius);

console.log(squareCylinder(10, 20));

// ------------------------------------------------------------------------------------------------
// створити функцію яка приймає масив та виводить кожен його елемент

let acceptArray = (array) => {
    for (const element of array) {
        console.log(element);
    }
}

acceptArray([123, 321, -123]);

//--------------------------------------------------------------------------------------------------
//створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

let paragraph = (text) => {
    document.write(
        `
            <p>
                ${text}
            </p>
        `
    );
}

paragraph('Create paragraph');

// --------------------------------------------------------------------------------------------------
// створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

let List = (text) => {
    document.write(
        `
            <ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>
        `
    );
}

List('JavaScript');

// ---------------------------------------------------------------------------------------------------
// створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

let createList = (text, item) => {
    document.write(`<ul>`);
    for (let i = 0; i < item; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createList('JavaScript', 5);

// ---------------------------------------------------------------------------------------------------
//  створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let array = (primitiveElements) => {
    document.write(`<ul>`)
    for (let element of primitiveElements) {
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ul>`)
}

array([123, -234, 'asd', true, false]);

// ----------------------------------------------------------------------------------------------------
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayOfObjects = (objects) => {
    for (const object of objects) {
        document.write(`<div>${object.id} ${object.name} ${object.age}</div>`)
    }
}

arrayOfObjects([
        {id: 1, name: 'Max', age: 25},
        {id: 2, name: 'Anya', age: 19},
        {id: 3, name: 'Tanya', age: 22}
    ]
);

// ----------------------------------------------------------------------------------------------------
//створити функцію яка повертає найменьше число з масиву

let minNumArray = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

let numArray = [1, 3, 5, 7, -2,];
console.log(minNumArray(numArray));

// -----------------------------------------------------------------------------------------------------
//створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let arrNum = 0;
    for (let number of arr) {
        arrNum = arrNum + number;
    }
    return arrNum;
}

console.log(sum([1, 2, 10]));

//------------------------------------------------------------------------------------------------------
let swap = (arr, index1, index2) => {
    let bufferArray = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = bufferArray;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// ------------------------------------------------------------------------------------------------------
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }

    return 0;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));




