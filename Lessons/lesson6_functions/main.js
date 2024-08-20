// - Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'

let arrayString = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let str of arrayString) {
    console.log(str.length);
}
console.log('-------------------------------');

// Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'

let arrStr = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let string of arrStr) {
    console.log(string.toUpperCase());
}
console.log('-------------------------------');

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strArr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (let string of strArr) {
    console.log(string.toLowerCase());
}
console.log('-------------------------------');

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let dirtyStr = str.trim();
console.log(dirtyStr);
console.log(dirtyStr.length);
console.log(str.length);

console.log('-------------------------------');

//Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToArray = (str) => (str.split(' '));
let string = 'Ревуть воли як ясла повні';
let arr = stringToArray(string);
console.log(arr);

console.log('-------------------------------');

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrayNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arrayNumbers);
let arrNumToStr = arrayNumbers.map((value => value.toString()));
console.log(arrNumToStr);

console.log('-------------------------------');

// створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (arrayNum, direction) => {
    if (direction === 'ascending') {
        arrayNum.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arrayNum.sort((a, b) => b - a);
    }

    return arrayNum;
}

let nums = [11, 21, 3];

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

console.log('-------------------------------');

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let newCoursesAndDurationArray = coursesAndDurationArray
    .sort((a, b) => (b.monthDuration - a.monthDuration))
    .filter((value => (value.monthDuration > 5)))
    .map((course, index) => ({

        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration

    }));
console.log(newCoursesAndDurationArray);

console.log('-------------------------------');

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

function createDeck() {
    let suits = [
        {cardSuit: 'spade', color: 'black'},
        {cardSuit: 'diamond', color: 'red'},
        {cardSuit: 'heart', color: 'red'},
        {cardSuit: 'club', color: 'black'}
    ];

    let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    let deck = [];

    for (let suit of suits) {
        for (let value of values) {
            deck.push({
                cardSuit: suit.cardSuit,
                value: value,
                color: suit.color
            });
        }
    }

    return deck;
}

deck = createDeck();
console.log(deck);

// - знайти піковий туз
let aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(aceOfSpades);

// Знайти всі шістки
let allSixes = deck.filter(card => card.value === '6');
console.log(allSixes);

// Знайти всі червоні карти
let allRedCards = deck.filter(card => card.color === 'red');
console.log(allRedCards);

// Знайти всі буби (diamond)
let allDiamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(allDiamonds);

// Знайти всі трефи (clubs) від 9 та більше
let clubsNineOrMore = deck.filter(card =>
    card.cardSuit === 'clubs' &&
    ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
);
console.log(clubsNineOrMore);

console.log('-------------------------------');

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//      spades:[],
//      diamonds:[],
//      hearts:[],
//      clubs:[]
// }

let packedDeckOfCard = deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'club') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(packedDeckOfCard);

console.log('-------------------------------');

// взяти з arrays.js масив coursesArray
// написати пошук всіх об'єктів, в яких в modules є sass
// написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let coursesWithSaas = coursesArray.filter(course => {
    return course.modules.includes('sass')
});
console.log(coursesWithSaas);
let coursesWithDocker = coursesArray.filter(course => {
    return course.modules.includes('docker')
});
console.log(coursesWithDocker);


