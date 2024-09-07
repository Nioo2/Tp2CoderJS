
//////////////////////////////////////////////////////////////////////////
//																							//
//
//		Bueno Hice lo que pude : . la verdad que tube bastantes dificultades																//
// 
//	    por mis tiempos laborales y no pude hacer el fetch con la base de datos  local											//
//
//																								//
// 	   pido disculpas por  lo incompleto de mi proyecto
//																							//
//
// 	
//																						//
///																						/////////////////////////////////////////////////////////////////////////////
//	 																	//
// 
//																		//
/////////////////////////////////////////////////////////////////////////				//
/////////////////////////////////////////////////////////////////////////








//////////////////////////////////////////////////////////////////////////
//																		//
// Seleccion de Operacion a realizar 
//																		//
/////////////////////////////////////////////////////////////////////////

 // menu principal donde elegimos que operacion realizar
 
let menu = document.getElementById("modo")
let aceptar = document.getElementById("siguiente")
aceptar.onclick = () => {



switch(menu.value){  // disparo de funciones segun el modo elegido

case "Inflacion" :


	Inflation()
	
	break


case "Cables": 

	Cable()
	break 


case "Sorteo": 

	Sorteo()
	
	break


case "Tecnicos":

	Tecnicos()
	break


default:
	alert("Opcion Incorrecta, se reiniciará el programa")
	
	break
}//fin switch


}



//////////////////////////////////////////////////////////////////////////////////////

// Funcion Calculo Inflacion 

//////////////////////////////////////////////////////////////////////////////////////






function Inflation(){  






let tablero = document.getElementById("display")    



let titulo = document.createElement("h3")
titulo.innerHTML = "<h3 style='background-color:orange;'>Calculadora de Inflacion</h3>"
document.body.append(titulo)


let precioant = document.createElement("form")
precioant.innerHTML = "<input type='numer' id='precio' placeholder='precio mes anterior' required >"
document.body.append(precioant)

let porcentajeinf = document.createElement("form")
porcentajeinf.innerHTML = "<input type='numer' id='infla' placeholder='Indice Inflacion mensual' required >"
document.body.append(porcentajeinf)


let botoninf = document.createElement("button")
botoninf.innerHTML = "<button id='buttoninf'>Calcular</button>"
document.body.append(botoninf)


botoninf.onclick = () => {


let precio = document.getElementById("precio")
let inflacion = document.getElementById("infla")
let resultado = parseInt(precio.value)+(precio.value*inflacion.value)/100

console.log(resultado)

let precioNuevo = document.createElement("h3")
precioNuevo.innerHTML = '<h3 id="pantalla"> El Nuevo Precio es de : '+resultado+'</h3>'
document.body.append(precioNuevo)

	}

}






//////////////////////////////////////////////////////////////////////////////////////

 // funcion Diametro Cable

//////////////////////////////////////////////////////////////////////////////////////


function Cable(){ 

 


let tablero = document.getElementById("display")    



let titulo = document.createElement("h3")
titulo.innerHTML = "<h3>Calculadora de Diametros de cables</h3>"
document.body.append(titulo)


let wattsInput = document.createElement("div")
wattsInput.innerHTML = "<form id='formu'><input type='numer' id='watts' placeholder='Potencia Total en Watts de la instalacion' required ></form>"
document.body.append(wattsInput)


let botonCable = document.createElement("button")
botonCable.innerHTML = "<button id='buttoncable'>Calcular</button>"
document.body.append(botonCable)


botonCable.onclick = () => {


let potencia = document.getElementById("watts")

let amperes= parseFloat(potencia.value/220).toFixed(2)
	let diametro
		if(amperes<10){ diametro=1}
		if(amperes>=10 && amperes<14 ){ diametro=1.5}
		if(amperes>=14 && amperes<16 ){  diametro=2}
		if(amperes>=16 && amperes<20 ){  diametro=2.5}
		if(amperes>=20 && amperes<28 ){  diametro=4}
		if(amperes>=28 && amperes<37 ){ diametro=6}
		if(amperes>=37 && amperes<48 ){  diametro=8}
		if(amperes>=48 && amperes<=53 ){  diametro=10}
		if(amperes>54 ){diametro= "mas de 20"}


let cableDiam = document.createElement("h3")
cableDiam.innerHTML = '<h3 id="pantalla"> Debera usar un cable de  '+diametro+' mm2 de diametro </h3>'
document.body.append(cableDiam)
	}

}








/////////////////////////////////////////////////////////////////////////////////

 // funcion Sorteo  

/////////////////////////////////////////////////////////////////////////////////

function Sorteo(){  
	





//generacion Dom

let tablero = document.getElementById("display")    

let titulo = document.createElement("h3")
titulo.innerHTML = "<h3> Sistema de sorteos </h3>"
document.body.append(titulo)


let nameInput = document.createElement("div")
nameInput.innerHTML = "<form id='formu'><input type='text' id='nombre' placeholder='Nobre de participante a agregar'></form>"
document.body.append(nameInput)


let botonAdd = document.createElement("button")
botonAdd.innerHTML = "<button id='buttonAdd'>Agregar</button>"
document.body.append(botonAdd)


let botonSort = document.createElement("button")
botonSort.innerHTML = "<button id='buttonSort'>Sortear</button>"
document.body.append(botonSort)

let participantes = document.createElement("h3")
participantes.innerHTML = "Participantes: "
document.body.append(participantes)




 // boton Añadir participante

let tablaNombres = []

botonAdd.onclick = () => {

let nombre = document.getElementById("nombre")
tablaNombres.push(nombre.value)
participantes.innerHTML = '<h3> Participantes  - N° participantes : '+tablaNombres.length+'</h3>'
nombre.value = ""
console.log(tablaNombres)
}


  // boton Sortear 

botonSort.onclick = () => {


let winer = tablaNombres[parseInt(Math.random() * tablaNombres.length)]

let mostrarganador = document.createElement("h2")
mostrarganador.innerHTML = '<h2 id="pantalla">El Ganador es : '+winer+'</h2>'
document.body.append(mostrarganador)

	}



}





///////////////////////////////////////////////////////////////////////////

//      Programa de Productos  (objetos) con json 

///////////////////////////////////////////////////////////



function Tecnicos(){  


let tablero = document.getElementById("display")    



let titulo = document.createElement("h3")
titulo.innerHTML = "<h3>Servicio de Electricistas</h3>"
document.body.append(titulo)


let botoninf = document.createElement("button")
botoninf.innerHTML = "<button id='butonAdd2'>ver lista de Tecnicos </button>"
document.body.append(botoninf)



botoninf.onclick = () => {



        var header = document.getElementById('display');





fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
    .then(data =>{  

				data.forEach(productos =>  {     

						const  card  =  document.createElement("tr")
						card.innerHTML = `

	<th>Tecnico/a:  ${productos.name} </th>
	<th>edad</th>  ${productos.email} </th>
	<th>correo</th> ${productos.age} </th>
<th>Nº de empleado: ${productos.id}</th>

															`
						header.appendChild(card)


							})


		 })





}



}








