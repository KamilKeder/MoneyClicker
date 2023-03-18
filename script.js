$(document).ready(function(){
	if(localStorage.getItem("#wartosc_sklep") > 0){
	document.getElementById("sklepimg").src = "img/sklep.png"
	document.getElementById("pracaimg").src = "img/praca.png"
	}
	else{
	document.getElementById("sklepimg").src = "img/znak.png"
	document.getElementById("pracaimg").src = "img/praca.png"	
	}
	if(localStorage.getItem("#wartosc_firma") > 0){
	document.getElementById("firmaimg").src = "img/firma.png"
	document.getElementById("pracaimg").src = "img/praca.png"
	}
	else{
	document.getElementById("firmaimg").src = "img/znak.png"
	document.getElementById("pracaimg").src = "img/praca.png"	
	}
var pieniadze = 0;
var pracawartosc = 0;
var sklepwartosc = 0;
var firmawartosc = 0;
function init(){
if(localStorage.getItem("#wartosc_konta")){
$("#div_money").html(localStorage.getItem("#wartosc_konta"));
pieniadze = $("#div_money").html();
}
else
{
pieniadze = 0;
$("#div_money").html("0");
}



if(localStorage.getItem("#wartosc_praca")){
$("#praca_wartosc").html(localStorage.getItem("#wartosc_praca"));
pracawartosc = $("#praca_wartosc").html();
}
else
{
pracawartosc= 1;
$("#praca_wartosc").html("1");
}

if(localStorage.getItem("#wartosc_sklep")){
$("#sklep_wartosc").html(localStorage.getItem("#wartosc_sklep"));
sklepwartosc = $("#sklep_wartosc").html();
}
else
{
sklepwartosc= 0;
$("#sklep_wartosc").html("0");
}

if(localStorage.getItem("#wartosc_firma")){
$("#firma_wartosc").html(localStorage.getItem("#wartosc_firma"));
firmawartosc = $("#firma_wartosc").html();
}
else
{
firmawartosc= 0;
$("#firma_wartosc").html("0");
}


}
init();
var pracawartosc1 = 0;
var zmiennalokalna1 = 0;
var interwal1;
var interwal2;
setInterval( function(){
	clearTimeout(interwal1);
	clearTimeout(interwal2);
if(localStorage.getItem("#wartosc_sklep") > 0){
		interwal1 = setInterval(function(){
			zmiennalokalna1 = $("#sklep_wartosc").html();
			pieniadze = $("#div_money").html();
			pracawartosc1 = parseInt(pieniadze) + 1 * parseInt(zmiennalokalna1);
			$("#div_money").html(parseInt(pracawartosc1));
			localStorage.setItem("#wartosc_konta",pracawartosc1);

		},1000)
}
var pracawartosc2 = 0;
var zmiennalokalna2 = 0;
if(localStorage.getItem("#wartosc_firma") > 0){
		interwal2 = setInterval(function(){
			zmiennalokalna1 = $("#firma_wartosc").html();
			pieniadze = $("#div_money").html();
			pracawartosc2 = parseInt(pieniadze) + 10 * parseInt(zmiennalokalna1);
			$("#div_money").html(parseInt(pracawartosc2));
			localStorage.setItem("#wartosc_konta",pracawartosc2);

		},1100)
}
},1110)

function pracuj(){

}

$("#pieniadz").click(function(){
	pracawartosc = $("#praca_wartosc").html();
	pieniadze = $("#div_money").html();
	pieniadze = parseInt(pieniadze) + parseInt(pracawartosc);
	$("#div_money").html(pieniadze);
	localStorage.setItem("#wartosc_konta",pieniadze);


})

$("#ulepsz_praca").click(function(){
	if(pieniadze >= 20){
		pieniadze = parseInt(pieniadze) - 20;
		$("#div_money").html(pieniadze);
	localStorage.setItem("#wartosc_konta",pieniadze);
		pracawartosc = parseInt(pracawartosc) +1;
	$("#praca_wartosc").html(pracawartosc);
	localStorage.setItem("#wartosc_praca",pracawartosc);
	}
	else{
		alert("Musisz mieć minimum 20$")
	}
})
$("#ulepsz_sklep").click(function(){
	if(pieniadze >= 100){
		document.getElementById("sklepimg").src = "img/sklep.png"
		pieniadze = parseInt(pieniadze) - 100;
		$("#div_money").html(pieniadze);
	localStorage.setItem("#wartosc_konta",pieniadze);
		sklepwartosc = parseInt(sklepwartosc) +1;
	$("#sklep_wartosc").html(sklepwartosc);
	localStorage.setItem("#wartosc_sklep",sklepwartosc);
	}
	else{
		alert("Musisz mieć minimum 100$")
	}
})
$("#ulepsz_firma").click(function(){
	if(pieniadze >= 1000){
		document.getElementById("firmaimg").src = "img/firma.png"
		pieniadze = parseInt(pieniadze) - 1000;
		$("#div_money").html(pieniadze);
	localStorage.setItem("#wartosc_konta",pieniadze);
		firmawartosc = parseInt(firmawartosc) +1;
	$("#firma_wartosc").html(firmawartosc);
	localStorage.setItem("#wartosc_firma",firmawartosc);
	}
	else{
		alert("Musisz mieć minimum 1000$")
	}
})

$("#reset").click(function(){
	localStorage.setItem("#wartosc_praca",1)
	localStorage.setItem("#wartosc_firma",0)
	localStorage.setItem("#wartosc_sklep",0)
	localStorage.setItem("#wartosc_konta",0)
	localStorage.setItem("#wartosc_konta",0)
	document.getElementById("firmaimg").src = "img/znak.png"
	document.getElementById("sklepimg").src = "img/znak.png"
	$("#div_money").html("0");
	$("#praca_wartosc").html("1");
	$("#firma_wartosc").html("0");
	$("#sklep_wartosc").html("0");
	pieniadze = 0;
	pracawartosc = 1;
	pracawartosc1 = 0;
	zmiennalokalna1 = 0;
	pracawartosc2 = 0;
	zmiennalokalna2 = 0;
})
})