var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces () {

    while (theLeftSide.firstChild) {//while there is a child on the leftSide
    theLeftSide.removeChild(theLeftSide.firstChild);

    }

    while (theRightSide.firstChild) {//while there is a child on the rightSide
    theRightSide.removeChild(theRightSide.firstChild);
    }

    for (i=0; i< numberOfFaces; i++) { 
    var img = document.createElement("img");
    img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
    var pickRandomTop = Math.random () * 400;
    var topPosition = Math.floor (pickRandomTop);
    var pickRandomLeft = Math.random () * 400;
    var leftPosition = Math.floor (pickRandomLeft);
    img.style.top = topPosition + "px";
    img.style.left= leftPosition + "px";
    theLeftSide.appendChild(img);

    }

//right side action

var leftSideImages = theLeftSide.cloneNode(true);
leftSideImages.removeChild(leftSideImages.lastChild);
rightSide.appendChild(leftSideImages);
//event handler for the extra face

theLeftSide.lastChild.onclick= function nextLevel(event){//execute a function onclick
event.stopPropagation();//so the event isn't applied to other elements
numberOfFaces +=5; //increase the number of faces by 5
generateFaces(); // rerun the generateFaces fuction again to add 5 more faces
//event handler for clicking on theBody


}
}

generateFaces();

theBody.onclick= function gameOver(){ //will run with theBody element is clicked
alert("Game Over!!!"); 
theBody.onclick = null; //nothing will happen when they click elsewhere
theLeftSide.lastChild.onclick= null; //nothing happens if they click the extra face
}


