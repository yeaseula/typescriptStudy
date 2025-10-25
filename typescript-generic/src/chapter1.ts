/**
 * 제네릭 : 일반적인/포괄적인..
 */


function func<T>(value:T):T { //T : 타입변수
    return value;
}

//제네릭함수로 만들면 이제 이 변수들은 반환값에 따른 올바른 타입이 결정됩니다
let num = func(10); //함수를 호출할 때 타입이 결정됩니다
let bool = func(true);

//호출 시점에 타입을 확정하고싶다면 이런식으로도 가능합니다
let arr = func<[number,number,number]>([1,2,3])