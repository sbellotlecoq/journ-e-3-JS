// 1

var foot = document.getElementsByTagName("footer")[0];
foot.addEventListener("click", function() {
	console.log("Function 1 : " + "Clique"); 
	console.log("--------------------")
});


// 1 deuxième round

var foot = document.getElementsByTagName("footer")[0];
let count = 1;
if (foot.addEventListener("click",function() { 
	console.log("Function 1 bis : " + `Clic n°${count}`); 
	count++; 
	console.log("--------------------")
}));


// 2

var btn = document.getElementsByClassName("navbar-toggler")[0]; 
var navHead = document.getElementById("navbarHeader");

btn.addEventListener('click',function() {
	console.log("function 2 :" +" " + `${navHead.classList.toggle("collapse")}`); //Affiche sur le site et en console l'état de collapse
});


// 3

var firstCard = document.getElementsByClassName("card")[0]; //Sélection de la première carte 
var firstEditBtn = document.getElementsByClassName("btn")[3]; //sélection du premier bouton

firstEditBtn.addEventListener("click",function(){
	firstCard.style = "color:red"; //Passe le texte en rouge
});

// 4

var secondCard = document.getElementsByClassName("card-text")[1];//Idem que pour la carte 1 mais on change l'index pour sélectionner la deuxième
var secondEditBtn = document.getElementsByClassName("btn-outline-secondary")[1];

function textCardToggle(){
  if (secondCard.style.color === "green"){
    secondCard.style.color = "";
  } else {
    secondCard.style.color = "green";
  }
}
secondEditBtn.addEventListener("click", textCardToggle);

// 5
var link = document.getElementsByTagName("link")[0];
var header = document.getElementsByTagName("header")[0];


function aPlusBootstrap() { 
	if (link.rel == "none") {
		link.rel = "stylesheet";
	}
	else {
		link.rel = "none";
	}
}
header.addEventListener("dblclick", aPlusBootstrap);


