'use strict';
//class : template에 속함
//template를 이용해서 실제로 데이터를 넣는것이 object 임
//하지만 js에서는 class도입된지 얼마 안됨.
//ES6에서 도입됨 그전엔 object를 사용햇음

//1. class 만드는 방법
class Person {
    //constructor
    constructor(name,age){ //컨스트럭터 안에는 이름과 나이가 전달됨
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`); //클래스에 있는 this.name 을 출력하면서 hello도 출력함 
        //this는 --> 생성된 object.name 엘리의 이름이 출력됨 
    }
}

//새로운 object를 만들때에는 new라는 키워드를 쓴다
const ellie = new Person ('ellie',20); //object가 만들어집니다.
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
//get을 통해 값을 리턴하고
get age(){
    return this._age;
}
//set을 통해 값을 설정
//set은 값을 설정하기 때문에 value를 받아와야함
set age(value){
    // if(value < 0){
    //     throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
}

}

const user1 = new User('soryeon', kim, -1);
console.log(user1.age);

//5. 클래스 상속
class Shape{
    constructor(){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape { //필요한 함수만 함수재정의 가능 (다양성) 오버라이딩  
    draw(){
        super.draw(); //부모 함수 호출
        console.log('트라이앵글 클래스의 draw 함수 : 🔺');
    }

    getArea(){
        return (width * this.height) /2;
    }
}

const rectangle = new Rectangle (20,20,'blue');
rectangle.draw(); //함수 호출
const triangle = new Triangle (20,20,'red');
triangle.draw();

//6. Class cheking : instanceOf 
//왼쪽에있는 오브젝트가 오른쪽에 있는 클래스의 인스턴스 인지 아닌지 
//오브젝트가 클래스를 이용해서 만들어진 것인지 아닌지 확인하는것
//true flase 반환
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Object);
