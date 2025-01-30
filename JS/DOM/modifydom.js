let a = document.createElement("h1")
	console.log(a)//<h1></h1>
	a.textContent = "hello" //<h1>hello</h1>

let b = document.body.appendChild(a)
a.style.backgroundColor = "yellow"


///creating the ol and li tags in div of id demo
let div = document.getElementById("demo")
console.log(div)//<div></div>;
div.style.border = "5px solid"

//create ol tag
let ol = document.createElement("ol")
console.log(ol)//<ol></ol>
//append ol to div
div.appendChild(ol)
//create li tag
let li1 = document.createElement("li")
console.log(li1)//<li></li>
li1.textContent = "react"
//append li to ol
ol.appendChild(li1)
//create li tag
let li2 = document.createElement("li")
console.log(li2)//<li></li>
li2.textContent = "node.js"
//append li to ol
ol.appendChild(li2)
//create li tag
let li3 = document.createElement("li")
console.log(li3)//<li></li>
li3.textContent = "angular"
//append li to ol
ol.appendChild(li3)
//setAttribute() method
ol.setAttribute("type","A") //type of list


//create 4x4 table using createElement() method
let table = document.createElement("table")
console.log(table)//<table></table>
table.setAttribute("border","2px solid black")
//append table to body
document.body.appendChild(table)
//create tr tag
let tr1 = document.createElement("tr")
console.log(tr1)//<tr></tr>
//append tr to table
table.appendChild(tr1)
//create td tag
let td1 = document.createElement("td")
console.log(td1)//<td></td>
td1.textContent = "html"
//append td to tr
tr1.appendChild(td1)
let td2 = document.createElement("td")
console.log(td2)
td2.textContent = "html"
tr1.appendChild(td2)
let td3 = document.createElement("td")
console.log(td3)
td3.textContent = "html"
tr1.appendChild(td3)
let td4 = document.createElement("td")
console.log(td4)
td4.textContent = "html"
tr1.appendChild(td4)
//row 2
let tr2 = document.createElement("tr")
console.log(tr2)
table.appendChild(tr2)
let td5 = document.createElement("td")
td5.textContent = "html"
tr2.appendChild(td5)
let td6 = document.createElement("td")
td6.textContent = "html"
tr2.appendChild(td6)
let td7 = document.createElement("td")
td7.textContent = "html"
tr2.appendChild(td7)
let td8 = document.createElement("td")
td8.textContent = "html"
tr2.appendChild(td8)
//row 3
let tr3 = document.createElement("tr")
console.log(tr3)
table.appendChild(tr3)
let td9 = document.createElement("td")
td9.textContent = "html"
tr3.appendChild(td9)
let td10 = document.createElement("td")
td10.textContent = "html"
tr3.appendChild(td10)
let td11 = document.createElement("td")
td11.textContent = "html"
tr3.appendChild(td11)
let td12 = document.createElement("td")
td12.textContent = "html"
tr3.appendChild(td12)
//row 4
let tr4 = document.createElement("tr")
console.log(tr4)
table.appendChild(tr4)
let td13 = document.createElement("td")
td13.textContent = "html"
tr4.appendChild(td13)
let td14 = document.createElement("td")
td14.textContent = "html"
tr4.appendChild(td14)
let td15 = document.createElement("td")
td15.textContent = "html"
tr4.appendChild(td15)
let td16 = document.createElement("td")
td16.textContent = "html"
tr4.appendChild(td16)
