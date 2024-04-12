const createHelloWorld = () => {
    return (...args) => {
        return args;
    }
}

const f = createHelloWorld() // Create the function

const array1 = [{},null,42] // Array of arguments
const array2 = [1, 2, 3] // Array of arguments
const obj1 = {name: "Hung", age: 22} // Object of arguments

console.log("Result: ",f(array1, array2, obj1)); // Result:  [ [ {}, null, 42 ], [ 1, 2, 3 ], { name: 'Hung', age: 22 } ]
console.log("Type of result: ", typeof(f(array1, array2, obj1))); // Type of result:  object

/**
 * Trong JavaScript, toán tử typeof trả về "đối tượng" cho mảng vì mảng được coi là một loại đối tượng trong JavaScript. 
 * Mảng trong JavaScript là một loại đối tượng chuyên biệt có khóa số (chỉ mục) và thuộc tính độ dài. 
 * Hành vi này nhất quán với Đặc tả ECMAScript, 
 * là tiêu chuẩn dựa trên JavaScript. 
 * Vì vậy, khi bạn áp dụng typeof cho một mảng, nó sẽ trả về "đối tượng".
 */

/**
 * Toán tử typeof trong JavaScript được thiết kế để trả về kiểu dữ liệu của toán hạng của nó. 
 * Khi bạn truyền một mảng cho typeof, nó sẽ trả về "đối tượng" vì mảng thực sự là đối tượng trong JavaScript.
 * 
 * Trong ngữ cảnh mã của bạn, createHelloWorld trả về một hàm nhận vào số lượng đối số bất kỳ và trả về các đối số đó dưới dạng một mảng. 
 * Khi bạn gọi f(array), bạn đang truyền một mảng làm đối số cho hàm đó. Khi đó hàm chỉ đơn giản là trả về mảng nó nhận được.
 * 
 * Trong bảng điều khiển JavaScript, các mảng được hiển thị trong dấu ngoặc vuông [ ], đó là lý do tại sao bạn thấy [ [ {}, null, 42 ] ] là kết quả đầu ra. 
 * Dấu ngoặc bên ngoài biểu thị mảng được trả về bởi hàm createHelloWorld và dấu ngoặc bên trong biểu thị mảng bạn đã truyền làm đối số.
 * 
 * Vì vậy, các dấu ngoặc lồng nhau chỉ đơn giản là một phần trong cách biểu thị mảng của bảng điều khiển và không thay đổi cấu trúc hoặc kiểu dữ liệu cơ bản, vẫn là một mảng.
 */