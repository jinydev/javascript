function hello(){
    for (var i=0; i <arguments.length; i++) {
        console.log(arguments[i]);
    }
}

hello("안녕하세요", "오늘도 좋은 하루 되세요");