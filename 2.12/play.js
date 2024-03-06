


const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, i am' + this.name);
    }
}

const printName = ({ personData}) => {
    console.log(personData.name);
}

printName(person);

// const hobbies = ['Sports', 'Cooking']
// console.log(hobbies.concat(['b']));