var title = "THE LION KING";
var h1 = document.getElementById("rbTitle");
var color = new Array("red", "orange", "yellow", "green", "blue", "indigo", "violet");
var parentCounter = 0;

function updateTitle() {
    var coloredTitle = "";
    var counter = 0 + parentCounter;
    for (var i = 0; i < title.length; i++) {
        coloredTitle += title.charAt(i).fontcolor(color[counter]);
        counter++;
        if (counter >= 7) {
            counter = 0;
        }
    }
    h1.innerHTML = coloredTitle;
    parentCounter--;
    if (parentCounter <= 0) {
        parentCounter = 7;
    }
    setTimeout('updateTitle()', 100);
}

updateTitle();
console.log("MEME");