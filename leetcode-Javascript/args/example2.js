const createHelloWorld = () => {
    return (...args) => {
        return args.length; // Returns the length of args
    };
};

// Usage
const helloFunction1 = createHelloWorld(["World", "123"]);
console.log(helloFunction1()); // Output: 0 (no arguments passed to helloFunction)

// Trong kết quả này, helloFunction() trả về 0 vì không có đối số nào được truyền cho nó. Hàm bên trong (...args) => {...} 
// chỉ trả về độ dài của mảng args trống. Nếu bạn muốn truyền đối số cho helloFunction, bạn nên làm như vậy khi gọi nó.

// Usage
const helloFunction2 = createHelloWorld(); // Create the helloFunction
console.log(helloFunction2("Hello", "World")); // Output: 2

// Usage
const helloFunction3 = createHelloWorld(); // Create the helloFunction
console.log(helloFunction3(["Hello", "World"])); // Output: 1

// Usage
const helloFunction4 = createHelloWorld(); // Create the helloFunction
console.log(helloFunction4(["Hello", "World"], {name: 'hung'})); // Output: 2

// Trong ví dụ sử dụng này, có vẻ như bạn đang truyền một mảng ["Hello", "World"] làm đối số cho helloFunction3. 
// Vì helloFunction3 được tạo bằng createHelloWorld() mà không có bất kỳ tham số nào nên hàm bên trong không có quyền truy cập vào bất kỳ tham số nào mảng được xác định trước 
// và chỉ nhận mảng bạn truyền khi gọi helloFunction3.
// Trong mã này, helloFunction3 được tạo bằng cách sử dụng createHelloWorld() mà không truyền bất kỳ tham số nào. Sau đó, khi bạn gọi helloFunction3(["Hello", "World"]), 
// bạn đang truyền ["Hello", "World"] làm đối số . 
// Bên trong hàm bên trong, args hiện chứa một phần tử duy nhất, đó là mảng ["Hello", "World"]. Do đó, args.length trả về 1 và đó là nội dung được ghi lại.