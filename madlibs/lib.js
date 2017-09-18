submit.onclick = function() {

var submit = document.getElementById("lip");
var name = document.getElementById("name");
var borough = document.getElementById("borough");
var noun = document.getElementById("noun");
var adjective = document.getElementById("adjective");
var verb= document.getElementById("verb");
var message= document.getElementById("message");
message.innerText = "There once was a thing called " + name.value + " from " + borough.value + ". Where the sun always shined and grass was always green. The happy people from " + name.value + " never knew such things as cloudy rainy days or unhappy villagers for that matter. Everyone was happy all the time. Enter and get a glimpse of their reality! Where " + noun.value + " is as good as " + adjective.value + " trying to " + verb.value + " oh boy ain't that some fun. ";

};