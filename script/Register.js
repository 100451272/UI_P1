
class profile{
    constructor(name, profilepic = "default"){
      this.name = name;
      this.profilepic = profilepic;
    }
  }

function validar() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let name = document.getElementById("name").value;
    let birth = document.getElementById("birth").value;
    let password = document.getElementById("password").value;
    let repeat = document.getElementById("repeat").value;
    let terms = document.getElementById("terms").value;
    if (!checkPass(password, repeat)){
        alert("Las contraseñas no coinciden");
        return 0;
    }
    if (email == "" || username == "" || name == "" || birth == "" || password == "" || !terms){
      alert("Todos los campos son obligatorios");
      return 0;
    }
    check_email(email);
    //create_profile(username, password);
    document.cookie = "username" + "=" + username +"," + password + "," + ";path=/";
    document.cookie = "Logged=True"
    window.location.href = "./music.html";
  }

function checkPass(pass, repeat) {
    if (pass == repeat){
        return true;
    }
    return false;
}

function check_email(email) {
  
}

function create_profile(name, password){
    text = '{"username" : "' + name + '", "password" : "' + password + '"}';
    const obj = JSON.parse(text);
}

function signal(){
  alert("I work");
}
