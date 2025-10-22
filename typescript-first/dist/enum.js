//Enum 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Lang;
(function (Lang) {
    Lang["KOREA"] = "ko";
    Lang["ENGLISH"] = "en";
})(Lang || (Lang = {}));
const user1 = {
    name: 'kim',
    role: Role.ADMIN, // 0-> 관리자
    lang: Lang.KOREA
};
const user2 = {
    name: 'Lee',
    role: Role.USER // 1-> 일반유저
};
const user3 = {
    name: 'Park',
    role: Role.GUEST // 3-> 게스트
};
console.log(user1, user2, user3);
export {};
