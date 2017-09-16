// var y = function(x) {
//   return x;
// }
// becomes:
let y = x => x;

// function body after arrow
let plus = x => x + x;
plus(2); // returns 4

// also works
let plus2 = (x) => x + x;

// also works
let plus3 = (x) => {return x + x}; // notice that you need to write return statement

// void function
let sayHello = () => {
  console.log('hello');
}

//anonymoys function
() => x + x;

// function body in parenthesis allows for object literal
// we can't write this: let foo = val => {key: val};
// because json notation is interpreted as the function curly brackets
let foo = val => ({key: val});
foo('bar');
// returns {key:'bar'}
