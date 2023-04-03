//1.use strict는 added ECMAScript 5 선언되어있음
//조금더 상식적인 범위안에서 자바스크립트를 이용하게 해줌
//javaScript를 효율적으로 더 빠르게 분석할 수 있게해줌

'use strict'; 
console.log('hello world!');

//2.variable = 변수,rw (read/write) 메모리의 값을 읽고 쓰는게 가능 
//let (added in ES6)
let globalName = 'global name';
{
    let name = 'kim so ryeon';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

{
    age = 4;
    console.log(age);
    var age;
}
console.log(age); //{}밖에서도 값이 출력됨 이러면 안되는것임!

//3.Contant : 변경이 안되는 변수 , r(read 읽기만 가능)
//장점 : 보안상의 이유
const daysInWeek = 7;
const maxNumber = 5;



//4. Variable types 
//primitive, single item : number, string, boolean, null, nudifiendn, symbol
//object, box container
const count = 17;
const size = 17.1; 
console.log(`value: ${count}, type : ${typeof count}`);
console.log(`value: ${size}, type : ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); //Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn); //NaN

//bigInt 숫자 마지막에 n만 붙여주면됨
const bigInt = 12241343567899865433334325466768n; //-2**53 ~ 2*53 까지

//string
const char = 'char';
const brendan = 'brendan';
const greeting = 'hello' + brendan ;
console.log(`value : ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${greeting} !!`;
console.log(helloBob);
console.log('value:' + helloBob +   'type :' + typeof helloBob);

//boolean
//false : 0,null,undefined,NaN,;;
//true : any other value
const canRead = true;
const test = 4 < 1 //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

//5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log();console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log();console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5;
console.log();console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';