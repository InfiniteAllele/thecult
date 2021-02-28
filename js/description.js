var i = 0;
var txt =
    "The CULT was established to make PUBG gaming more fun.";
var speed = 80;

function description() {
    if (i < txt.length) {
        document.getElementById("desc").innerHTML += txt.charAt(i);
        i++;
        setTimeout(description, speed);
    }
    if (i == txt.length) {
        document.getElementById("cards").style.display = "block";
    }

}