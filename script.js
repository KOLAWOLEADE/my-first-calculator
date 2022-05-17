//###################################################################




//Business logic for my calculator 

function add(number1, number2) {
return  number1+number2
}

// alert(add(10,12))

let number1 = parseInt(prompt(" type any number" ));
let number2 = parseInt(prompt(" type another number"));
        

// invoking on the function 

document.write(add(number1,number2));

 //

 function sub( number3, number4 ){
     return number3-number4
 }

 let number3 = parseInt(prompt("input number"));
 let number4=  parseInt(prompt("input your number"));


 alert(sub(number3, number4));
 document.write(sub(number3, number4));
 console.log(sub(number3, number4))

 //

 function multiply(x, y){
     return x * y

 }

 let x = parseIntprompt(" input value" );
 let y = parseIntprompt( "input value" );

 alert(multiply(x, y));
 document.write(multiply(x, y));
 console.log(multiply(x, y));

 //division function

 function division( n, o){
     return n/o
 }


 let n = parseInt(prompt(" type first number "));
 let o = parseInt(prompt(" type second number")); 

 alert(division( n, o ));
 document.write(division( n, o));
console.log(division( n, y));

// modulus function
function modulus( a,b ){
    return a % b
}

let a = parseInt(prompt(" my number"));
let b = parseInt(prompt( "my other number"));

alert(modulus( a, b));
document(modulus( a, b));
console.log(modulus( a, b));
