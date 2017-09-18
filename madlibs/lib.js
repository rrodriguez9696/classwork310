var submit = document.getElementById("submit");
submit.onclick = function() {

var name = document.getElementById("name");
var borough = document.getElementById("borough");
var noun = document.getElementById("noun");
var adjective = document.getElementById("adjective");
var verb = document.getElementById("verb");
// var message = document.getElementById("message");


 if (name.value) {
    message.innerText = "There once was a thing called " + name.value + " from " + borough.value + ". Where the sun always shined and the animals where as small as a " + noun.value + ", and the city skyscrapers smelled as" + adjective.value + " as your middle school bathroom. And the people all enjoy to " + verb.value + " from the very top of the skyscrapers.";
    
} else {
    message.innerText = "Please input a name.";
}


};