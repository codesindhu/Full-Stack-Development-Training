// let obj = {
//     "name":'abhi',
//     "id" : 1,
//     "designation":'developer'
// }
// console.log(obj);

// let obj1 = JSON.stringify(obj)
// console.log(obj1);

// let obj2 = JSON.parse(obj1)
// console.log(obj2)

// Fetching JSON or API in three ways

// 1) By using fetch() method
window.fetch("data.json")
.then((data)=>data.json())
.then((res) => {
    console.log(res);
    // console.log(res[0])
    // console.log(res[1])
    // console.log(res[2])
    res.map((x)=>{
        console.log(x)
        console.log(x.name)
        console.log(x.id)

        document.body.innerHTML += `<h1>${x.name}</h1>`
        document.body.innerHTML += `<h1>${x.id}</h1>`
        document.body.innerHTML += `<h1>${x.designation}</h1>`
    }) 
})
.catch(()=>console.log("Error Occured"))

// 2) By using Ajax
async()=>{
    let data = await fetch("data.json")
    console.log(data);
    let res = await data.json()
    console.log(res)
    res.map((res)=>{
        console.log(res)
        document.body.innerHTML += `<h1>${res.name}</h1>`
        document.body.innerHTML += `<h1>${res.id}</h1>`
        document.body.innerHTML += `<h1>${res.designation}</h1>`

    })

    
}
// 3) By using Axios