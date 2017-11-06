var slides = [
		


	{
       
		image: "comic1.png",

		caption: "Hey BABY, Lets freak out.",
		

	},

	{

		image: "comic2.png",

		caption: "We freaked out yesterday. Let's freak in tonight.",

	},

	{

		image: "comic3.png",

		

	}
	
];

for (var i = 0; i < slides.length; i++) {
	var slide = slides[i];
	var slideElem = document.createElement("div");
	var image = new Image();
	var caption = document.createElement("p");
	image.src = slide.image;
	caption.textContent = slide.caption;
	slideElem.appendChild(image);
	slideElem.appendChild(caption);
	document.body.appendChild(slideElem);
}