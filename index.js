fetch("https://www.thecolorapi.com/id?hex=a604D3&format=json")
	.then((res) => res.json())
	.then((color) => {
		console.log(color);
		document.getElementById(
			"container"
		).innerHTML = `<img src="${color.image.named}">`;
	});
