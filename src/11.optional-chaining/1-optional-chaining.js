const person = {
    name: 'John Doe',
    cat: {
        name: 'Garfield'
    }
};

const dogName = person.dog?.name;
console.log(dogName);

const catName = person.cat?.name;
console.log(catName);