// chu vi hình chữ nhật
function cvhcn(cd, cr) {
    const result = 2 * (cd + cr);
    return result;
}
console.log(cvhcn(6, 2));

// diện tích hình chữ nhật
function dthcn(cd1, cr1) {
    const result = cd1 * cr1;
    return result;
}
console.log(dthcn(4, 3));

// đường kính hình tròn
function dkht(r) {
    const result = 3.14 * (r * r);
    return result;
}
console.log(dkht(5));

// diện tích tam giác
function dttg(a, b, c) {
    const result = Math.sqrt((a + b + c) * (a + b - c) * (b + c - a) * (c + a - b)) / 4;
    return result;
}
console.log(dttg(4, 4, 4));

// chuyển đổi độ c sang f
function csf(temp) {
    const result = (temp * 1.8) + 32;
    return result;
}
console.log(csf(3));