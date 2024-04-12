//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".

const createHelloWorld = () => {
    return (...args) => {
        return "Hello World"; // Returns all arguments passed to the inner function
    }
}

const f = createHelloWorld() // Create the function

console.log("Result: ", f());

// f được gán hàm trả về bởi createHelloWorld.
// đầu vào là một mảng chứa ba phần tử: một đối tượng trống {}, null và số 42.
// Khi f(input) được gọi, mảng đầu vào được truyền dưới dạng một đối số duy nhất cho hàm bên trong. Do đó, hàm bên trong trả về một mảng chứa một phần tử, chính là mảng đầu vào.
// Toán tử typeof trong JavaScript trả về "object" cho mảng, đó là lý do tại sao typeof(f(input)) ghi lại "object".
// Nếu bạn muốn các phần tử của mảng đầu vào được coi là các đối số riêng biệt, bạn nên trải rộng mảng đầu vào khi gọi f như sau: f(...input).

// Result:  { '0': [ {}, null, 42 ] }
// Type of result:  object
// Result:  { '0': {}, '1': null, '2': 42 }
// Type of result:  object

// Lý do tại sao kết quả là một đối tượng có dấu ngoặc vuông xung quanh nó ([{...}]) thay vì chỉ là một đối tượng {...} là vì khi bạn ghi một mảng vào bảng điều khiển bằng console.log, bảng điều khiển sẽ hiển thị nó với dấu ngoặc vuông để biểu thị nó dưới dạng một mảng.

// Trong trường hợp này, f(input) trả về một mảng chứa mảng đầu vào dưới dạng phần tử duy nhất. Vì vậy, khi bạn ghi nhật ký bằng console.log, nó hiển thị mảng bên ngoài bằng dấu ngoặc vuông. Mảng bên trong (mảng đầu vào) vẫn giữ nguyên giá trị của nó cấu trúc ban đầu.

// Đây là một sự cố:

// đầu vào là một mảng: [{}, null, 42].
// f(input) trả về một mảng chứa đầu vào dưới dạng phần tử đơn của nó: [input].
// Khi bạn ghi nhật ký f(input) bằng console.log, bảng điều khiển sẽ hiển thị nó dưới dạng một mảng có dấu ngoặc vuông: [[{}, null, 42]].
// Mảng bên trong [{}, null, 42] không thay đổi.
// Đây là lý do tại sao bạn nhìn thấy dấu ngoặc vuông xung quanh kết quả khi ghi nó vào bảng điều khiển. Mặc dù có vẻ ngoài như vậy nhưng nó vẫn là một đối tượng bên trong một mảng.

