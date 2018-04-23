document.getElementById("my-button").addEventListener("mouseover", function() {
    document.getElementById("my-button").innerText = "Booya";
});

document.getElementById("my-button").addEventListener("mouseout", function() {
    document.getElementById("my-button").innerText = "Hello";
});

document.body.addEventListener("timeEvent", function(data) {
    alert("The date & time is " + data.detail);
});

var myEvent = new CustomEvent("timeEvent", {
    detail: new Date()
}); 
