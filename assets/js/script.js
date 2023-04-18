const encriptar = document.getElementById("button__encriptar");
const desencriptar = document.getElementById("button__desencriptar");
const copy = document.getElementById("button__copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const rightImagen = document.getElementById("rightImagen");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth")

const remplace = (newvalue) => {
    textFinal.innerHTML = newvalue;
    textFinal.classList.add("ajustar");
    rigth.classList.add("ajustar")
    textoInicial.value = "";
    textoInicial.style.height = "auto"
    textoInicial.placeholder = "Ingrese el texto aquí";
    rightImagen.classList.add("ocultar");
    textInfo.classList.add("ocultar");
    copy.classList.remove("bn_ocultar");
}

const reset = () => {
    textoInicial.innerHTML = "";
    textoInicial.style.height = "auto";
    textFinal.innerHTML = "";
    rigth.classList.remove("ajustar")
    textFinal.classList.remove("ajustar");
    rightImagen.classList.remove("ocultar");
    textFinal.placeholder = "Ningún mensaje fue encontrado";
    textInfo.classList.remove("ocultar")
    copy.classList.add("bn_ocultar");
    textoInicial.focus();
};

let remplazar = [
    	//["e", "enter"],
		//["i", "imes"],
		//["a", "ambar"],
		//["o", "ober"],
		//["u", "ufat"]
		["050", "'-"],
		["91", "+."],
		["56", "?="],
		["96", "*¡"],
		["526", "¿_"],
		["36", "&#"],
		["ü", "050"],
		["w", "6ü9"],
		["a", "2w1"],
		["á", "5w1"],
		["x", "á5a"],
		["z", "á0x"],
		["h", "w1z"],
		["o", "6xw"],
		["ó", "7xw"],
		["l", "3oz"],
		["d", "x5z"],
		["i", "z7h"],
		["í", "z8h"],
		["j", "9dh"],
		["b", "j2d"],
		["é", "3ow"],
		["e", "6éo"],
		["g", "w3á"],
		["m", "b2d"],
		["c", "3d3"],
		["s", "o8j"],
		["k", "1x2"],
		["r", "3dü"],
		["v", "xsm"],
		["f", "dlr"],
		["y", "b5i"],
		["ú", "y1k"],
		["u", "yúw"],
		["n", "ójw"],
		["ñ", "x6b"],
		["t", "c3k"],
		["p", "yíd"],
		["q", "z0f"],
];
	


encriptar.addEventListener('click', () => {

    const texto = textoInicial.value.toLowerCase();

    if (texto != "") {
        function encript(newtext) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][0])) {
                    newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return newtext;
        };
        remplace(encript(texto));
    } else {
        alert("Ingrese texto para encriptar");
        reset();
    };
});

desencriptar.addEventListener('click', () => {

    const texto = textoInicial.value.toLowerCase();

    if (texto != "") {
        function desencript(newtext) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][1])) {
                    newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newtext;
        };
        remplace(desencript(texto));
    } else {
        alert("Ingrese texto a desencriptar");
        reset();
    };
});

copy.addEventListener("click", () => {
    let texto = textFinal;
    texto.select();
    document.execCommand('copy');
    //navigator.clipboard.writeText(texto.value);
    //clipboard función no compatible con móviles
    alert("Texto Copiado");
    reset();
});
//auto ajuste de textarea
const textarea = document.getElementById("textoInput");
textarea.addEventListener("keyup", e => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});
