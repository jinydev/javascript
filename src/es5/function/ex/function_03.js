function execute()
{
    function hello()
    {
        console.log("hello world");
    }

    hello(); // 내부호출
}

execute();

hello(); // 외부호출