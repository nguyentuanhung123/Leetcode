const createCounter = (n) => {
    return n++;
}

console.log("Counter 1: ", createCounter(10)); // Counter 1:  10

console.log("Counter 2: ", createCounter(10)); // Counter 2:  10

console.log("Counter 3: ", createCounter(10)); // Counter 3:  10