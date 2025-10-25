/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

//CharacterInterface를 구현하는 Character 클래스
class Character implements CharacterInterface {

    //interface로 정의한경우 무조건 public이 됩니다
    constructor(public name: string, public moveSpeed: number) {
        this.name = name;
        this.moveSpeed = moveSpeed
    }

    move(): void {

    }
}