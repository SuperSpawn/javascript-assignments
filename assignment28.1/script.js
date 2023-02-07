


const target = document.querySelector('p');


fetch('https://api.jokes.one/jod')
.then(function(res) {
    return res.json()
})
.then(function(res) {
    target.innerText = res.contents.jokes[0].joke.text;   
})
.catch(function(err) {
    console.log('failed to fetch');   
})

