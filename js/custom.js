"use strict";

	// DOM Select Area

let userInput = document.getElementById("userInput");
let btn = document.getElementById("btn");
let binaryConvart = document.querySelector(".binaryConvart");
let octalConvart = document.querySelector(".octalConvart");
let hexaDecimalConvart = document.querySelector(".hexaDecimalConvart");

	// Create Element Area

let binarySpan = document.createElement("span");
let octalSpan = document.createElement("span");
let hexaSpan = document.createElement("span");

	// Set Attribute Area

binarySpan.setAttribute("id", "binary");

binaryConvart.appendChild(binarySpan); // Append

octalSpan.setAttribute( "id", "octal" );

octalConvart.appendChild(octalSpan); // Append

hexaSpan.setAttribute("id", "hexa");

hexaDecimalConvart.appendChild(hexaSpan);

	// Binary Store

let binary;

	// Octal Store
	
let octal;

	// Hexadecimal Store
	
let hexa;

btn.addEventListener( 'click', function(e){
    e.preventDefault();
	
	if ( userInput.value == "" ) {
		binary = "";
		binarySpan.innerText = binary;
		octalSpan.innerText = "";
		hexaSpan.innerText = "";
	} else if ( userInput.value == null ) {
		binarySpan.innerText = "";
		octalSpan.innerText = "";
		hexaSpan.innerText = "";
	} else if ( !userInput.value ) {
		binarySpan.innerText = "";
		octalSpan.innerText = "";
		hexaSpan.innerText = "";
	} else if ( +userInput.value ) {
		binary = +userInput.value;
		octal = +userInput.value;
		hexa = +userInput.value;
		binarySpan.innerHTML = " <span class= 'bold' > Binary </span> \n" + binary.toString(2);
		octalSpan.innerHTML = " <span class= 'bold'> Octal </span> \n" + binary.toString(8);
		hexaSpan.innerHTML = "<span class= 'bold'> Hexadecimal </span> \n" + binary.toString(16);
	}
	
	// let lal = +userInput.value;
	// octalSpan.innerText = lal.toString(2);
	// console.log(lal);
})