var name = "jiny";
console.log(name);  // 전역변수 출력

function hello()
{
    var name = "hello world";
    console.log(name);  // 지역변수 출력
}

hello();
console.log(name);  // 전역변수 출력


function hello2()
{
    name = "hello world"; // 전역변수 변경
    console.log(name);
}

hello2();
console.log(name);  // 변경된 전역변수 출력
