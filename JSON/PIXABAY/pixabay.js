let btn = document.getElementById("btn")
console.log(btn);

btn.onclick =() =>{
    let search = document.getElementById("search").value
    console.log(search);
    let page =10
    window.fetch(`https://pixabay.com/api/?key=45354948-20a6adde40dd251047b050618&q=${search}&image_type=photo&pretty=true&per_page=${page}`)
    .then((data)=>data.json())
    .then((res)=>{
        console.log(res);
        console.log(res.hits);
        //map() method
        res.hits.map((x)=>{
            console.log(x);
        let demo = document.getElementById("demo")
        console.log(demo);
        demo.innerHTML +=  `<img src=${x.previewURL} />`
            
        })
    })

}


let btn1 = document.getElementById("btn1")
console.log(btn1);

btn1.onclick =() =>{
    let search1 = document.getElementById("search1").value
    console.log(search1);
    let page1 =10
    window.fetch(`https://pixabay.com/api/videos/?key=45354948-20a6adde40dd251047b050618&q=${search1}&per_page=${page1}`)
    .then((data1)=>data1.json())
    .then((res1)=>{
        console.log(res1);
        console.log(res1.hits);
        //map() method
        res1.hits.map((x1)=>{
            console.log(x1);
        let demo1 = document.getElementById("demo1")
        console.log(demo1);
        demo1.innerHTML +=  `<img src=${x.previewURL} />`
            
        })
    })

}
