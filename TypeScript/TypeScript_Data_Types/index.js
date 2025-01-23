// Numeric Types
var age = 25;
var largeNumber = 9007199254740991n;
// String Type
var personName = "John Doe";
// Boolean Type
var isStudent = true;
// Array Types
var scores = [85, 90, 95];
var colors = ["red", "green", "blue"];
var answers = [true, false, true];
// Tuple Type
var person = ["Alice", 30];
// Enum Type
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var currentDirection = Direction.North;
// Any Type
var randomValue = "Hello";
// Void Type
function logMessage(message) {
    console.log(message);
}
// Null and Undefined Types
var emptyValue = null;
var notAssigned = undefined;
