// let myName = 'Max';
// console.log(myName);

// myName = 'Manu';
// console.log(myName);

// function printNameStd(name) {
//     console.log(name);
// }

// const printNameFat = name => {
//     console.log(name);
// }

// printNameStd("Std");
// printNameFat("Fat");

// const multiply = (a, b) => a * b;

// console.log(multiply(5, 5));

class Human {
    constructor(_age) {
        this.age = _age;
    }
}

class Person extends Human {
    constructor(_age, _name) {
        super(_age);
        this.name = _name;

        //es6
        // this.someProp = 'someProp';
    }

    //es7
    // someProp = 'someProp';

    //es6
    printPerson() {
        console.log(`Name:${this.name}`, `Age: ${this.age}`)
    }

    //es7
    // printPerson = () => {
    //     console.log(`Name:${this.name}`, `Age: ${this.age}`)
    // }

//     map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
}

const p = new Person(26, "Michał");
p.printMyName();