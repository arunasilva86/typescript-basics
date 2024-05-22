class ReadonlyDemo {
    readonly x: string = "Aruna";   // can be initialize inside while declaration 
    readonly y: number = 10;

}


var p = new ReadonlyDemo();
// p.x = 20;        This is not possible as x is marked as eradonly

class ReadonlyDemo2 { // can be initialize inside the cobstructor
    readonly x: string;
    readonly y: number;

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

}

class ReadonlyDemo3 {

    constructor (readonly x: string, readonly y: number) { // simplified version of version 2

    }
}
