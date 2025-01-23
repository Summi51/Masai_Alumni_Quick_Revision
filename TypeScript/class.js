var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class Person
var Person = /** @class */ (function () {
    // Constructor to initialize common properties
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayInfo = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
// Student class that extends Person
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId, course, semester) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        _this.course = course;
        _this.semester = semester;
        return _this;
    }
    Student.prototype.displayInfo = function () {
        return "".concat(_super.prototype.displayInfo.call(this), ", Student ID: ").concat(this.studentId, ", Course: ").concat(this.course, ", Semester: ").concat(this.semester);
    };
    return Student;
}(Person));
// Staff class that extends Person
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, staffId, department, position) {
        var _this = _super.call(this, name, age) || this; // Call the constructor of the Person class
        _this.staffId = staffId;
        _this.department = department;
        _this.position = position;
        return _this;
    }
    Staff.prototype.displayInfo = function () {
        return "".concat(_super.prototype.displayInfo.call(this), ", Staff ID: ").concat(this.staffId, ", Department: ").concat(this.department, ", Position: ").concat(this.position);
    };
    return Staff;
}(Person));
// Testing the classes
// Create instances of Student and Staff
var student1 = new Student("Samreen", 24, "S12345", "Computer Science", 2);
var staff1 = new Staff("Neha", 34, "ST9876", "Engineering", "Professor");
// Display their details
console.log(student1.displayInfo());
console.log(staff1.displayInfo());
