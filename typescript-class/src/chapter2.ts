/**
 * 접근 제어자
 * => public private protected
 */

class Employee {
    private name:string;
    protected age:number;
    position:string;


    //생성자에 접근제어자 설정 시
    //필드에서 중복 설정하면 안됩니다
    constructor(name:string,age:number,position:string) {
        this.name = name;
        this.age = age;
        this.position = position
    }

    work() {
        console.log(`${this.name}`)
    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name:string, age:number, position:string, officeNumber:number) {
        super(name,age,position);
        this.officeNumber = officeNumber;
    }

    func() {
        //private 설정 시 파생 클래스에서도 접근 불가합니다
        this.name;
        //protected 설정 시 외부에서는 접근 불가하지만
        //파생 클래스에서는 접근 가능합니다
        this.age;
    }
}

const employee = new Employee('cat',28,'developer')

//public 자유롭게 접근, 수정 가능합니다

//private 외부에서  접근 자체가 불가합니다
//class 내부에서만 접근 가능합니다
employee.name = 'dog'
employee.age = 10