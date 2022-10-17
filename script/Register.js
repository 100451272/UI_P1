
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
    comp = checkPass(password, repeat);
    const d = new Date();
    d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    create_profile(username, password);
    document.cookie = "username" + "=" + username +"," + password + ";" + expires + ";path=/";
    alert(email + username + password);
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
