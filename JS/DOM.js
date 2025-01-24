// console.log(window);
// console.log(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);

// document.title = 'DOM Class';
// console.log(document.title);
// console.log(document.body);

let img = document.images;
console.log(img);

// console.log(img[0]);
// console.log(img[1]);
// console.log(img[2]);

for (let i = 0; i < img.length; i++) {
    console.log(img[i]);
    img[i].style.height = '200px';
    img[i].style.width = '200px';
    img[i].style.borderRadius = '100%';
    img[i].alt = 'Image';
}

let anchors = document.links;
console.log(anchors);
for (let i = 0; i < anchors.length; i++) {
    console.log(anchors[i]);
    anchors[i].style.color = 'blue';
    anchors[i].style.fontWeight = 'bold';
}

// indirect access methods
// 1)documet.getElementById("value")
// 2)document.getElementByClassName("value")
// 3)document.getElementsByTagName("value")
// 4)document.getElementsByName("value")
// 5)document.querySelector("value")
// 6)document.querySelectorAll("value")

let a = document.getElementById('demo');
console.log(a);
console.log(a.textContent);
a.textContent = 'Heading';
a.style.backgroundColor = 'yellow';
a.style.textAlign = 'center';

// 2) getElementsByClassName
let a1 = document.getElementsByClassName('demo1');
console.log(a1); //HTML Collection
console.log(a1[0]);
console.log(a1[0].textContent);
a1[0].textContent = 'Hello world';
a1[0].style.color = 'red'; 
console.log(a1[1].textContent);
a1[1].textContent = 'Hi';
a1[1].style.color = 'green';

// 3) getElementsByTagName
let b = document.getElementsByTagName('ol');
console.log(b);// HTML Collection
console.log(b[1].textContent);
b[1].style.backgroundColor = 'crimson';

// 4) getElementsByName
let c = document.getElementsByName('demo2');
console.log(c); // NodeList
console.log(c[1]);
c[0].textContent = 'Updated Span Content';
c[0].style.color = 'blue';

// 5) querySelector
let d = document.querySelector('#demo');
console.log(d); // The first element with the class "deom"
d.style.textDecoration = 'underline';

let d1 = document.querySelector('.demo1');
console.log(d1); // The first element with the class "demo1"



// 6) querySelectorAll
let e = document.querySelectorAll('#demo');
console.log(e); // NodeList of elements with class "demo"
console.log(e[0]);

let e1 = document.querySelectorAll('.demo1');
console.log(e1); // NodeList of elements with class "demo1"
console.log(e1[1]);
