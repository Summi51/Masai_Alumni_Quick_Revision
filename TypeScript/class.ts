// Base class Person
class Person {
    name: string;
    age: number;
  
    // Constructor to initialize common properties
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    displayInfo(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Student class that extends Person
  class Student extends Person {
    studentId: string;
    course: string;
    semester: number;
  
    constructor(name: string, age: number, studentId: string, course: string, semester: number) {
      super(name, age);  
      this.studentId = studentId;
      this.course = course;
      this.semester = semester;
    }
  
    displayInfo(): string {
      return `${super.displayInfo()}, Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`;
    }
  }
  
  // Staff class that extends Person
  class Staff extends Person {
    // Properties specific to staff
    staffId: string;
    department: string;
    position: string;
  
    constructor(name: string, age: number, staffId: string, department: string, position: string) {
      super(name, age);  // Call the constructor of the Person class
      this.staffId = staffId;
      this.department = department;
      this.position = position;
    }
  
    displayInfo(): string {
      return `${super.displayInfo()}, Staff ID: ${this.staffId}, Department: ${this.department}, Position: ${this.position}`;
    }
  }
  
  // Testing the classes
  
  // Create instances of Student and Staff
  const student1 = new Student("Samreen", 24, "S12345", "Computer Science", 2);
  const staff1 = new Staff("Neha", 34, "ST9876", "Engineering", "Professor");
  
  // Display their details
  console.log(student1.displayInfo());
  console.log(staff1.displayInfo());
  