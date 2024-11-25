function saveText() {
    const textInput = document.getElementById('name').value;
    localStorage.setItem('Saved Input', textInput);

    document.getElementById('name').value = ''; 
}

function retriveText() {
    const savedInput = localStorage.getItem('Saved Input');

    if (savedInput) {
        document.getElementById('output').innerHTML = savedInput; 
    } else {
        alert('No saved text found');
    }
}
