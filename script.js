var currentYear = new Date().getFullYear().toString();
document.getElementById("full-year").innerText = "Copy Right ©" + currentYear + " By Gobinda Prasad Poudel";


var i = 0;
var txt = 'Hello, Welcome to this website . This is a Portfolio website created by Gobinda Prasad Poudel. This website is created by using Bootstrap And Javascript';
var speed = 50;
window.onload=typeWriter();

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


