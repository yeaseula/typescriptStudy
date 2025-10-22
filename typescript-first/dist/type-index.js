//주의 : 동일 스코프에 동일한 이름의 타입별칭 선언 불가
let user = {
    id: 1,
    name: '양',
    nickname: 'string',
    bio: 'male',
    phone: 125421,
};
// 어차피 국가 코드는 string 타입으로 동일합니다
// 아래 객체에서 key와 value 모두 string 타입입니다
// key, value 모두 string 타입이라면 모두 허용하도록 만들 수 있습니다
let countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    Japan: 'ja'
};
let countryNumberCodes = {
    Korea: 410,
    UnitedStates: 840,
    UnidedKingdom: 826
};
export {};
