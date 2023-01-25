

const ul = document.getElementsByTagName('ul');
const startHere = ul.getElementsByClassName('start-here');

startHere.innerText = "main title";

const subtitle4 = document.createElement('li');
subtitle4.innerText = "sub title 4";

const innerList = startHere.nextSibling.getElementsByTagName('ul');
innerList.appendChild(subtitle4);


ul.removeChild(ul.lastChild);

const title = document.getElementsByTagName('title');
title.innerText = "Master Of The Dom";


const div = ul.getElementsByTagName('div');
const p = div.getElementsByTagName('p');
p.innerText = 'Monkey D. Luffy';




