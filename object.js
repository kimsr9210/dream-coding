'use strict';

//프리미티 타입 (object) : 변수하나당 값을 하나만 담을 수 있음
//이름과 나이를 각각 파라미터로 전달해 주어야함 
//함수를 정의해서 쓸때도 두가지의 파라미터를 받아 올 수있도록 만들어야함
//object는 key와 value 의 집합체 이다
//object = {key : value};
//key : 접근할수 있는 변수 value : 값 

//1. Literals and properties
//object 만드는 방법 2가지 
const obj1 = {};
const obj2 = new Object(); 

function printObject(umji){
    console.log(umji.name);
    console.log(umji.age);
}
const umji = {name : 'Umji', age : 19};
printObject (umji)

//2. 계산된 프로퍼티 : Object['key']
//object 접근 방법 2가지
//.(도트를 이용해서 접근)
//[''] 프로퍼티는 스트링 타입으로 해야함
console.log(umji.name); //키에 해당하는 값을 받아오고 싶을때 사용 
console.log(umji['name']); //정확하게 어떤키가 필요한지 모를때 사용 //동적으로 키의 값을 받아 올때 사용함 

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(umji,'name');
printValue(umji,'age');


//3. Property value shorthand
//함수를 이용해서 값만 전달 
const person1 = {name : 'umji', age : 19};
const person2 = {name : 'cheese', age : 9};
const person3 = makePerson('mizoo' , 8);
console.log(person3);
console.log(person3.name)

//js에 class가 없을때에는 아래의 방법을 사용햇엇음
function makePerson(name, age){
    return {
        name : name,
        age //js는 key와 value가 같다면 생각 가능 
    }
}

//4. Constuctor Function 
//순수하게 object만 계산하는 함수는 대문자로 시작 return 생략가능 
function Person(name, age){
    //this = {} //생략 가능
    this.name = name;
    this.age = age ;
    //return this; //생략가능
}
console.log(Person);

//5. in operator (key in obj)
console.log('name' in umji);

//5. for..in vs for..of
//for(key in obj)
console.clear(); // 이전것들 싹 지워짐
for(key in umji){
    console.log(umji);
    console.log(ellie);
}
