//first way of creating event
function event1(){
    console.log("Button1 clicked");
}

//second way of creating event
let btn = document.getElementById("demo");
console.log(btn); 

btn.onclick = function(e){
    console.log(e);
//     let res = Math.round(Math.random()*10000);
//     console.log(res);

    let res= Math.round(Math.random()*10000).toString(16);
    console.log(res);
    document.body.style.backgroundColor = `#${res}`;
}



//third way of creating event
