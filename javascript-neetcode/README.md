## Javascript Concepts

# DAY1

- clousers: function inside of function, act like factory classes which return a function
- hoisiting: function in js are hoisted, except the nammed functionsd

# DAY2

- ClassCounter: We define a ts class named ClassCounter.ts which has a variable n and function increment, and we call the increment method on the instance of class to increase the value of the class variable
- Counter: We create a function that returns a function, with a variable inside the outer function, so whenever we call the outer function the varibale will be incremented with the help of return statement.(can use the trem closure)

# DAY3

- ClassCounter 2: Create a class with a number variable "n" and 3 methods. we now create a instance and call methods from the instance according using dot operator

- Counter 2: create a javascript function that can increment, decrement & reset methods and a return statement that returns these methods using a spread syntax

# DAY4

- Map.js has a function that implements a map and takes in 2 parameters a function and map of integer array, it checks if each element in array is greator than specified value and is passed as second argument.

# DAY5

- Truthy or Falsy
  All values are from are not truthy,
  to remove falsy, the below all should be considered

  - false
  - All forms of zero, 0, -0, & 0n
  - Nan
  - ""
  - null
  - undefined

  The OR Operator || returns if the first value is thruthy
  The AND Operator && returns if the first value is falsy
  The Nullish Coalesing operator ?? is identical to || except it only treats null and undefined as falsy

# DAY6
  - reduce function recursively reduces an array based on 2 arguments a function pon it must add and a accumilator.

# DAY7
  - FUNCTIONAL COMPOSITION

  - let functions be an array of functions, apply the functions in reverse order.
    functions = [f(x), g(x), h(x)] -> f(g(h(x)))
    
  - input will be = [f1, f2, f3, ...]

# DAY8
- A function that can only be called once. After that the boolean will be set to false and cannot be called
- Another way to implement is this to use a class and instantiate and use it to call a nethod that runs only once.

# DAY9
-     memoization is used in dynamic programmoign where common inuts are chached. This is because all of them are used at once.