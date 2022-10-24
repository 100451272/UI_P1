
function getCookie(cname) {
    //console.log(document.cookie);
    //Dividir en las dos cookies
    const c = document.cookie.split(';');
    //coger la info de Logged
    const log = c[0].split('=');
    //console.log(log);
    let logged = log[1];
    //coger la info de user
    const usr = c[1].split('=');
    const user_info = usr[1].split(',');
    let name = user_info[0];
    let password = user_info[1];
    return [logged, name, password];
  }

function validar(){
    let in_username = document.getElementById("username").value;
    let in_password = document.getElementById("password").value;
    let cookie_res = getCookie("Logged");
    console.log(in_username);

    if (in_username == cookie_res[1] && in_password == cookie_res[2]){
        document.cookie = "Logged=True";
        window.location.href = "./music3.html";
    }
    else {
        alert("Credenciales incorrectas");
    }
}



