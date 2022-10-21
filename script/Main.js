class profile{
  constructor(name, profilepic = "default"){
    this.name = name;
    this.profilepic = profilepic;
  }
}

function getCookie(cname) {
    console.log(document.cookie);
    const ca = document.cookie.split('=');
    const user = ca[1].split(',');
    console.log(user[0]);
    return user[0];
  }

  function checkCookie() {
    let profilename = getCookie("username");
    console.log(profilename);
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

    pic = "./images/profile/" + profilename + ".png";
    console.log(pic);
    userphoto = $("#profilepic");
    userphoto.attr("src", pic);


  }

  function show_profile_menu() {
    menu = $("#profilemenu");
    menu.toggle();
    
  }

  function signal(){
    alert("I work");
  }