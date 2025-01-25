// //first way of creating event
// function event1(){
//     console.log("Button1 clicked");
// }


//second way of creating event
// let btn = document.getElementById("demo");
// console.log(btn); 

// btn.onclick = function(e){
//     console.log(e);
// //     let res = Math.round(Math.random()*10000);
// //     console.log(res);

//     let res= Math.round(Math.random()*10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor = `#${res}`;
//     document.body.style.transitionDuration = None;
// }
// let btn1 = document.getElementById("demo1");
// console.log(btn1);
// let color = window.prompt("Enter any color name:");
// console.log(color);
// btn1.innerHTML = color;
// btn1.onmouseover = () => {
//     document.body.style.backgroundColor = `${color}`;
//     document.body.style.transitionDuration = "2s";
// }


// third way of creating event
let video = document.getElementById("demo2");
console.log(video);

video.addEventListener("click", ()=>{
    let res = video.classList.toggle("active");
    if(res){
        video.play();
    }else{
        video.pause();
    }
});


let demo4 = document.getElementById("demo4");
console.log(demo4);

demo4.addEventListener("click", ()=>{
    let demo3 = document.getElementById("demo3").value;
    console.log(demo3);

    let speech = new SpeechSynthesisUtterance();
    console.log(speech);
    speech.text = demo3;
    speechSynthesis.speak(speech);
});

