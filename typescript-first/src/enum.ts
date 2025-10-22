//Enum 타입
enum Role {    //여기에서 헷갈릴 수 있는 프로퍼티를 모읍니다
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

enum Lang {
    KOREA = 'ko',
    ENGLISH = 'en'
}

const user1 = {
    name: 'kim',
    role: Role.ADMIN, // 0-> 관리자
    lang: Lang.KOREA
}
const user2 = {
    name: 'Lee',
    role: Role.USER // 1-> 일반유저
}
const user3 = {
    name: 'Park',
    role: Role.GUEST // 3-> 게스트
}

console.log(user1, user2, user3)