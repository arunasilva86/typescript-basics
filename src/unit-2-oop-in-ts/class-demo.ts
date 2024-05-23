
// class | instance variable | instance method | constructor

class Student {
    firstName : String;
    lastName : string;
    age : number;

    constructor (firstName : string, lastName : string, age : number) {
        this.firstName = firstName;
        this.lastName= lastName;
        this.age= age;
    
    }

    getFullName () {
    return this.firstName + ' ' + this.lastName;
    }

}

let aStudent = new Student('Aruna', 'Silva', 38); // implicit type assign works
aStudent.age = 39;
console.log(aStudent);
console.log(aStudent.getFullName());
