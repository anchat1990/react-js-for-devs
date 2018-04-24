fetch('https://api.github.com/users/anchat1990')
  .then(function(r) {
    document.getElementById("loaded").style.display = "none";
    return r.json();
  })
  .then(function(j) {
    console.log(j);
    document.getElementById('username').innerText = j.login;
    document.getElementById('myImg').src = j.avatar_url;
    document.getElementById('realName').innerText = j.name;
    document.getElementById('location').innerText = j.location;
    document.getElementById('bio').innerText = j.bio;
    document.getElementById('numFollowers').innerText = j.followers;
    document.getElementById("loaded").style.display = "block";
    document.getElementById("loading").style.display = "none";
    document.getElementsByTagName("button")[0].addEventListener("click", function(user) {
        console.log("user");
    })
  })
