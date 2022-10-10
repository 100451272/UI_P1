
function validar() {
    let email = document.forms["Reg"]["email"].value;
    let username = document.forms["Reg"]["username"].value;
    let password = document.forms["Reg"]["password"].value;
    let repeat = document.forms["Reg"]["repeat"].value;
    comp = checkPass(password, repeat);
    const d = new Date();
    d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = username + "=" + password + ";" + expires + ";path=/";
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