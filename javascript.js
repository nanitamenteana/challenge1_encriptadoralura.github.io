/*Instruccciones de cifrado:
a - ai
e - enter
i - ober
o - ober
u - ufat

Orden usado para la encriptación:

e --> enter
o --> ober
i --> ines
a --> ai
u --> ufat
*/

/*Función para encriptar
1- El texto es extraído por document.getElementById y este se crea dentro del espacio donde el usuario escribe
2- toLowerCase ayuda a que no importe si el usuario escribe en mayuscula, todo se convierte en minuscula
3. texto.replace es para reemplazar las letras del texto de ls siguiente manera:
/i es para que afecte tanto mayusculas como minusculas
/g es para toda la linea y oración
/m es para que afecte a múltiples lineas o párrafos
4. Se reemplaza a partir del primer reemplazo y por eso el resto de los texto es textCifrado
*/

function encriptar(){
	var texto = document.getElementById("inputTexto").value.toLowerCase();
	var txtCifrado = texto.replace(/e/igm,"enter");
	var txtCifrado = txtCifrado.replace(/o/igm,"ober");
	var txtCifrado = txtCifrado.replace(/i/igm,"imes");
	var txtCifrado = txtCifrado.replace(/a/igm,"ai");
	var txtCifrado = txtCifrado.replace(/u/igm,"ufat");	

	/*Cuando toco el boton no me desaparece la imagen*/
	document.getElementById("imgDerecha").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = txtCifrado;

	/*Botón de Copiar*/
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
	var texto = document.getElementById("inputTexto").value.toLowerCase();
	var txtCifrado = texto.replace(/enter/igm,"e");
	var txtCifrado = txtCifrado.replace(/ober/igm,"o");
	var txtCifrado = txtCifrado.replace(/imes/igm,"i");
	var txtCifrado = txtCifrado.replace(/ai/igm,"a");
	var txtCifrado = txtCifrado.replace(/ufat/igm,"u");	

	/*Cuando toco el boton no me desaparece la imagen*/
	document.getElementById("imgDerecha").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = txtCifrado;
	
	/*Botón de Copiar*/
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
	var contenido = document.getElementById("texto2");
	contenido.select();
	navigator.clipboard.writeText(contenido.value);
	alert("¡Se copió!");
}