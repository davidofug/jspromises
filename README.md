# How to work with JavaScript Promises

This is project is to help you learn how to use promises and avoid callbacks.
In the past callbacks was the solution to handle/implement asynchronous behaviour iin JavaScript.

But the callback code is always hard to debug and maintain because it's difficult to read and understand.

### Project Structure

    - assets
        |- css
            |- style.css
        |-scripts
            |- asynchronous.js
            |- synchronous.js
            |- promises.js
    - data
        |-left.txt
    - asynchronous.html
    - synchronous.html
    - promises.html
    - README.md

### Synchronous Behaviour Explained

In JavaScript synchronous code executes line by line.

**Pros**

1. Its easy to read
2. Because its easy to read, its easy to debug

**Cons**

1. It can be inefficient because slow code will prevent execution of subsquent code since the code has to be executed line by line.

#### Test the Synchronous Behaviour

1. Open synchronous.html in the browser and check your console.
2. Open synchronous.js in your code editor
3. You will see that the output in the console is exactly in the order the code was written.
4. At the console you should something like below. ↓

### Asynchronous Behaviour Explained
