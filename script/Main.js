function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split('=');
    let user = ca[1].split(',');
    return user[0];
  }

  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }