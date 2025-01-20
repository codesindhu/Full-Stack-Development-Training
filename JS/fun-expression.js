let demo = function(){
    console.log('Hello');
}
console.log(demo); // complete function code is printed

demo(); // Hello

let operator = function(a){
 console.log(a);
 //console.log(arguments);
 console.log(arguments[1]);
 console.log(arguments[2]);
}
operator(10,20,30); // 10,20,30

//Task :  Create a function expression arthimetic operation for 3 numbers and find the largest of 3 numbers input should be taken from end user.
let arthimetic = function(){
    let a = Number(window.prompt('Enter a value'));
    let b = Number(window.prompt('Enter b value'));
    let c = Number(window.prompt('Enter c value'));
    let sum = a+b+c;
    console.log('Sum of 3 numbers is : '+sum);
    let sub = a-b-c;
    console.log('Sub of 3 numbers is : '+sub);
    let mul = a*b*c;
    console.log('Mul of 3 numbers is : '+mul);
    let div = a/b/c;
    console.log('Div of 3 numbers is : '+div);
    if(a>b && a>c){
        console.log('A is greater');
    }else if(b>a && b>c){
        console.log('B is greater');
    }else{
        console.log('C is greater');
    }
}
arthimetic();

