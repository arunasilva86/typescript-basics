var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Student.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Student;
}());
var aStudent = new Student('Aruna', 'Silva', 38); // implicit type assign works
aStudent.age = 39;
console.log(aStudent);
console.log(aStudent.getFullName());
