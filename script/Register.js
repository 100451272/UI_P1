
function validar(usuario, contrasena, expira) {
    let email = document.forms["Reg"]["email"].value;
    usuario = document.forms["Reg"]["username"].value;
    password = document.forms["Reg"]["password"].value;
    let repeat = document.forms["Reg"]["repeat"].value;
    comp = checkPass(password, repeat);
    const d = new Date();
    d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
    expira = "expires="+d.toUTCString();
    document.cookie = usuario + "=" + contrasena + ";" + expira + ";path=/";
  }

function checkPass(pass, repeat) {
    if (pass == repeat){
        return true;
    }
    return false;
}

function checkCookie(){
    let user = getCookie("username");
    alert(user);
}

function getCookie(username){
    let nombre = username + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    //to handle cookies with special characters, e.g. '$'
    let ca = decodedCookie.split(';');
    for(let i = 0; i<ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
    }
}