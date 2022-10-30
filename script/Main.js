class profile{
  constructor(name, profilepic = "default"){
    this.name = name;
    this.profilepic = profilepic;
  }
}

function getCookie() {
    const c = document.cookie.split(';');
    for (x=0;x<c.length; x++){
      const usr = c[x].split('=');
      const usr_info = usr[1].split(',');
      if (usr_info[4] == "Logged"){
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
      if (usr_info[0] == username){
        user_info_join = user_info.join(',');
        usr_join = usr[0] + '=' + user_info_join + ';path=/';
        document.cookie = usr_join;
        return 1;
      }
    }
    return 0;
  }

  function checkCookie() {
    let cookie = getCookie();
    if(cookie == ""){
      return 0;
    }
    let profilename = cookie[0];

    login = $("#login");
    register = $("#register");
    linkListas = $("#link-listas");
    linkCrearListas = $("#link-crear-listas");
    
    linkListas.show();
    linkCrearListas.show();
    login.hide();
    register.hide();

    $("footer").hide();

    user = $("#userlog");
    user.show();

    username = $("#profilename");
    username.text(profilename);
    profilename = profilename.replace(/\s+/g, "");

    pic = "./images/profile/" + profilename + ".png";
    userphoto = $("#profilepic");
    userphoto.attr("src", pic);
  }

  function show_profile_menu() {
    menu = $("#profilemenu");
    menu.toggle();
    
  }

  function show_modal(){
    $(".modal").css("display", "flex");
  }

  function logout() {
    let cookie = getCookie();
    cookie[4] = "NotLogged";
    if (!saveCookie(cookie[0], cookie)){
      alert("Error");
    }    
    window.location.href = "./music.html";
  }

  function search_song(){
    let srch = document.getElementById("search").value;
    console.log(srch);
    srch = srch.replace(/\s+/g, "");
    let song = $('#'+srch);
    song.show();
    console.log(song);
  }

  function signal(){
    alert("I work");
  }