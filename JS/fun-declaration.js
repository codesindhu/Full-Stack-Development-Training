function demo(){
    console.log('Hello World');
}
//console.log(demo); -if u call only function name it will print entire function 
demo(); // Hello World


function sum(a,b){
    let c= a+b;
    return c;
    console.log("Hello");
    
}
console.log(sum(10,20)); //30
console.log(sum(10+10,10)); //30
console.log(sum(100,100)); //200


arithmeticOperations();
//Task : Create a Function it should perform Arithmetic operations for 2 numbers input should be taken from the end user
function arithmeticOperations() {
    let a = Number(window.prompt("Enter a value:"));
    let b = Number(window.prompt("Enter b value:"));
    let c= a+b;
    console.log("Sum =",c);
    let d = a-b;
    console.log("Sub =",d);
    let e = a*b;
    console.log("Mul =",e);
    let f = a/b;
    console.log("Div =",f);
    let g = a%b;
    console.log("Mod =",g);
}

//Assignment : Create a Function to find largest of three numbers input should be taken from the end user
largestNumber();

function largestNumber(){
    let a = Number(window.prompt("Enter a value:"));
    let b = Number(window.prompt("Enter b value:"));
    let c= Number(window.prompt("Enter c value:"));
    if(a>b && a>c){
        console.log("A is Largest Number");
    else if(b>a && b>c){
        console.log("B is Largest Number");
    else{
        console.log("C is Largest Number");
    }
}