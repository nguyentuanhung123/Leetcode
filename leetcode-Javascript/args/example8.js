const createHelloWorld = () => {
    return (...args) => {
        return {...args};
    }
}

const f = createHelloWorld() // Create the function

const array1 = [{},null,42] // Array of arguments
const array2 = [1, 2, 3] // Array of arguments
const obj1 = {name: "Hung", age: 22} // Object of arguments

console.log("Result: ",f(...array1, ...array2, {...obj1})); 
// Result:  { '0': {}, '1': null, '2': 42, '3': 1, '4': 2, '5': 3, '6': { name: 'Hung', age: 22 }}
console.log("Type of result: ", typeof(f(array1, array2, obj1))); // Type of result:  object