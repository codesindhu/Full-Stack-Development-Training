
 //Creation of array

//decleration way
let arr = [10,20,"hello",true];
console.log(arr);

//new keyword
let arr1 = new Array(10,20,"hello",true);
console.log(arr1);


                        //Object creation
//delcaration way
let obj = { 
    name : 'abhi',
    id : 1,
    arr : [10,20,true],
    boolean : true,
    demo : function()
        {
          console.log("hello");
        }
}
console.log(obj);
console.log(obj.name);//abhi
console.log(obj.arr);
obj.demo()  //hello

// by using constrocutor function
function obj1(name,id)
{
    this.name = name;
    this.id = id;
}
let p1 =new obj1('abhi',1);
console.log(p1.name);
console.log(p1.id);
