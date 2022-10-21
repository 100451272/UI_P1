
class profile{
    constructor(name, profilepic = "default"){
      this.name = name;
      this.profilepic = profilepic;
    }
  }

function validar() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let repeat = document.getElementById("repeat").value;
    if (!checkPass(password, repeat)){
        alert("Las contraseñas no coinciden");
        return 0;
    }
    //create_profile(username, password);
    document.cookie = "username" + "=" + username +"," + password + ";path=/";
    document.cookie = "Logged=True"
    window.location.href = "./music.html";
  }

function checkPass(pass, repeat) {
    if (pass == repeat){
        return true;
    }
    return false;
}

function create_profile(name, password){
    text = '{"username" : "' + name + '", "password" : "' + password + '"}';
    const obj = JSON.parse(text);
}
