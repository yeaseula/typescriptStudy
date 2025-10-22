//void
//공허->아무것도 없다.

function func1():string {
    return "hello"
}

function func2():void {
    console.log("hello")    //반환값이 없습니다
}

//원칙적으로 void 타입에는 어떤 값도 들어갈 수 없습니다.
//undefined는 가능합니다.
let a:void;
a = undefined;

//* null, undefined를 사용하지 않는 이유는
//해당 타입으로 선언 할 경우 정말로 null, undefined를 반환해야 하기 때문입니다.

//never -> 불가능한 타입
function funcError():never {
    throw new Error();
}

//never 타입으로 정의 된 경우 null, undefined 포함 아무것도 담을 수 없습니다.