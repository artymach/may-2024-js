// ------------------arrays_objects------------------------

let array = ['Artem', 'Svetlana', 'Gleb', 'Tanya', 'Vanya', 123, 456, 789, 999, -357];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

//----------------------

let book1 = {
    title: 'Astronomy',
    pageCount: 100,
    genre: 'Scientific literature',
    authors: [
        {name: 'Carl Sagan', age: 50},
        {name: 'Neil De Grays Tyson', age: 47}
    ]
}
console.log(book1);

let book2 = {
    title: 'Dune',
    pageCount: 412,
    genre: 'Science fiction',
    authors: [
        {name: 'Frank Herbert', age: 33},
    ]
}
console.log(book2);

let book3 = {
    title: 'The Hobbit',
    pageCount: 310,
    genre: 'Fantasy',
    authors: [
        {name: 'J.R.R. Tolkien', age: 37}
    ]
}
console.log(book3);

//------------------------------

let users = [
    {
        name: 'Artem',
        username: 'userArtem',
        password: 123
    },
    {
        name: 'Vanya',
        username: 'userVanya',
        password: 464
    },
    {
        name: 'Gleb',
        username: 'userGleb',
        password: 879
    },
    {
        name: 'Anya',
        username: 'userAnya',
        password: 236
    },
    {
        name: 'Kolya',
        username: 'userKolya',
        password: 129
    },
    {
        name: 'Andrey',
        username: 'userAndrey',
        password: 100
    },
    {
        name: 'Tanya',
        username: 'userTanya',
        password: 575
    },
    {
        name: 'Ira',
        username: 'userIra',
        password: 357
    },
    {
        name: 'Denis',
        username: 'userDenis',
        password: 777
    },
    {
        name: 'Katya',
        username: 'userKatya',
        password: 333
    }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// ----------------------------------

let weather = [
    {day: 'Monday', morning: 10, afternoon: 29, evening: 20},
    {day: 'Tuesday', morning: 11, afternoon: 25, evening: 18},
    {day: 'Wednesday', morning: 12, afternoon: 23, evening: 19},
    {day: 'Thursday', morning: 13, afternoon: 24, evening: 17},
    {day: 'Friday', morning: 14, afternoon: 28, evening: 20},
    {day: 'Saturday', morning: 15, afternoon: 27, evening: 21},
    {day: 'Sunday', morning: 16, afternoon: 30, evening: 22}
];
console.log(weather)

// ------------------logical branching----------------

// let x = 10;
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }
//
// }let x = 1;
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }
//
// let x = 0;
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }
//
// let x = -3;
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// -----------------------------------

let time = 50;//число змінюєм за бажанням
if (0 <= time && time <= 15) {
    console.log('Перша четверть часу');
} else if (16 <= time && time <= 30) {
    console.log('Друга частина часу');
} else if (31 <= time && time <= 45) {
    console.log('Третя частина часу');
} else if (46 <= time && time <= 59) {
    console.log('Четверта частина часу');
} else {
    console.log('Частина часу не визначена')
}

// ------------------------------------

let day = -5;//число змінюєм за бажанням
if (1 <= day && day <= 10) {
    console.log('Перша декада місяця');
} else if (11 <= day && day <= 20) {
    console.log('Друга декада місяця');
} else if (21 <= day && day <= 31) {
    console.log('Третя декада місяця');
} else {
    console.log('Значення не визначенно')
}

// -------------------------------------

let week = +prompt('Enter the serial number of the day of the week 1-7');
switch (week) {
    case 1:
        console.log('Monday: javascript lesson');
        break;
    case 2:
        console.log('Tuesday:javascript consultation');
        break;
    case 3:
        console.log('Wednesday:javascript lesson');
        break;
    case 4:
        console.log('Thursday:javascript consultation');
        break;
    case 5:
        console.log('Friday:javascript lesson');
        break;
    case 6:
        console.log('Saturday:english lesson');
        break;
    case 7:
        console.log('Sunday:day off');
        break;
}

// ----------------------------------------------------

let num1 = prompt('Enter the first number');
let num2 = prompt('Enter the second number');
if (num1 > num2) {
    console.log(`Maximum number:  ${num1}`);
} else if (num2 > num1) {
    console.log(`Maximum number:  ${num2}`);
} else {
    console.log('Equal numbers');
}

//--------------------------------------------------------
let x;
x = 0;// підставляємо falsy-значення ('',null,undefined,NaN,false і т.д) в змінну x
if (!x) {
    x = 'default';
console.log(x);
} else {
    console.log('Result not found')
}

//--------------------------------------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + ' ' + 'Супер');
}