

const checkbox = document.querySelector("input");
const image = document.querySelector("img");



checkbox.addEventListener('change', function(event) {
    if (this.checked) {
        image.classList.remove('hidden');
    } else {
        image.classList.add('hidden');
    }
});







