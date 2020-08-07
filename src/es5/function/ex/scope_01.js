var name = "jiny";
console.log(name);  // 전역변수 출력

function hello()
{
    var name = "hello world";
    console.log(name);  // 지역변수 출력
}

hello();
console.log(name);  // 전역변수 출력
