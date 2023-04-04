const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
let dblClickButton = document.querySelector(".funButton");
let body=document.querySelector("body");

dblClickButton.onclick= function(){
    body.style.backgroundColor="pink";
};