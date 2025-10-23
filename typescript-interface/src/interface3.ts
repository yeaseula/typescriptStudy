/**
 * 인터페이스 확장
 */

/**
 * name, age 중복이 벌써 네 개나 있습니다..
 * 인터페이스가 늘어날수록 힘들어집니다.
 */
function Func() {
    interface Animal {
        name:string;
        age: number;
    }

    interface Dog {
        name:string;
        age:number;
        isBark: boolean;
    }

    interface Cat {
        name:string;
        age:number;
        isScratch:boolean;
    }

    interface Chicken {
        name:string;
        age:number;
        isFly:boolean;
    }
}

function Func2() {
    interface Animal {
        name:string;
        age: number;
    }

    /**
     * 이렇게 상속 할 경우 Dog는 Animal의 서브타입이 됩니다.
     * 때문에 인터페이스 안의 속성 역시 원본 속성의 서브타입이어야 합니다.
     */
    interface Dog extends Animal {      //상속 받으면 중복코드가 제거!
        isBark: boolean;
    }

    interface Cat extends Animal {
        isScratch:boolean;
    }

    interface Chicken extends Animal {
        isFly:boolean;
    }

    interface DogCat extends Dog, Cat {
        //여러가지 인터페이스를 활용해 다중확장도 가능합니다.
    }

    const dog:Dog = {
        name: '',
        age: 12,
        isBark:true,
    }

    const dogcat:DogCat = {
        name:'',
        age:12,
        isBark:false,
        isScratch:true
    }
}