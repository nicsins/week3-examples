/*** BASIC VARIABLES ***/

//Integer variable
var quantity = 6;

//Floating point variable
var price = 123.45;

//String variables. Use single or double quotes
var hello = 'hello world';
var moreText = "double quotes are ok too";

// Boolean variables. true and false are keywords
var easyMode = true;
var summer = false;

//Can define variable, and then initialize later
var car;
car = 'toyota';


/*** PRINT TO TERMINAL ***/

// console.log prints to the terminal or developer console if running in a browser
console.log(quantity);
console.log(price);
console.log(hello);
console.log(moreText);

console.log("Easy mode? " + easyMode);
console.log("Is it summer yet? " + summer);


/*** TYPE COERCION ***/

var information = 'coffee';   //Initialize as a string
console.log(information);
information = 1234;         // turn into an integer.
console.log(information);
//JS is cool with this, but avoid in code, often leads to bugs


//Type coercion
var data = 10;
console.log('data plus 1 is ' + data + 1);   // data coerced into a string 'Data plus 1 is 101'
console.log(data + 1 + ' is data plus 1');   // compare to output of this:  '11 is data plus 1'

var string_number = '123';
var times_two = string_number * 2;  // string_number is coerced to a numerical value
console.log(times_two);            // 246

var pet = "cat";
var cat_times_two = pet * 2;
console.log(cat_times_two);     // Can't make sense of this - NaN


/*** STRINGS ***/

var text = 'hello world';

var stringLength = text.length; //length is a property

var shout = text.toUpperCase();  //These are methods - convert to uppercase

var whisper = text.toLowerCase();   //And to lowercase

var whereIsW = text.indexOf('w');   //Index of first matching character or -1 if not found

var whereIsZ = text.indexOf('z');   //Index of first matching character or -1 if not found

var whisperAndShout = whisper.concat(shout);  //Join strings together

var replaceO = text.replace('o', '0');  //Replace the first instance of first thing with second thing
                                        //See reference for more info on this, can also do global
                                        //and more complex replacements with regular expressions

var replaceAllO = text.replace(/o/g, '0');  //Replace the all instance of first thing with second thing

var removeWhitespace = text.trim();   //Remove spaces, tabs, newlines etc. from both ends of the string

console.log(stringLength, shout, whisper, whereIsW, whereIsZ,
  whisperAndShout, replaceO, replaceAllO, removeWhitespace);


/*** ARRAY CREATION, ACCESS ***/

//Array variable (like a list in Python)
var quiz_scores = [100, 78, 93, 81, 100, 99];
console.log(quiz_scores);

//Another array. Can mix types if needed
var my_array = [5, 6, 'cake', 1234.124, text];

console.log(my_array);
console.log(my_array[2]);
console.log(my_array[-10]);   //non-existent index: this prints 'undefined'
console.log(my_array[10]);    //non-existent index: this prints 'undefined'


/*** OBJECTS ***/

//A simple object. More on this later
var productQuantities = { 'android': 5, 'iphone': 3 };
console.log(productQuantities);

//Two ways to access things in an object
console.log(productQuantities.android);  // Dot notation, if you know the key
console.log(productQuantities['android']); //or square brackets, if the key is from a variable


/*** IF ELSE ***/

// Note that == and != work for comparisons, but it's recommended to use === and !== instead

var grade = 100;

if (grade === 100) {
  console.log('You aced the quiz!');
}

var orderQuantity = -1;

if (orderQuantity < 0) {
  console.log('Error - can\'t order a negative number');
  // note that you need to escape special characters. Or use different quotes
  // console.log("Error - can't order a negative number");
}


/* if else statements */
var animal = 'zebra';

if (animal === 'zebra') {
  console.log('This animal is a zebra');
} else {
  console.log('Not a zebra');
}



var cities = ['London', 'Paris', 'Berlin'];

// array.indexOf(var) returns -1 if element not found
//If 'Minneapolis' not in our array, then add (push)
//it to the end of the array
if (cities.indexOf('Minneapolis') === -1) {
  cities.push('Minneapolis');
} else {
  console.log('Minneapolis is in the array of cities')
}

console.log(cities);


//&& represents logical AND
//used to check if two or more conditions are both true

var itemPrice = 100;
if (itemPrice === 100 && orderQuantity > 1) {
  console.log('You have ordered at 1 or more $100 items');
}

/* || represents logical OR
If at least one of these conditions are true, the whole expression is true
 */
var newCustomer = true;
var haveEmail = false;

if (newCustomer === true || haveEmail === false) {
  console.log('Need to request customer\'s email');
}

//More concise version. ! reverses the truth of a value.

if (newCustomer || !haveEmail) {
  console.log('Need to request customer\'s email');
}



console.log('Based on the number of legs a creature has, I will try to guess what it is.');

var legs = 4;    /* Pretend this is user input */

if (legs < 0) {
  console.log('I don\'t think anything has a negative number of legs');
}
else if (legs % 2 !== 0) {
  console.log('An odd number of legs, are you sure?');
}
else if (legs === 0) {
  console.log('Is it a snake?');
}
else if (legs === 2) {
  console.log('A biped animal, such as a human?');
}
else if (legs === 4) {
  console.log('A quadruped, like a zebra?');
}
else if (legs === 6) {
  console.log('Probably an insect, like a bee?');
}
else if (legs === 8) {
  console.log('Possibly a spider?');
}
else if (legs > 8) {
  console.log('More than 8 legs - perhaps a millipede?');
}
else {
  console.log('This shouldn\'t happen, ' +
    'but add an else clause anyway to help detect if it does');
}


// Why === and == ?

var number_5 = 5;
var string_5 = '5';

// == double equals operator
console.log(number_5 == string_5);  // True
// Types are coerced and the string '5' is considered == equal to the number 5

// === triple equals operator
console.log(number_5 === string_5);  // False
// False. Types are NOT coerced, the two operands must be the same type,
// as well as the same value
// The string '5' is NOT considered === equal to the number 5


// != not equals operator
console.log(number_5 != string_5);  // False
/* Types are coerced and the string '5' is considered == equal to the number 5
 So checking non-equality between '5' and 5 return false - they are not, not equal */

// !== not equals operator
console.log(number_5 !== string_5);  // True
/* False. Types are NOT coerced, the two operands must be the same type,
 as well as the same value
 The string '5' is NOT considered === equal to the number 5 */


/*** LOOPS ***/

//for loop, repeat a certain number of times
for ( var x = 0 ; x < 10 ; x++) {
  console.log(x);
}


/* A while loop to double a number and display it
Stop when a number greater than 100 is reached */
var maxVal = 100;
var number = 1;
while (number < maxVal) {
  number *= 2;
  console.log('number = ' + number)
}


//Infinite loop!
//Avoid. Scripts that take too long to run or appear to be stuck
//in infinite loops, will be killed by the browser.

//while (true) {
//  console.log ('hello');
//}


/*** LOOPS WITH ARRAYS ***/

var letters = ['a', 'b', 'c'];

//loop over an array by counting the elements
for (var i = 0 ; i < letters.length ; i++) {
  console.log('Element ' + i + ' is ' + letters[i]);
}


/* Another way of looping over an array.
More concise if you don't need to know the position of the elements
Notice the function definition in the function call! */
var animals = ['Buffalo', 'Elephant', 'Yak'];
animals.forEach(function(element){
  console.log(element);
});


/*** LOOPS WITH OBJECTS ***/

//Loop over all properties in an object
var pc_specs = { 'CPU' : '3.0 GHz', 'Memory' : '4GB'};

for (var spec in pc_specs) {
  console.log(spec, pc_specs[spec]);
}

//The loop above works for a simple object. With more complex objects
//you may have inherited properties that you may wish to exclude. So modify loop as follows
for (var spec in pc_specs) {
  if (pc_specs.hasOwnProperty(spec)) { //check that spec is an actual property of this object
    console.log(spec, pc_specs[spec]);
  }
}


/*** ARRAY MANIPULATION ***/

birds = ['Parrot', 'Chicken', 'Dodo', 'Owl'];

birds[1] = 'Eagle';   // replace element 1 with 'Eagle'
birds[5] = 'Sparrow';  // JS lets you do this. There is no element 5, but 'Sparrow'
                    // is added at position 5, and undefined elements are added to fill in the gaps.
console.log(birds);

birds[4] = 'Jay';   //Fill in the blank element
console.log(birds);

var firstBird = birds[0];    // Read data a copy of data from the array
var thirdBird = birds[2];
console.log(firstBird, thirdBird);

var lastBird = birds.pop();         // Removes last item and returns it
console.log(lastBird, birds);
birds.push('Seagull');          // Push adds new element to end of array
console.log(birds);

firstBird = birds.shift();      // Remove and returns first element
console.log(firstBird, birds);
birds.unshift('Wren');          // Add element to start of array
console.log(birds);


//How many elements in the array?
var numberOfBirds = birds.length;
console.log(numberOfBirds);

//Where is an element in the array? Return index if found, -1 if not
console.log(birds.indexOf('Owl'));    // 3
console.log(birds.indexOf('Penguin'));    // -1

//Loop over array
for (var j = 0 ; j < birds.length ; j++) {
  console.log('Bird ' + j + ' is ' + birds[j]);
}

birds.reverse();  //Reverse order of elements
console.log(birds);

birds.sort();   //arrange array in ascending order.
                // How would you sort in descending order?
console.log(birds);

var allBirds = birds.join();  //Join all elements into a string,
                                        // separated by commas
var allBirdsWithSeparator = birds.join(' % ');  //Join all elements,
                                              // connected with a custom string
console.log(allBirds);
console.log(allBirdsWithSeparator);


/*** FUNCTIONS ***/

var sum = add(1, 2);
console.log(sum);

function add(a, b) {
  return a + b;
}


exampleArray = ['Plankton', 'Squid', 'Sea Sponge'];
exampleArray2 = ['Owl', 'Puffin', 'Eagle'];

console.log(containsOwl(exampleArray));
console.log(containsOwl(exampleArray2));

/* A very specific function testing if an array contains 'Owl'
in any case. How could you make this more generally useful? */
function containsOwl(array) {

  var owl = 'owl';

  for (var i = 0; i < array.length ; i++) {
    if (array[i].toLowerCase() === owl) {
      return true;
    }
  }
  return false;

}

// JavaScript doesn't care if you use the arguments
// you defined in your function or not.

function do_something(a,b) {
  console.log('do_something function running. It received these arguments:\n' +
    'a: ' + a + ' \nb: ' + b);
  for (var i = 0 ; i < arguments.length; i++) {
    console.log('Here are all of the arguments: ' + arguments[i]);
  }
}

do_something('hello', 'bye!');   // Who cares about type :)
do_something('hello');
do_something('hello', 1234, 0.0001, 'bye');

do_something(1);
do_something(1, 2);
do_something(1, 2, 3);
do_something(1, 2, 3, 4);

