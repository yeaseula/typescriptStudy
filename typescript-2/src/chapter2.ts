/**객체 타입간의 호환성
 * 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?
 *
 */

type Animal = {
    name:string;
    color:string;
}

type Dog = {
    name:string;
    color:string;
    breed:string;
}

let animal : Animal = {
    name:'기린',
    color:'yellow'
}
let dog: Dog = {
    name: '진도',
    color: 'brown',
    breed: '개'
}

/**객체는 property를 기준으로 슈퍼/서브를 결정합니다
 * animal = dog;
    dog = animal; // 이건 error 발생합니다
 */


type Book = {       //여기가 슈퍼타입
    name: string;
    price: number;
}

type ProgrammingBook = {    //여기가 서브타입이 됩니다
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let ProBook: ProgrammingBook = {
    name: '북',
    price: 12000,
    skill: '얍'
}

book = ProBook
//ProBook = book // 이건 다운캐스팅이 되기때문에 불가합니다