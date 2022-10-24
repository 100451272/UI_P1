class profile{
  constructor(name, profilepic = "default"){
    this.name = name;
    this.profilepic = profilepic;
  }
}

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
    return [logged, name];
  }

  function checkCookie() {
    let cookie_res = getCookie("Logged");
    console.log(cookie_res);
    let logged = cookie_res[0];
    console.log(logged)
    if (logged != "True"){
      //alert("Please register");
      return 0;
    }
    //console.log(profilename);
    let profilename = cookie_res[1];
    if (profilename == "") {
      alert("Please register");
      return 0;
    }
    //alert("Cookie encontrada");

    login = $("#login");
    register = $("#register");

    login.hide();
    register.hide();

    $("footer").hide();

    user = $("#userlog");
    user.show();

    username = $("#profilename");
    username.text(profilename);
    profilename = profilename.replace(/\s+/g, "");

    pic = "./images/profile/" + profilename + ".png";
    console.log(pic);
    userphoto = $("#profilepic");
    userphoto.attr("src", pic);


  }

  function show_profile_menu() {
    menu = $("#profilemenu");
    menu.toggle();
    
  }

  function logout() {
    document.cookie = "Logged=False";
    window.location.href = "./music.html";
  }

  function signal(){
    alert("I work");
  }