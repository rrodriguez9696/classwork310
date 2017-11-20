var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstTagScript = document.getElementsByTagName('script')[0];
firstTagScript.parentNode.insertBefore(tag, firstTagScript);

// YouTube Player variable
var player;
var subtitles = document.getElementById("subtitles");
var subs = [
	{
		text:"Hello!",
		start: 2,
		duration: 5
	},
	{
		text: "I'm a SlenderMan",
		start: 10,
		duration: 10
	},
	{
		text:"Goodbye!",
		start: 30,
		duration: 2
	}
];


// Function that initializes the player with specific events
// and sets functions to handle those events.

// -R5GSuAFAao
function onYouTubeIframeAPIReady(){
	console.log("ready");
	player = new YT.Player('player', {
		videoId: '-R5GSuAFAao',
		width: 480,
		height: 360,
		playerVars: {
			controls: 0,
			modestbranding: 1,
			showinfo: 0
		},
		events: {
		    'onReady': onPlayerReady,
		}
	});
	console.log(player);
}

function onPlayerReady(){
	document.getElementById("play").addEventListener("click", function() {
		player.playVideo();
	});
	document.getElementById("stop").addEventListener("click", function() {
		player.stopVideo();
	});
	document.getElementById("jump").addEventListener("click", function() {
		if (player && player.getCurrentTime) {
			player.seekTo( player.getCurrentTime() + 5 );	
		}
	});
	
	function subtitleDisplay() {
		var titleDisplay = false;
		var time = player.getCurrentTime();
		for (var i = 0; i < subs.length; i++) {
			var sub = subs[i];
			if (time > sub.start && time < sub.start + sub.duration) {
				subtitles.textContent = sub.text;
				titleDisplay = true;
			}
		}
		if (!titleDisplay) {
			subtitles.textContent = "";
		}
	}
	setInterval(subtitleDisplay, 1000/24);
}





