(() => {

    console.log("-------------- Archivo B ----------------");
    
    // No aplicando principio de responsabilidad unica


    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate : Date
        gender    : Gender,
        name      : string,
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor ( {name,  gender, birthdate } : PersonProps) {
            this.name =  name;
            this.gender = gender;
            this.birthdate = birthdate
        }
    }


    interface UserProps {
        email      : string,
        role       : string,
        name       : string,
        gender     : Gender,
        birthdate  : Date,
    }

    class User extends Person {
        public email      : string;
        public lastAccess : Date;
        public role       : string;

        constructor({
            birthdate,
            email,
            gender,
            name,
            role,
        }: UserProps ) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings extends User {
        public workingDirectory  : string;
        public lastOpenFolder    : string;
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        } : UserSettingsProps) {
            super({email, role, name, gender, birthdate})

            this.workingDirectory =  workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'caro.vejarc@gmail.com',
        role: 'Admin',
        name: 'Carito',
        gender: 'F',
        birthdate: new Date('1995-02-20')
    })

    console.log({ userSettings });
    
    
})()