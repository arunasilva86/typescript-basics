import {Person} from './inheritance-demo';
import {Programmer} from './inheritance-demo';

Programmer

class GenericsDemo {

    doSomething <T extends Person> (x: T) : T {
        return x;

    }

}

let y = new GenericsDemo();

let p = new Programmer("Aruna ", "Silva");
p.greetLikePerson(); // greetLikePerson is possible for let p because  doSomething returns T, in this case Programmer;

let q = new Person("Aruna ", "Silva");
// q.greetLikePerson()    q.greetLikePerson() is not possible as q 's type is set as Person by doSomething() method