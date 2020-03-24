'use strict';

let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.scrollWidth,
    height = box.scrollHeight;


console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

btn.addEventListener('click', function() {
    box.scrollTop = 0;
});

scrollBy(0, 200);
scrollTo(0, 200);