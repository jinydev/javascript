function execute()
{
    function hello()
    {
        console.log("hello world");
    }

    return hello; // 함수를 리턴합니다.
}

const f = execute();
f(); // 반환받은 함수를 호출합니다.