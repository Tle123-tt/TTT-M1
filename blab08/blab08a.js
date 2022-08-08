function sum(a, b) {
    const result = a + b;
    return result;
}

function sub(a, b) {
    const result = a - b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}

function div(a, b) {
    const result = a / b;
    return result;
}

console.log(sum(6, 1));
console.log(sub(6, 2));
console.log(mul(6, 3));
console.log(div(6, 4));

function pt(a, b, c, d) {
    const result = a / b + c * d;
    return result;
}
console.log(pt(1, 2, 3, 4));


let currentYear = 2022;

function findYearOld(yearOfBirth) {
    const result = currentYear - yearOfBirth;
    return result;
}
console.log(findYearOld(2001));

//Với phép toán cộng
//Nếu có 1 toán hạng là chuỗi=>ưu tiên toán hạng còn lại sang chuỗi
//Với phép toán khác- * / % **
//Tự động chuyển đổi tất cả khiến dữ liệu khác sang số