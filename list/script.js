window.addEventListener("load", function() {
	
	var submit = document.getElementById("addBtn");
	var list =document.getElementById("list");
	var input = document.getElementById("item");
	submit.addEventListener("click", addItem);
	input.addEventListener("keydown", function(event) {
		if (event.key == "Enter") {
			addItem();
		}
	});
	
	function addItem() {
		var listItem = document.createElement("li");
		var newItem = document.createElement("p");
		listItem.className = "list";
		newItem.innerText = input.value;
		newItem.className = "item";
		listItem.appendChild(newItem);
		var del = document.createElement("add");
		del.className = "delete";
		del.innerText = "Delete";
		del.addEventListener("click", function() {
			list.removeChild(this.parentNode);
		});
		listItem.appendChild(del);
		list.appendChild(listItem);
	}

});