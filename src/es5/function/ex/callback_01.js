function hello(username)
{
    console.log(username + " 반갑습니다.");
}

function greeting(callback)
{
    let result = "이호진"; // 결과값
    callback(result);
}

greeting(hello);