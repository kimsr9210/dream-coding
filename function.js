'use strict';
//Function
//Function 사용방법 
//function 이름 (파라미터){  return; }
//하나의 함수는 한가지의 일만 하도록 만들어야함
//함수의 이름을 작성할때는 무언가는 동작하는 것이기 때문에 동사형태로 이름을 지정해야함 
//javaScript에서 function은 object임

function printHello(){
    console.log('hello');
}

function log (message){
    console.log(message);
}
log('Hello');

//2. Parameters
function changeName(obj){
    obj.name = 'coder'; //전달된 이름을 무조건 coder로 변경하는 함수
    console.log(`함수 출력 : ${obj.name}`)
}
const ellie = {name : 'ellie'}; //ellie 라는 object를 만들어서 할당
changeName(ellie);
console.log(`콘솔출력 1 + ${ellie.name}`);
console.log(`콘솔출력 2 + ${ellie.name}`);
console.log(`콘솔출력 3 + ${ellie}`);

//3. Default parameter (added in ES6)
function showMessage1(message, from){
    console.log(`${message} by ${from}`);
}

function showMessage2(message, from){
    console.log(`${message} by ${from}`);
}

function showMessage3(message, from){
    if(from === undefined){
        from = '파라미터 from을 김소련으로 변경해주세요?'
    }
    console.log(`${message} by ${from}`);
}

function showMessage4(message, from = '파라미터 값이 없으면 치즈로 변경해주세요!'){
    console.log(`${message} by ${from}`);
}
showMessage1('Hi'); //파라미터 message 1개만 전달됨
showMessage2('Hi','soryeon'); 
showMessage3('Hi'); 
showMessage4('Hi'); 

//4. Rest parameters (added in ES6) ... 은 레스트파라미터로 전달됨
//Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
function printAll(...args){
    for(let i = 0 ; i < args.length; i ++){
        console.log(args[i]);
    }
    for (const arg of args){
        console.log(`☆ 간단하게 출력하는 방법 : ${arg}`);
    }
    
    args.forEach((arg) => console.log(`☆☆☆ 더더욱 간단하게 출력하는 방법 ${arg}`));
}
printAll('dream','coding','ellie'); //배열형태로 전달

//5. Local scope
//js에서 스코프란, 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수잇다.
//블록안에 선언된 변수는 지역변수임 블록 안에서만 접근이 가능

//6. Return a value
//함수에서는 파라미터 값을 받아서 계산된 값을 리턴할 수 있다.
function sum(a,b){
    return a+b;
}
const result = sum(1,2)//3
console.log(`sum : ${result}`);

//7.현업에서 많이 쓰는 방법
//빠른 리턴, 빨리 종료 
//bad
function upgradeUser(user){
    if(user.point >10){
    // long upgrade logic....
    //블록안에서 로직을 많이 작성하면 가독성이 떨어짐
    //if else를 번갈아 가면서 쓰는것은 좋지 않음
    }
}

//조건이 맞지 않다면 빨리 리턴을해서 함수를 종료하고 조건이 맞을때만 
//필요한 로직을 실행하는것이 더 좋음
//good
function upgradeUser(){
    if(user.point >10){
        return;
    }
}

//펑션은 다른변수와 마찬가지로 변수에 할당이되고 파라미터로 전달이되며 리턴값으로 리턴이 된다.
//1. Function expression (익명함수)
//a function declaration : 호이스트 가능 (hoisted 호이스트) 함수가 선언되기 이전에 호출해도 호출이 가능 선언된것을 제일 위로 올려줌
//a function expression : 할당된 다음부터 호출이 가능
const print = function (){ //anonymous function 이라고 부른다. 함수를 print변수에 할당
    console.log('print');
}
print(); //print란 변수에 함수를 호출하면 출력이됨
const printAgain = print; //또 다시 다른변수에 할당할 수 있음
const sumAgain = sum;
console.log(sumAgain(1,3));

//Callback function using function expression (콜백함수)
function randomQuiz(answer,printYes,printNo){
    if(answer === 'love you'){
        printYes();//콜백함수 호출
    }else{
        printNo();
    }
}

//anonymous function
const printYes = function(){
    console.log('yes!');
};

//named function
//디버깅을할때 함수이름 나오게 쓰도록 씀 
const printNo = function print (){
    console.log('no!');
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

//Arrow function
//함수를 간결하게 만들어주는 애임 
//function 키워드 생략가능
const simplePrint = () => console.log('심플한 함수 호출!');

//보통의 function
const printFunction = function(){
    console.log('simplePrint!');
 };

//심플한 함수
//한줄인 경우에는 { }블럭없이 작성 
 const add1 = (a,b) => a+b;

 //심플한함수 
 //블럭이 필요한 경우일때 대신 return 을 꼭 써주어야함
const add2 = (a,b) => {
 console.log('블럭이 있는 심플한 함수');
 return a*b;
};

 //보통의 함수
 const add3 = function (a,b) {
    return a+b;
 };

 //IIFE 
 //함수 선언 동시에 호출 하는법
 (function hello1() {
    console.log('IIFE');
 })();

 const hello2 = (() => console.log('간단한 함수 호출 되는건가요?'))();