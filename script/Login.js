
function getCookie() {
    //console.log(document.cookie);
    const c = document.cookie.split(';');
    for (x=0;x<c.length; x++){
      const usr = c[x].split('=');
      const usr_info = usr[1].split(',');
      //console.log(usr_info);
      if (usr_info[4] == "NotLogged"){
        console.log(usr_info[0]);
        return usr_info;
      }
    }
    return "";
  }

  function saveCookie(username, user_info) {
    const c = document.cookie.split(';');
    for (x=0;x<c.length; x++){
      const usr = c[x].split('=');
      const usr_info = usr[1].split(',');
      //console.log(usr_info);
      if (usr_info[0] == username){
        console.log(usr_info[0]);
        user_info_join = user_info.join(',');
        usr_join = usr[0] + '=' + user_info_join + ';path=/';
        document.cookie = usr_join;
        return 1;
      }
    }
    return 0;
  }

function validar(){
    let in_username = document.getElementById("username").value;
    let in_password = document.getElementById("password").value;
    let user_info = getCookie();
    console.log(in_username);

    if (in_username == user_info[0] && in_password == user_info[1]){
        user_info[4] = "Logged";
        if (!saveCookie(user_info[0], user_info)){
            alert("Error");
        }
        window.location.href = "./music.html";
    }
    else {
        alert("Credenciales incorrectas");
    }
}



