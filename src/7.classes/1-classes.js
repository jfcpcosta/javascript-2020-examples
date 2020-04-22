class Student {

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    printName() {
        console.log(this.name, this.lastName);
    }
}

const s = new Student('John', 'Smith');
s.printName();
