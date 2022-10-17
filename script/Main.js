class profile{
  constructor(name, profilepic = "default"){
    this.name = name;
    this.profilepic = profilepic;
  }
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split('=');
    let user = ca[1].split(',');
    return user[0];
  }

  function checkCookie() {
    let user = getCookie("username");
    if (user = "") {
      alert("Please register");
      return 0;
    }
    alert("Cookie encontrada");

    login = $("#login");
    register = $("#register");

    login.hide();
    register.hide();

    user = $("#userlog");
    user.show();

    username = $("#profilename")
    username.text(user);


  }