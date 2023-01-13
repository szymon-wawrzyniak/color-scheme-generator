const delay = 200; // delay in ms
const colorInput = document.getElementById("color-input");
const generateBtn = document.getElementById("generate-btn");

const column1El = document.getElementById("column-1");
const column2El = document.getElementById("column-2");
const column3El = document.getElementById("column-3");
const column4El = document.getElementById("column-4");
const column5El = document.getElementById("column-5");

function renderColors() {
	column1El.getElementsByTagName("div")[0].style.backgroundColor =
		colorInput.value;

	choosenColorHex = colorInput.value.slice(1);

	fetch(`https://www.thecolorapi.com/scheme?hex=${choosenColorHex}&count=4`)
		.then((res) => res.json())
		.then((scheme) => {
			setTimeout(() => {
				column2El.getElementsByClassName(
					"color-field"
				)[0].style.backgroundColor = scheme.colors[0].hex.value;
				setTimeout(() => {
					column3El.getElementsByClassName(
						"color-field"
					)[0].style.backgroundColor = scheme.colors[1].hex.value;
					setTimeout(() => {
						column4El.getElementsByClassName(
							"color-field"
						)[0].style.backgroundColor = scheme.colors[2].hex.value;
						setTimeout(() => {
							column5El.getElementsByClassName(
								"color-field"
							)[0].style.backgroundColor = scheme.colors[3].hex.value;
						}, delay);
					}, delay);
				}, delay);
			}, delay);
		});
}

generateBtn.addEventListener("click", () => {
	renderColors();
	console.log(colorInput.value);
});
