//object
//type을 object로 정의하면 안에 담긴 내용은 확인불가
// let user:object = {
//     id:1,
//     name:'cat'
// }

//객체 리터럴 타입으로 정의
let user: {          //객체의 구조 기준으로 타입을 정의합니다 -> 구조적 타입 시스템
    id: number;
    name: string;
    email?:string;   //선택적 프로퍼티의 경우 ? 로 표기합니다
} = {
    id:1,
    name:'cat'
}

const userId = user.id;


let config: {
    readonly apiKey: string     //수정되면 안되는 프로퍼티는 readonly를 활용, 읽기 전용으로 만듭니다
} = {
    apiKey: "MY KEY"
}