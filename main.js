let eyeicon = document.getElementById('eye');
let passw = document.getElementById('pass');
eyeicon.onclick = function () {
    if(passw.type == 'password'){
        passw.type = 'text';
        eyeicon.src = 'eye-open.png'
    }else{
        passw.type = 'password';
        eyeicon.src = 'eye-close.png'
    }
}