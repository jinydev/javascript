function func1() {
    var a = 2; // 지역변수
    
    // 반환값으로 한수를 반환
    return function func2() {
        return a;
    } 
}

var f = func1();
var a = f();
console.log(a);