
const inputContainer = document.querySelector('.input .input-container');
const firstInput = inputContainer.querySelector('input');
firstInput.addEventListener('paste', function(event) {
    let clipboardData, pasteData;
    event.preventDefault();

    clipboardData = event.clipboardData || window.clipboardData;
    pasteData = clipboardData.getData('Text');

    alert(pasteData);
});






