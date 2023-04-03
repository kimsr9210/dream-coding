//1. String conatenation
console.log('my' + 'cat');
console.log(`string literals: 1+2 = ${1+2}`);

//2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2**3); //2에 3승

//3. 
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1; 과 같다
//preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter: ${counter}`);

//4. Assignment operators 
let x = 3;
let y = 6;
x += y ; // x=x+y;
x -= y ;
x *= y ;
x /= y ;

//5. Comparison operators
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 =  4 < 2;

// || (or)
//console.log(`or:${value1 || value2 || check()}`);

//&& (and)
//console.log(`or:${value1 && value2 && check()}`);
//if(nullableObject !=null){
//    nullableObject.someting;
//}

// ! (not)
console.log(!value1);

//7. Equlity 
const stringFive = '5';
const numberFive = 5;

// --loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//===strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = {neme : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2 );
console.log(ellie1 === ellie2 );
console.log(ellie1 === ellie3 );

console.log(0==false); //t
console.log(0===false); //f
console.log(''==false); //t
console.log(''===false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

//8. Conditional 
const myName = 'coder';
if (myName === 'ellie'){
    console.log('Welcome, Ellie!');
}else if (myName === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unkwnon');
}

//9. Ternary operator: ? 
//if를 좀더 간단하게 사용하는 방법
//condition ? value1 : value2;
console.log(myName==='ellie'?'yes':'no');

//10. Switch statement
const browser = 'IE';
switch (browser){
    case 'IE' : 
        console.log('go away!');
        break;
    case 'Chrome' :
        console.log('love you');
        break;
    default : 
    console.log('same all');
        break;
}

//11. Loops
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

//for loop
for(let i = 3; i > 0 ; i = i - 2){
    console.log(`for:${i}`);
}