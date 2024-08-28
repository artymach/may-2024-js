// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(1, 'Daniel', 'Wilson', 'daniel.wilson@example.com', '+1234567896'),
//     new User(2, 'Emma', 'Brown', 'emma.brown@example.com', '+1234567893'),
//     new User(3, 'Alice', 'Smith', 'alice.smith@example.com', '+1234567891'),
//     new User(4, 'Sophia', 'Miller', 'sophia.miller@example.com', '+1234567895'),
//     new User(5, 'Mike', 'Davis', 'mike.davis@example.com', '+1234567894'),
//     new User(6, 'Bob', 'Johnson', 'bob.johnson@example.com', '+1234567892'),
//     new User(7, 'John', 'Doe', 'john.doe@example.com', '+1234567890'),
//     new User(8, 'Olivia', 'Moore', 'olivia.moore@example.com', '+1234567897'),
//     new User(9, 'James', 'Taylor', 'james.taylor@example.com', '+1234567898'),
//     new User(10, 'Charlotte', 'Anderson', 'charlotte.anderson@example.com', '+1234567899')
// ];
//
// console.log(users);


// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// function User(id, name, surname, email, phone,) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
//
// let users = [
//     new User(1, 'Daniel', 'Wilson', 'daniel.wilson@example.com', '+1234567896'),
//     new User(2, 'Emma', 'Brown', 'emma.brown@example.com', '+1234567893'),
//     new User(3, 'Alice', 'Smith', 'alice.smith@example.com', '+1234567891'),
//     new User(4, 'Sophia', 'Miller', 'sophia.miller@example.com', '+1234567895'),
//     new User(5, 'Mike', 'Davis', 'mike.davis@example.com', '+1234567894'),
//     new User(6, 'Bob', 'Johnson', 'bob.johnson@example.com', '+1234567892'),
//     new User(7, 'John', 'Doe', 'john.doe@example.com', '+1234567890'),
//     new User(8, 'Olivia', 'Moore', 'olivia.moore@example.com', '+1234567897'),
//     new User(9, 'James', 'Taylor', 'james.taylor@example.com', '+1234567898'),
//     new User(10, 'Charlotte', 'Anderson', 'charlotte.anderson@example.com', '+1234567899')
// ];
//
// let filterUsers = users.filter ((user) => (user.id % 2 === 0));
// console.log(filterUsers);


// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// function User(id, name, surname, email, phone,) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(7, 'John', 'Doe', 'john.doe@example.com', '+1234567890'),
//     new User(3, 'Alice', 'Smith', 'alice.smith@example.com', '+1234567891'),
//     new User(6, 'Bob', 'Johnson', 'bob.johnson@example.com', '+1234567892'),
//     new User(5, 'Emma', 'Brown', 'emma.brown@example.com', '+1234567893'),
//     new User(5, 'Mike', 'Davis', 'mike.davis@example.com', '+1234567894'),
//     new User(4, 'Sophia', 'Miller', 'sophia.miller@example.com', '+1234567895'),
//     new User(1, 'Daniel', 'Wilson', 'daniel.wilson@example.com', '+1234567896'),
//     new User(8, 'Olivia', 'Moore', 'olivia.moore@example.com', '+1234567897'),
//     new User(9, 'James', 'Taylor', 'james.taylor@example.com', '+1234567898'),
//     new User(10, 'Charlotte', 'Anderson', 'charlotte.anderson@example.com', '+1234567899')
// ];
//
// let sortUsers = users.sort((user1, user2) => (user1.id - user2.id));
// console.log(sortUsers);


// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// let clients = [
//     new Client(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890', ['Laptop', 'Mouse', 'Keyboard']),
//     new Client(2, 'Alice', 'Smith', 'alice.smith@example.com', '+1234567891', ['Smartphone', 'Headphones']),
//     new Client(3, 'Bob', 'Johnson', 'bob.johnson@example.com', '+1234567892', ['Tablet', 'Charger', 'Case']),
//     new Client(4, 'Emma', 'Brown', 'emma.brown@example.com', '+1234567893', ['Smartwatch', 'Band']),
//     new Client(5, 'Mike', 'Davis', 'mike.davis@example.com', '+1234567894', ['Monitor', 'HDMI Cable']),
//     new Client(6, 'Sophia', 'Miller', 'sophia.miller@example.com', '+1234567895', ['Camera', 'Lens', 'Tripod']),
//     new Client(7, 'Daniel', 'Wilson', 'daniel.wilson@example.com', '+1234567896', ['Printer', 'Ink']),
//     new Client(8, 'Olivia', 'Moore', 'olivia.moore@example.com', '+1234567897', ['Gaming Console', 'Controller']),
//     new Client(9, 'James', 'Taylor', 'james.taylor@example.com', '+1234567898', ['Router', 'Ethernet Cable']),
//     new Client(10, 'Charlotte', 'Anderson', 'charlotte.anderson@example.com', '+1234567899', ['TV', 'Soundbar'])
// ];
//
// console.log(clients);


// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// let clients = [
//     new Client(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890', ['Laptop', 'Mouse', 'Keyboard']),
//     new Client(2, 'Alice', 'Smith', 'alice.smith@example.com', '+1234567891', ['Smartphone', 'Headphones']),
//     new Client(3, 'Bob', 'Johnson', 'bob.johnson@example.com', '+1234567892', ['Tablet', 'Charger', 'Case']),
//     new Client(4, 'Emma', 'Brown', 'emma.brown@example.com', '+1234567893', ['Smartwatch', 'Band']),
//     new Client(5, 'Mike', 'Davis', 'mike.davis@example.com', '+1234567894', ['Monitor', 'HDMI Cable']),
//     new Client(6, 'Sophia', 'Miller', 'sophia.miller@example.com', '+1234567895', ['Camera', 'Lens', 'Tripod']),
//     new Client(7, 'Daniel', 'Wilson', 'daniel.wilson@example.com', '+1234567896', ['Printer', 'Ink']),
//     new Client(8, 'Olivia', 'Moore', 'olivia.moore@example.com', '+1234567897', ['Gaming Console', 'Controller']),
//     new Client(9, 'James', 'Taylor', 'james.taylor@example.com', '+1234567898', ['Router', 'Ethernet Cable']),
//     new Client(10, 'Charlotte', 'Anderson', 'charlotte.anderson@example.com', '+1234567899', ['TV', 'Soundbar'])
// ];
//
// let clientSortOrder = clients.sort(function (a, b) {
//     return a.order.length - b.order.length;
// });
//
// console.log(clientSortOrder);

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля
// `increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// changeYear (newValue) - змінює рік випуску на значення newValue
// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacturer = yearOfManufacture;
//     this.maximumSpeed = maximumSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
//     };
//
//     this.info = function () {
//         console.log(`Модель - ${this.model}`);
//         console.log(`Виробник - ${this.manufacturer}`);
//         console.log(`Рік випуску - ${this.yearOfManufacturer}`);
//         console.log(`Максимальна швидкість - ${this.maximumSpeed} км/год`);
//         console.log(`Об'єм двигуна - ${this.engineVolume} л`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maximumSpeed += newSpeed;
//     };
//
//     this.changeYear = function (newYear) {
//         this.yearOfManufacturer = newYear;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new Car('M5', 'BMW', 2023, 305, 4.4);
// let car2 = new Car('A6', 'Audi', 2020, 250, 3.0);
// let car3 = new Car('Camry', 'Toyota', 2019, 240, 2.5);
// let car4 = new Car('Civic', 'Honda', 2018, 220, 2.0);
// let car5 = new Car('Mustang', 'Ford', 2021, 290, 5.0);
//
//
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(200);
// car1.changeYear(2025);
// car1.info();
// car1.addDriver({name: 'John Doe', age: 30, experience: 5});
// console.log('-------------------');
//
//
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(250);
// car2.changeYear(2025);
// car2.info();
// car2.addDriver({name: 'Alice Johnson', age: 28, experience: 4});
// console.log('-------------------');
//
//
// car3.drive();
// car3.info();
// car3.increaseMaxSpeed(220);
// car3.changeYear(2025);
// car3.info();
// car3.addDriver({name: 'Bob Brown', age: 35, experience: 7});
// console.log('-------------------');
//
//
// car4.drive();
// car4.info();
// car4.increaseMaxSpeed(240);
// car4.changeYear(2025);
// car4.info();
// car4.addDriver({name: 'Emma Wilson', age: 32, experience: 6});
// console.log('-------------------');
//
//
// car5.drive();
// car5.info();
// car5.increaseMaxSpeed(280);
// car5.changeYear(2025);
// car5.info();
// car5.addDriver({name: 'Mike Davis', age: 40, experience: 10});
// console.log('-------------------');

// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// changeYear (newValue) - змінює рік випуску на значення newValue
// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car {
    constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacturer = yearOfManufacture;
        this.maximumSpeed = maximumSpeed;
        this.engineVolume = engineVolume;

        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
        };

        this.info = function () {
            console.log(`Модель - ${this.model}`);
            console.log(`Виробник - ${this.manufacturer}`);
            console.log(`Рік випуску - ${this.yearOfManufacturer}`);
            console.log(`Максимальна швидкість - ${this.maximumSpeed} км/год`);
            console.log(`Об'єм двигуна - ${this.engineVolume} л`);
        }

        this.increaseMaxSpeed = function (newSpeed) {
            this.maximumSpeed += newSpeed;
        };

        this.changeYear = function (newYear) {
            this.yearOfManufacturer = newYear;
        }

        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}
let car1 = new Car('M5', 'BMW', 2023, 305, 4.4);
let car2 = new Car('A6', 'Audi', 2020, 250, 3.0);
let car3 = new Car('Camry', 'Toyota', 2019, 240, 2.5);
let car4 = new Car('Civic', 'Honda', 2018, 220, 2.0);
let car5 = new Car('Mustang', 'Ford', 2021, 290, 5.0);


car1.drive();
car1.info();
car1.increaseMaxSpeed(200);
car1.changeYear(2020);
car1.info();
car1.addDriver({name: 'John Doe', age: 30, experience: 5});
console.log('-------------------');


car2.drive();
car2.info();
car2.increaseMaxSpeed(250);
car2.changeYear(2021);
car2.info();
car2.addDriver({name: 'Alice Johnson', age: 28, experience: 4});
console.log('-------------------');


car3.drive();
car3.info();
car3.increaseMaxSpeed(220);
car3.changeYear(2022);
car3.info();
car3.addDriver({name: 'Bob Brown', age: 35, experience: 7});
console.log('-------------------');


car4.drive();
car4.info();
car4.increaseMaxSpeed(240);
car4.changeYear(2023);
car4.info();
car4.addDriver({name: 'Emma Wilson', age: 32, experience: 6});
console.log('-------------------');


car5.drive();
car5.info();
car5.increaseMaxSpeed(280);
car5.changeYear(2024);
car5.info();
car5.addDriver({name: 'Mike Davis', age: 40, experience: 10});
console.log('-------------------');


//створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, year, footSize) {
        this.name = name;
        this.year = year;
        this.footSize = footSize;

    }
}

class Prince {
    constructor(name, year, shoeSize) {
        this.name = name;
        this.name = year;
        this.shoeSize = shoeSize;
    }
}

let cinderellas = [
    new Cinderella('Ella', 19, 36),
    new Cinderella('Anna', 22, 37),
    new Cinderella('Maria', 20, 38),
    new Cinderella('Linda', 21, 39),
    new Cinderella('Sophia', 18, 40),
    new Cinderella('Emily', 23, 36),
    new Cinderella('Ava', 24, 37),
    new Cinderella('Mia', 22, 38),
    new Cinderella('Olivia', 25, 39),
    new Cinderella('Charlotte', 21, 40)
];

let prince = new Prince('Charming', 25, 38);


for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince.shoeSize) {
        console.log(cinderellas[i].name);
    }
}

let findCinderella = cinderellas.find(function (cinderella) {
   return  cinderella.footSize === prince.shoeSize
} )
console.log( findCinderella);


// *Через Array.prototype. створити власний foreach, filter

myArray = [1, 2, 3, 11, 22, 33, 111, 222, 333, -321];

Array.prototype.createdForEach = function (callback) {
    for (let element of myArray) {
        callback(element);

    }
}
myArray.createdForEach(function (number) {
    console.log(number);
})


Array.prototype.createdFilter = function (callback) {
    let filteredArray = [];
    for (let element of myArray) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}
let evenNumbers = myArray.createdFilter(function (number) {
    return number % 2 === 0;
})
console.log(evenNumbers);
