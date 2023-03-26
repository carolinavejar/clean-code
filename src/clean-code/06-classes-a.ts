(() => {
    type Gender = 'M' | 'F';
    class Person {
        constructor (
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}

    }
    const newPerson = new Person('Carolina', 'M', new Date('1995-02-20'))
    console.log(newPerson);
    
})()