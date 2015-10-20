/**
 * Created by USER on 6/3/15.
 */

/*
What is Polymorphism?
    The ability to call the same method on different objects and have each of them respond
    in their own way is called polymorphism.
    In OOP, we think of objects that are linked through inheritance has the same methods
    (override methods) and that the method being called up, is the method associated with the
    object and not the type of referance.
    This should not be a problem in Java Script as references (variables) in JavaScript is not
    type-set. We can assign any type of data to a variable in Javascript, and Javascript will
    know the object a variable refer to if it exists.

    Example:*/

function Person(age, weight) {
    this.age=age;
    this.weight=weight;
    this.getInfo=function() {
        return "I am " + this.age + " years old " +
            "and weighs " + this.weight +" kilo.";
    }
}
function Employee(age, weight, salary){
    this.salary=salary;
    this.age=age;
    this.weight=weight;
    this.getInfo=function() {
        return "I am " + this.age + " years old " +
            "and weighs " + this.weight +" kilo " +
            "and earns " + this.salary + " dollar.";
    }
}
Employee.prototype= new Person();
Employee.prototype.constructor=Employee;
// The argument, 'obj', can be of any kind
// which method, getInfo(), to be executed depend on the object
// that 'obj' refer to.
function showInfo(obj) {
    console.log(obj.getInfo());
}

var person = new Person(50,90);
var employee = new Employee(43,80,50000);
showInfo(person);
showInfo(employee);