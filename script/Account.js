
function getCookie() {
    const c = document.cookie.split(';');
    for (x=0;x<c.length; x++){
      const usr = c[x].split('=');
      const usr_info = usr[1].split(',');
      if (usr_info[4] == "Logged"){
        return [usr[0], usr_info];
      }
    }
    return "";
  }

function getInfo(){
    let user_info = getCookie();
    //Email
    $("input[name=email]").val(user_info[0]);
    //Username
    $("input[name=username]").val(user_info[1][0]);
    //Name
    $("input[name=name]").val(user_info[1][2]);
    //Birth Day
    $("input[name=birth]").val(user_info[1][3]);
    //Password
    $("input[name=password]").val(user_info[1][1]);

}

function saveCookie(){
    let email = $("input[name=email]").val();
    let username = $("input[name=username]").val();
    let name = $("input[name=name]").val();
    let birth = $("input[name=birth]").val();
    let password = $("input[name=password]").val();
    
    document.cookie = email + "=" + username +"," + password + "," + name + "," + 
                       birth + "," + "Logged;path=/";
    window.location.href = "./music.html";
}