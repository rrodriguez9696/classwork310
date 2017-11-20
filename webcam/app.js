var webcam = document.getElementById("webcam");
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
	navigator.getUserMedia({video:true}, videoHandler, videoError);
}

function videoHandler(stream) {
	console.log(stream);
	webcam.src = window.URL.createObjectURL(stream);
}

function videoError(error) {
	console.log(error);
}

var video = document.getElementById("video");
var context = video.getContext('2d');

function mirrorImage() {
	context.save();
	context.translate(video.width, 0);
	context.scale(-1,1);
	context.drawImage(webcam, 0, 0, video.width, video.height);
	context.restore();
}

webcam.addEventListener("loadedmetadata", function() {
	webcam.style.display = "none";
	video.width = webcam.videoWidth;
	video.height = webcam.videoHeight;
	//video.addEventListener("click", mirrorImage);
	setInterval(mirrorImage, 1000/30);
});
