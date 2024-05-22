class Person {
    firstName : string;
    lastName : string;

    greet (){
        console.log("Hi from Person");
    }
}


class Programmer extends Person {
    greet() {
        console.log("Hi from Programmer");
    }

    greetLikePerson () {
        super.greet();
    }
}

let personx = new Programmer();
personx.greetLikePerson();


