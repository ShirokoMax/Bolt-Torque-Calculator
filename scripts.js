 function calculate () {
    let k = document.getElementById('coefficient').value;
    let p = document.getElementById('force').value;
    let d = document.getElementById('diameter').value;
    let result = k*p*1000*d/1000;
    document.getElementById('result').value = result;
 }
