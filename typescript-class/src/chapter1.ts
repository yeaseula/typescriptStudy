/**
 * class
 */

const employee = {
    name: 'cat',
    age:10,
    position: 'cute',
    work() {
        console.log('야옹')
    }
}

class Employee {
    name:string;
    age:number;
    position:string;

    constructor(name:string,age:number,position:string) {
        this.name = name;
        this.age = age;
        this.position = position
    }

    work() {
        console.log('야옹')
    }
}

//상속
class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name:string, age:number, position:string, officeNumber:number) {
        super(name,age,position);
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee('dog',5,'cute')
//employeeB의 타입이 Employee가 되었음을 확인할 수 있습니다.
//class가 타입이 된다는 것입니다.

const employeeC:Employee = {
    name: '',
    age: 0,
    position:'',
    work(){}
}