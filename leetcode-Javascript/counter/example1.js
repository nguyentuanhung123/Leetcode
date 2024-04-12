/**
 * Cho một số nguyên n, trả về một hàm counter . 
 * Hàm đếm này ban đầu trả về n và sau đó trả về nhiều hơn giá trị trước đó mỗi lần nó được gọi (n, n + 1, n + 2, v.v.).
 */

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

const createCounter = (n) => {
    return () => {
        return n++;
    }
}

const counter = createCounter(10);
console.log("Counter 1: ", counter());
console.log("Counter 2: ", counter());
console.log("Counter 3: ", counter());