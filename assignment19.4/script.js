
const body = document.body;

body.style.backgroundColor = '#8f8fff'
body.style.color = '#ffffff';

const h1 = document.createElement('h1');
h1.style.textAlign = 'center';
h1.style.fontSize = '30px';


const websites = [
    {
        text: 'search engine',
        href: 'https://www.google.com'
    },
    {
        text: 'cat video player',
        href: 'http://www.youtube.com'
    },
    {
        text: 'website to learn stuff',
        href: 'http://www.udemy.com'
    }
]

const ul = document.createElement('ul');
body.append(ul);
body.appendChild(h1);

for(let i of websites) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.asetAttribute('href', i.href);;
    a.innerText = i.text;
    a.style.textAlign = 'center';
    a.style.textDecoration = 'none';
    li.appendChild(a);
    ul.appendChild(li);
}   






