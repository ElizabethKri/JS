//push
let fruits = ['apple', 'banana', 'orange'];
const resPush = fruits.push("pink", "red")

console.log(fruits); // Output: ['apple', 'banana', 'orange', твои добавленные элементы в конец]
console.log(resPush) //5


const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: false,
    },
];

//pop

const lastUser =  users.pop()

console.log(lastUser); // { id: 4, name: 'Donald', isStudent: false }
console.log(users); // [ { id: 1, name: 'Bob', isStudent: true },  { id: 2, name: 'Alex', isStudent: true },{ id: 3, name: 'Ann', isStudent: true }]

//shift

const firstUser = users.shift()

console.log(firstUser); // { id: 1, name: 'Bob', isStudent: true }
console.log(users); // [{ id: 2, name: 'Alex', isStudent: true },  { id: 3, name: 'Ann', isStudent: true },  { id: 4, name: 'Donald', isStudent: false }]


//unshift
const addFirstEl = users.unshift({id: 0, name: 'TestName', isStudent: false}, { id: 1, name: 'Bob', isStudent: true })

console.log(addFirstEl)
console.log(users); //[
//     { id: 0, name: 'TestName', isStudent: false },
//     { id: 1, name: 'Bob', isStudent: true },
//     { id: 2, name: 'Alex', isStudent: true },
//     { id: 3, name: 'Ann', isStudent: true },
//     { id: 4, name: 'Donald', isStudent: false }
//   ]

//reverse(), join(), split():

const str = 'JavaScript is awesome';
const res = str.split(" ").reverse().join(" ")
console.log(res); // awesome is JavaScript

//concat
mergeArrays = (arr1, arr2) => {
    let res = arr1.concat(arr2)
    return res
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); // Output: ["apple", "banana", "orange", "kiwi"]

//flat
 const flattenArray = (arr) => {
     let res1 = arr.flat(Infinity)
     return res1
 }

console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]



//find

const findFirstElement = (arr, callback) => {
    res2 = arr.find(callback)
    return res2
}

let numbers = [10, 20, 30, 40, 50]
let fruits1 = ["яблоко", "банан", "апельсин", "киви"]


let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
console.log(firstNumberGreaterThan25); // Output: 30

let firstFruitStartingWithO = findFirstElement(fruits1, (fruit) => fruit.startsWith('а'));
console.log(firstFruitStartingWithO); // Output: "orange"



//includes()
let num = [1, 2, 3, 4, 5];
let fru = ['apple', 'banana', 'orange', 'kiwi'];

const checkElement = (arr, el) => {
    return arr.includes(el)
}


console.log(checkElement(num, 3)); // Output: true
console.log(checkElement(fru, 'grape')); // Output: false

//filter():
let numbers1 = [10, 20, 30, 40, 50];
let numbers2 = [5, 15, 25, 35, 45];

const filterGreaterThan = (arr, num) => {
    return arr.filter(num => num > 20)
}

console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]

//sort
let people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
];

const sortAlphabeticallyByProperty = (arr, name) => {
    return arr.sort((a,b) => a[name].localeCompare(b[name]))
}

console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]

let n = [5, 2, 8, 1, 4];

const sortDescending = (arr) => {
    return arr.sort((a, b) => b - a)
}

console.log(sortDescending(n)); // Output: [8, 5, 4, 2, 1]

let data = [
    { value: 1, name: 'Option 1' },
    { value: 2, name: 'Option 2' },
    { value: 3, name: 'Option 3' },
];


     let formattedData = data.map((el) => {
         return {
             value: el.value,
             name: el.name
         }
     })

console.log(formattedData); // [
//   { value: 1, label: 'Option 1' },
// { value: 2, label: 'Option 2' },
// { value: 3, label: 'Option 3' }
// ]

let products = [
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Orange', price: 2.49 },
];

let productsWithDiscount = products.map((el) => {
    return {
        id: el.id,
        name: el.name,
        price: el.price,
        discountedPrice: el.price * 0.9

    }
})

console.log(productsWithDiscount); // [
//   { id: 1, name: 'Apple', price: 1.99, с: 1.791 },
//   { id: 2, name: 'Banana', price: 0.99, discountedPrice: 0.891 },
//   { id: 3, name: 'Orange', price: 2.49, discountedPrice: 2.241 }
// ]



