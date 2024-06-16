// клонирование объектов
const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA',
        house: 12
    },
    family: {
        mother: "Sveta",
        father: "Ivan",
        cat: "Rozy"
    }
};

//spread

copyUser = {...user, family: {
    ...user.family, cat: "Too"
    }}

console.log(copyUser)

//StructuredCloneCopy

copyUserCloneStructure = structuredClone(user)
copyUserCloneStructure.address.city = "Moscow"

console.log(copyUserCloneStructure)

const originalArray = [1, 2, 3, 4, 5];

const addElementToArray = (Arr, num) => {
    // return [...Arr, num]
    return Arr.concat(num)
}
const newArray = addElementToArray(originalArray, 6);

console.log(newArray);

//деструктуризация

const student = { name: 'John', age: 25, city: 'New York' };

const {name, age , city} = student

console.log(name);  // 'John'
console.log(age);   // 25
console.log(city);  // 'New York'


const fruits = ['apple', 'banana', 'orange'];
 const [ , secondFruit, thirdFruit] = fruits

console.log(secondFruit);  // 'banana'
console.log(thirdFruit);   // 'orange'

const person = { name: 'Alice', age: 30 };

// Деструктуризация в параметрах функции
function printPersonDetails( {name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printPersonDetails(person);  // Вывод: Name: Alice, Age: 30

const car = { brand: 'Toyota', model: 'Camry' };

const {brand, model, year = 2022} = car

console.log(brand);  // 'Toyota'
console.log(model);  // 'Camry'
console.log(year);   // 2022 (значение по умолчанию)


const students = [
    { name: 'Alex', grade: 'A' },
    { name: 'Emma', grade: 'B' },
    { name: 'Chris', grade: 'C' },
];

const [{name: student1}, , {name: student3}] = students

console.log(student1);  // 'Alex'
console.log(student3);  // 'Chris'

const persons = { firstName: 'Max', lastName: 'Johnson' };
const firstName = 'first Name: Nina';
const lastName = 'last Name: Ivanov';

const { firstName: variableName, lastName: last, agePers = 25} = persons

console.log(variableName); // 'Max'
console.log(last); // 'Johnson'
console.log(agePers); // 25 (значение по умолчанию)




