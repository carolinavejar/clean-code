(() => {

    // No aplicando principio de responsabilidad unica


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

    class User extends Person {
        public lastAccess : Date
        constructor (
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(name, gender, birthdate)
            this.lastAccess =  new Date();
        }

        chkCredentials () {
            return true;
        }
    }

    class UserSettings extends User {
        
        constructor(
            public workingDirectory: string,
            public lastOpenFolder : string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'caro.vejarc@gmail.com',
        'Admin',
        'Carito',
        'F',
        new Date('1995-02-20')
    )

    console.log({ userSettings });
    
    
})()