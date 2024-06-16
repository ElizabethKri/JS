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


