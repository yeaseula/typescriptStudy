/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로 만든 유니온 타입
 */

type Admin = {
    tag: "ADMIN"
    name: string;
    kickCount: Member;
}

type Member = {
    tag: "MEMBER"
    name: string;
    point: number;
}

type Guest = {
    tag:"GUEST"
    name: string;
    visitCount: number;
}

type User = Admin | Member | Guest;

// Admin -> name님, 현재까지 kickCount명 강퇴했습니다
// Memeber -> name님, 현재까지 point 모았습니다.
// Guest -> name님, 현재까지 visitCount번 오셨습니다.
function login(user:User) {
    //아래와 같은 코드는 작성자 외에는 쉽게 알아볼 수 없습니다.
    // if('kickCount' in user) {
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
    // } else if ('point' in user) {
    //     console.log(`${user.name}님 현재까지 ${user.point} 모았습니다`)
    // } else {
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`)
    // }
    if(user.tag === 'ADMIN') {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
    } else if (user.tag === 'MEMBER') {
        console.log(`${user.name}님 현재까지 ${user.point} 모았습니다`)
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`)
    }
}

/**
 * 비동기 작업의 결과를 처리하는 객체를 만들 때 서로소 유니온타입을 이용할 수 있습니다
 */

type LoadingTask = {
    state: "LOADING";
}

type FailedTask = {
    state: 'FAILED';
    error: {
        message: string
    }
}

type SuccessTask = {
    state: "SUCSSESS";
    response: {
        data: string;
    }
}

type AsyncTasc = LoadingTask | FailedTask | SuccessTask

// type AsyncTasc = {
//     state: "LOADING" | "FAILED" | "SUCSSESS";
//     error?: {
//         maesage: string;
//     };
//     response?: {
//         data: string;
//     }
// }

function processResult(task:AsyncTasc){
    switch(task.state){
        case 'LOADING':{
            console.log('로딩중')
            break
        }
        case 'FAILED':{
            console.log(`에러발생: ${task.error.message}`)
            break
        }
        case 'SUCSSESS':{
            console.log(`에러발생: ${task.response.data}`)
            break
        }

    }
}

const loading:AsyncTasc = {
    state: "LOADING"
}

const failed:AsyncTasc = {
    state: "FAILED",
    error: {
        message: '오류발생이요'
    }
}

const seccess:AsyncTasc = {
    state: "SUCSSESS",
    response : {
        data: "데이터~"
    }
}