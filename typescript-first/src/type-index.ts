//타입 별칭
type User = {       //중복코드 제거 가능
    id:number;         //js 컴파일 결과 type은 사라집니다
    name:string;
    nickname:string;
    bio:string;
    phone:number;
}

//주의 : 동일 스코프에 동일한 이름의 타입별칭 선언 불가

let user:User = {
    id:1,
    name:'양',
    nickname:'string',
    bio:'male',
    phone:125421,
}

//인덱스 시그니처
type countryCodes = {
    // Korea: string;
    // UnitedState: string;
    // Japan: string;
    [key: string] : string
}
// 어차피 국가 코드는 string 타입으로 동일합니다
// 아래 객체에서 key와 value 모두 string 타입입니다
// key, value 모두 string 타입이라면 모두 허용하도록 만들 수 있습니다

let countryCodes: countryCodes = {
    Korea : 'ko',
    UnitedState: 'us',
    Japan: 'ja'
}

//연습!

type CountryNumberCodes = {
    [key: string]: number;
}

let countryNumberCodes:CountryNumberCodes = {
    Korea: 410,
    UnitedStates: 840,
    UnidedKingdom: 826
}