
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
    if (check_email(email) == 0){
      alert("email no válido");
      return 0;
    }
    //create_profile(username, password);
    document.cookie = email + "=" + username +"," + password + "," + name + "," + 
                       birth + "," + "Logged;path=/";
    window.location.href = "./music.html";
  }

function checkPass(pass, repeat) {
    if (pass == repeat){
        return true;
    }
    return false;
}

function check_email(email) {
  console.log("email");
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regex.test(email)){
      return 0;
    }
    console.log(document.cookie);
    if (document.cookie == email){
      return 0;
    }
}

function create_profile(name, password){
    text = '{"username" : "' + name + '", "password" : "' + password + '"}';
    const obj = JSON.parse(text);
}

function signal(){
  alert("I work");
}
