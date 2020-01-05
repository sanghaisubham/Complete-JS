/////////////////////////////////////
// Lecture: Hoisting(Use of function declaration and variables before even declaring the same in our code)

/*
// functions
//This works because this is hoisting,and during creation phase , function variable is declared in Variable Object
even before the code is executed.So during execution , calculateAge is available for use
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}



//Hoisting Does not work here.
//It works only for function declaration and not function expression.

// retirement(1956); //Compilation Error
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);//This is undefined because in creation phase for variables, a property is created in Variable Object ,which is set to undefined.

var age = 23;//This is declared in Global Execution Context Object 

function foo() {
    console.log(age);// This is undefined because there is an age  within the foo function so uses Execution Context Object of foo function 
    var age = 65; //This is declared in  Execution Context Object of foo function 
    console.log(age);//Prints 65
}
foo();
console.log(age);//Print 23
*/



/////////////////////////////////////
// Lecture: Scoping(Tells us where we can access a certain variable)

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    console.log(a);//Here Hello is printed ,as there is no new a declared within the scope
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    //This is called Lexical Scoping, a function lexically within another function gets access to scope of the outer function
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()//third can be accessed here, due to scope chain, as scope of third is global
    }
}

function third() {
    var d = 'John';
    //console.log(c);//c cannot be accessed as it is in different execution stack
    console.log(a+d); 
}
*/



/////////////////////////////////////
// Lecture: The this keyword

//This keyword points to global object (window object)


console.log(this);//In global execution object ,this refers to the window object

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); //This is regular function call , so this refers to the window object
}

var john = {
    name: 'John',
    yearOfBirth: 1990,

    //This is method(function expression) not a function so here , this refers to the object that called the method
    calculateAge: function() {
        console.log(this);//Here 'this' refers to the john object
        console.log(2016 - this.yearOfBirth);
        
    //It is a  regular function call, so 'this' object refers to window(default)object

         innerFunction();//This also works because of hoisting 
        function innerFunction() {
            console.log(this);
        }
        innerFunction(); 
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;// We dont want paranteses here , because parentheses is used for calling the function,not while assigning it to other function
mike.calculateAge();

