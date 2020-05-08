var fruits = {
    banana:"바나나", 
    apple:"사과", 
    kiwi:"키위"
};

for ( var item in fruits) {
    console.log( item + '는 '+ fruits[item]) ;
}