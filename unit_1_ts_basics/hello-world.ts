var myVar :  number;
myVar = 12;  // OK 
// myVar = 'Aruna'; not possible with TS

///////////////////////////// Arrays 
var myArray : number [];

myArray = [1, 2, 3];
myArray.push(10);

var x: number | undefined;
x = myArray.pop();


var arrayInJs;
arrayInJs = [1, 2, 3];
arrayInJs.length;

var tsArray : number  [];

///////////////////////////// Tuples
var myTuple : [number, string];
myTuple = [5, 'false'];


///////////////////////////// Type safe functions

var add = (arg1: number, arg2 : number) => arg1 + arg2;
var sum = add(2, 7);
console.log(sum);


///////////////////////////// Number of arguments matters in TS

var substract = (s1 : number , s2: number ) => s1 - s2;
console.log(add(5, 2));     // add(5, 2, 6) gives TS error 

///////////////////////////// Optional Arguments
var func3 = (a: number , b: number , c ? : number , d ? : number ) => a + b;     // c and d optional with no default values , should be at thje very end

var func4 = (a: number , b: number , c = 0, d ? : number ) => a + b + c ;     // c and d optional but c takes 0 if not provided, d is optional but remain undefined if not provided, should be at thje very end

var func5 = (a: number , b: number , c = 0, d: number = 0) => a + b + c ;     // c and d optional but with takes 0 if not provided, d is optional , but if provides it should be a number but remain undefined if not provided, should be at thje very end


///////////////////////////// function return type type safty

var func6 = (a: number, b: number) :number => a + b ;   // return type should be a number, So this gives ERROR, , var func6 = (a: number, b: number) :number => a + b + 'ARUNA';  But htisis OK, var func6 = (a: number, b: number) => a + b + 'ARUNA';  

///////////////////////////// Implicit typing

var v7 = 10 // Assignment set the type of the v7 as number. Implicit assignment in action here
v7 = 6; // OK , But this gives ERROR if we try to assign v7 = *Aruna* afterwards



var var8 = (x: number, y: number) :number => x + y;
var v9;
v9 = var8(3, 4);     // implicit typing does NOT work here as declaraion and assignment are not in the same line


///////////////////////////// Type Any , we say type script to not to do type checkign fpr that variable
var v10; // by default v10 is in type Any since type is not declared
var v11 : any;

v10 = 5;  // OK 
v10 = true;  // OK 
v10 = 'Hello'  // OK 

///////////////////////////// Type Union - for a selected set of types
var  v12 : number | string;

v12 = 5;    // OK 
v12 = 'Helo';   // OK 
// v12 = true;     // ERROR 