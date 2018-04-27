# react-js-for-devs
Things I learnt in Cassidy's course

# Useful Methods:
- document.getElementsByTagName("*")
- document.body.classList.toggle()
- element.addEventListener("event", function() {})

# JSON - javascript object notation
not javascript , its own language.  
Cant store functions. Only primitives.
JSON.parse(), JSON.stringify()


# function.call

```js
function greet(greeting) {
  console.log(greeting + "," + this);
}
greet.call("Anwesha", "Hello");
```

# function.apply
Like call but need to pass in an array for the second parameter

# function.bind
creates a new function with a new context

# let vs const 
let stops hoisting bugs. throws error if referenced before declaration
they are both block scoped, but const cannot be redeclared or resssigned
