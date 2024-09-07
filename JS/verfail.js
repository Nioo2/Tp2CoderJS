
// lista de objetos html de la app

//estas tienen todas los componentes de la pagina.. 
//pero se mostraran dependiendo de la clase que le toque en cada momento

const compoBaner = {
	etiqueta: "header",
	identid: "baner",
	texto: '<h1>App Calculardor  Multiple </h1> <a href="fail.html">Menu Principal</a>',
	clase: "chasis"
}
const compoBotonInf = {
	etiqueta: "button",
	identid: "botonInflacion",
	texto: "Calculador Inflacion",
	clase: "chasis"
}
const compoBotonCable = {
	etiqueta: "button",
	identid: "botonCables",
	texto: "Calculador Cables",
	clase: "chasis"
}
const compoBotonSorteo = {
	etiqueta: "button",
	identid: "botonSorteo",
	texto: "Sorteo de Tareas",
	clase: "chasis"
}
const compoDescripcion = {
	etiqueta: "section",
	identid: "bienvenida",
	texto: "<h2>ElectroLaboral app </h2> <h3> una App pensada para los Electricistas</h3> ",
	clase: "start"
}
const compoDescripcion2 = {
	etiqueta: "section",
	identid: "descripcionlist",
	texto: "<b>Permite</b> <ol> <li>calcular el precio de un producto de un mes a otro en base a la inflacion</li><li>calcular el diametro de cables de una instalacion electrica</li> <li>Sortear Tareas del Equipo laboral </li>  </ol>",
	clase: "start"
}
const compoPie = {
	etiqueta: "footer",
	identid: "piePagina",
	texto: " <h5>  Desarrollador: Nicolas Ivan Ocampo </h5> <a href='https://www.youtube.com/@nio2tube/videos'>Canal de Youtube</a> ",
	clase: "chasis"
}



//componentes panel inflacion

const compoInfPanel = {
	etiqueta: "section",
	identid: "inflaTitulo",
	texto: " <h2>  Sistema de Remarcacion de Precios en funcion de la inflacion</h2> ",
	clase: "inflaPanel"
}
const compoInfPanel2 = {
	etiqueta: "section",
	identid: "inflainputs",
	texto: " <input type='number' id='inPrecio' placeholder='Ingrese el Precio del mes anterior' > <br><input type='number' id='inInflacion' placeholder='Ingrese el indice de inflacion' >  ",
	clase: "inflaPanel"
}
const compoBotonInfRun = {
	etiqueta: "button",
	identid: "botonInflaRun",
	texto: "Calcular Nuevo Precio",
	clase: "inflaPanel"
}
const compoBotonInDisplay = {
	etiqueta: "h2",
	identid: "InfDisplay",
	texto: "",
	clase: "inflaPanel"
}


//componentes panel de cables


const compoCablePanel = {
	etiqueta: "section",
	identid: "cableTitulo",
	texto: "<h2> Calculardor Diametro de cables para instalacion Electrica Segura   </h2> <br>",
	clase: "cablePanel"
}
const compoCableInput = {
	etiqueta: "section",
	identid: "cableWatssInput",
	texto: "<input type='number' id='inPotencia' placeholder='Ingrese la Suma de Potencia Total de la Linea en Watts' > ",
	clase: "cablePanel"
}
const compoBotonCableRun = {
	etiqueta: "button",
	identid: "botonCableRun",
	texto: "Calcular Diametro Cable",
	clase: "cablePanel"
}
const compoCableDisplay = {
	etiqueta: "h2",
	identid: "CableDisplay",
	texto: "awdad",
	clase: "cablePanel"
}


//componentes de Sorteo

const compoSorteoPanel = {
	etiqueta: "section",
	identid: "sorteoTitulo",
	texto: "<h2> Sistema de Sorteo Para Labores Poco Deseables </h2> <br>",
	clase: "sorteoPanel"
}
const compoSorteoInput = {
	etiqueta: "section",
	identid: "SorteoInput",
	texto: "<input type='text' id='inParticipante' placeholder='Ingrese Participante' > ",
	clase: "sorteoPanel"
}
const compoBotonSorteoAdd = {
	etiqueta: "button",
	identid: "botonSorteoAdd",
	texto: "Ingresar Participante",
	clase: "sorteoPanel"
}
const compoBotonSorteoRun = {
	etiqueta: "button",
	identid: "botonSorteoSortear",
	texto: "Sortear",
	clase: "sorteoPanel"
}
const compoBotonSorteoDisplay = {
	etiqueta: "h2",
	identid: "displaySorteo",
	texto: "Ganador:",
	clase: "sorteoPanel"
}



//array de objetos
//componentes Header y footer ( Chasis )
const componentes =  [
		compoBaner,
		compoBotonInf,
	 	compoBotonCable , 
	 	compoBotonSorteo,
	 	compoDescripcion,
	 	compoDescripcion2,
	 	compoPie, 
//componentes inflacion
	 	compoInfPanel,
	 	compoInfPanel2,
	  	compoBotonInfRun,
//componentes diametro Cables
	  	compoCablePanel,
	  	compoCableInput,
	  	compoBotonCableRun,
	  	compoCableDisplay,
//componentes sorteo
	  	compoSorteoPanel,
	  	compoSorteoInput,
	  	compoBotonSorteoAdd,
	  	compoBotonSorteoRun,
	  	compoBotonSorteoDisplay
	  	]




printStart()

function printStart(){   // funcion que imprime inicio 




for(const componente of componentes ){  //   bucle que imprime los objetos en pantalla


	if( componente.clase== "start" || componente.clase== "chasis"){
		let item = document.createElement("div")
		item.innerHTML =  '<'+componente.etiqueta+' id="'+componente.identid+'" class="'+componente.clase+'" >'+componente.texto+'</'+componente.etiqueta+'>'
		document.body.append(item)

	}

		}//fin for



//Boton Calculadora Inflacion

let boton21 = document.getElementById("botonInflacion")
boton21.onclick = () => {
inflation()
}


//Boton Diametro Cables
let botonWire = document.getElementById("botonCables")
botonWire.onclick = () => {



Cable()
}


//boton Sorteo
let botonSorteo = document.getElementById("botonSorteo")
botonSorteo.onclick = () => {



Sorteo()
}
}//fin funcion Start








function inflation(){


//Borrado de componentes anteriores.

let borrador = document.getElementById("bienvenida")
borrador.remove()
let borrador1 = document.getElementById("piePagina")
borrador1.remove()
let borrador2 = document.getElementById("descripcionlist")
borrador2.remove()



for(const componente of componentes ){  //   bucle que imprime los objetos en pantalla

	if(componente.clase== "inflaPanel"){ // este if filtra que solo se impriman los componentes con la clase indicada

		let item2 = document.createElement("div")
		item2.innerHTML =  '<'+componente.etiqueta+' id="'+componente.identid+'" class="'+componente.clase+'" >'+componente.texto+'</'+componente.etiqueta+'>'
		document.body.append(item2)
	} //fin if
} //fin for


}//fin funcion inflation











function Cable(){



//Borrado de componentes anteriores.
let borrador = document.getElementById("bienvenida")
borrador.remove()

let borrador1 = document.getElementById("piePagina")
borrador1.remove()

let borrador2 = document.getElementById("descripcionlist")
borrador2.remove()


for(const componente of componentes ){  //   bucle que imprime los objetos en pantalla

	if(componente.clase== "cablePanel"){ // este if filtra que solo se impriman los componentes con la clase indicada

		let item2 = document.createElement("div")
		item2.innerHTML =  '<'+componente.etiqueta+' id="'+componente.identid+'" class="'+componente.clase+'" >'+componente.texto+'</'+componente.etiqueta+'>'
		document.body.append(item2)
	} //fin if
} //fin for


}//fin funcion Cable













function Sorteo(){



//Borrado de componentes anteriores.
let borrador = document.getElementById("bienvenida")
borrador.remove()

let borrador1 = document.getElementById("piePagina")
borrador1.remove()

let borrador2 = document.getElementById("descripcionlist")
borrador2.remove()


for(const componente of componentes ){  //   bucle que imprime los objetos en pantalla

	if(componente.clase== "sorteoPanel"){ // este if filtra que solo se impriman los componentes con la clase indicada

		let item2 = document.createElement("div")
		item2.innerHTML =  '<'+componente.etiqueta+' id="'+componente.identid+'" class="'+componente.clase+'" >'+componente.texto+'</'+componente.etiqueta+'>'
		document.body.append(item2)
	} //fin if
} //fin for


}//fin funcion Sorteo

