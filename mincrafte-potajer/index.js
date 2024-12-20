const case1 = document.getElementById("1");
const elementMode = document.getElementById("mode");
const evolutionPlantes = [
	"Wheat_Age_0.webp",
	"Wheat_Age_1.webp",
	"Wheat_Age_2.webp",
	"Wheat_Age_3.webp",
	"Wheat_Age_4.webp",
	"Wheat_Age_5.webp",
	"Wheat_Age_6.webp",
	"Wheat_Age_7.webp",
];

/*const tableauCaseAvecEau = [
    false,
    false,
    false,
    false
];*/

/*tableauCaseAvecEau[2]*/

let modeJour = true;

let case1AvecEau = false;
let case1Compteur = 0;

case1.addEventListener("click", () => {
	if (modeJour == true) {
		case1AvecEau = true;
		case1.setAttribute("src", "./farm_water.webp");
	} else {
		case1AvecEau = false;
		case1.setAttribute("src", "./farm.webp");
	}
});

case1.addEventListener("click", () => {});

setInterval(() => {
	if (modeJour == true) {
		/* lorsque le jour se termine */

		elementMode.innerText = "nuit";

		modeJour = false;
	} else {
		/* lorsque la nuit se termine */

		elementMode.innerText = "jour";

		//si il y a de l'eau sur la plante alors elle grandit
		//sinon elle disparait
		if (case1AvecEau == true) {
			case1.setAttribute("src", "Wheat_Age_0.webp");
			case1Compteur++;
		} else {
			case1.setAttribute("src", "./farm.webp");
		}

		modeJour = true;
		case1AvecEau = false;
	}
}, 2000);
