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
