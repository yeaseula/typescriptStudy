//Unknown 타입 : 모든 타입의 슈퍼타입

function unknownExam() {
    let a:unknown = 1;
    let b:unknown = true;
    let c:unknown = null;

    let unknownVar:unknown;
    //let num:number = unknownVar; //error

    /**unknown 타입은 최상위에 있기때문에
     * 다운캐스팅이 불가능합니다.
     */
}

//never 타입 : 불가능, 모순을 의미. 모든 타입의 서브타입

function neverExam() {
    function neverFunc():never {
        while(true) {

        }
    }

    //업캐스팅은 가능합니다
    let num:number = neverFunc();
    let str:string = neverFunc();

    //하지만 어떤 값도 never 타입에 담길 수 없습니다.
}

//void

function voidExam() {
    function voidFunc(): void{
        console.log('test')
    }
    let voidVar:void = undefined;

    //void는 undefined의 슈퍼타입이기때문에 담을 수 있습니다.
}

//any

function anyExam() {
    let unknownVar: unknown;
    let anyVar:any;
    let undefinedVar:undefined;
    let neverVar:never;

    anyVar = unknownVar
    //any 타입은 unknown 타입도 다운캐스팅되도록 만듭니다
    undefinedVar = anyVar
    //스스로도 다운캐스팅 할 수 있습니다

    //neverVar = anyVar //never는 안됩니다.
}