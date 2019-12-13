let inputs = document.querySelectorAll('input'); // массив всех инпутов
inputs.forEach( function(input) {
  input.addEventListener("input", calculate);
} )

function calculate () {
    let k = document.getElementById('coefficient').value;
    let p = document.getElementById('force').value;
    let d = document.getElementById('diameter').value;
    let result = Math.ceil( k*p*1000*d/1000 );
    document.getElementById('result').value = result;
 }
