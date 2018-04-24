//var ajaxRequest = new XMLHttpRequest();
//ajaxRequest.addEventListener('readystatechange', function(r) {
//  if(r.target.status === 200) {
//    console.log(r.target.response);
//  }
//});
//ajaxRequest.open("GET", "https://api.github.com/users/anchat1990");
//ajaxRequest.send();

fetch("https://api.github.com/users/anchat1990")
    .then(function(r) {return r.json()})
    .then(function(j) {console.log(j)})
    
//    .then(function(j){
//        console.log(j);
