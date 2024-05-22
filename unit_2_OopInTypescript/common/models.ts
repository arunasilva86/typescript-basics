export class Person {

    constructor (private firstName : string, private lastName : string) { // Encapsulation in action, No class attribute declaration  and assignment inside constructor required in this way. This is possible as TS allowed only a songle constructor.

    }

    public getFirstName () {
        return this.firstName;
    }

    public getLastName () {
        return this.lastName;
    }

    protected greet (){
        console.log("Hi from Person, " + this.firstName + " "+ this.lastName);
    }
}


export class Programmer extends Person {
    greet() {
        console.log("Hi from Programmer ");
    }

    greetLikePerson () {
        super.greet(); // possible as person's greet method id protected
    }
}


