function foo() {
    var a = 1; // 지역변수
    return a;
}

var a = foo();
console.log(a);