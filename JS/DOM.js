console.log(window);
console.log(document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);

document.title = 'DOM Class';
console.log(document.title);
console.log(document.body);

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
