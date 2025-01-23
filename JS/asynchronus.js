// asynchornous function
// function main(m,n){
//     setTimeout(() => {
//         for(let i=m;i<=n;i++){
//             console.log(i);
//         }
//     }, 5000);
	
// }
// main(1,10)

// function sample(){
//     console.log("no's printed");

// }
// sample()

//promise keyword
function main(m,n){
   new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(isNaN(m) || isNaN(n)){
            reject();
        }
        for(let i=m;i<=n;i++){
            console.log(i);
        }
        resolve();
    }, 5000);
   })
   .then(()=>console.log("Promise is resloved"))
// .then(()=>console.log(10*10))---- promise chaining
   .catch(()=>console.log("Error occured"))
}
//main(1,"10a")
main(1,10)
function sample(){
    console.log("no's printed");

}
sample()