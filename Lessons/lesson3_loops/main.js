document.write(`<p>-------------------------1------------------------------</p>`)

for (let i = 0; i < 10; i++) {
    document.write(`<div>block</div>`);
}
document.write(`<p>--------------------------2-----------------------------</p>`)

for (let i = 1; i < 11; i++) {
    document.write(`<div>block - ${[i]}</div>`);
}
document.write(`<p>--------------------------3----------------------------</p>`)
let a = 0;
while (a < 20) {
    document.write(`<h1>${a.name}</h1>`);
    a++;
}
document.write(`<p>--------------------------4-----------------------------</p>`)

let x = 1;
while (x < 21) {
    document.write(`<h1>${x.name} - ${[x]}</h1>`);
    x++;
}
document.write(`<p>---------------------------5----------------------------</p>`)

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let b = 0; b < listOfItems.length; b++) {
    let listOfItem = listOfItems[b];
    document.write(`<li>${listOfItem}</li>`);
}
document.write(`</ul>`)
document.write(`<p>---------------------------6---------------------------</p>`)
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fuf4AztC1S5ChKzkhOmWp&w=3840&q=75'
    },
];
for (let product of products) {
    document.write(` <div class="product-card">
                            <h3 class="product-title">${product.title} Price - ${product.price}</h3>
                            <img src=${product.image} alt="" class="product-image">
                    </div>`);
}
document.write(`<p>----------------------------7---------------------------</p>`)
let users = [
    {name: 'Dima', age: 31, status: false},
    {name: 'Petya', age: 30, status: true},
    {name: 'Kolya', age: 29, status: true},
    {name: 'Olga', age: 28, status: false},
    {name: 'Yra', age: 30, status: true},
    {name: 'Anya', age: 31, status: false},
    {name: 'Oleg', age: 28, status: false},
    {name: 'Andrey', age: 29, status: true},
    {name: 'Masha', age: 30, status: true},
    {name: 'Tanya', age: 31, status: false},
    {name: 'Max', age: 31, status: true}
];
let arrTrue = [];
let arrFalse = [];
let arrAge = [];

let i = 0;
while (i < users.length) {
    let user = users[i];
    if (user.status) {
        arrTrue[arrTrue.length] = user;
    } else {
        arrFalse[arrFalse.length] = user;
    }
    if (user.age > 30) {
        arrAge[arrAge.length] = user;
    }
    i++;
}
console.log(arrTrue);
console.log(arrFalse);
console.log(arrAge);





