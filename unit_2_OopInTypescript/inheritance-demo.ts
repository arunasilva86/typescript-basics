// Inheritance | polimophism| Encapsulation|

class Person {

    constructor (private firstName : string, private lastName : string) { // Encapsulation in action, No class attribute declaration  and assignment inside constructor required in this way. This is possible as TS allowed only a songle constructor.

    }

    protected greet (){
        console.log("Hi from Person, " + this.firstName + " "+ this.lastName);
    }
}


class Programmer extends Person {
    greet() {
        console.log("Hi from Programmer ");
    }

    greetLikePerson () {
        super.greet(); // possible as person's greet method id protected
    }
}





let personx = new Programmer("Aruna ", "Silva"); // polimophism in action
personx.greetLikePerson();




