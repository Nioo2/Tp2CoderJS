

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


case "Productos":

	Productos()
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
titulo.innerHTML = "<h3>Calculadora de Inflacion</h3>"
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
precioNuevo.innerHTML = '<h3> El Nuevo Precio es de : '+resultado+'</h3>'
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


let wattsInput = document.createElement("form")
wattsInput.innerHTML = "<input type='numer' id='watts' placeholder='Potencia Total en Watts de la instalacion' required >"
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
cableDiam.innerHTML = '<h3> Debera usar un cable de  '+diametro+' mm2 de diametro </h3>'
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


let nameInput = document.createElement("form")
nameInput.innerHTML = "<input type='text' id='nombre' placeholder='Nobre de participante a agregar'>"
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
participantes.innerHTML = '<h3>se agrego el participante - N° participantes : '+tablaNombres.length+'</h3>'
nombre.value = ""
console.log(tablaNombres)
}


  // boton Sortear 

botonSort.onclick = () => {


let winer = tablaNombres[parseInt(Math.random() * tablaNombres.length)]

let mostrarganador = document.createElement("h2")
mostrarganador.innerHTML = '<h2>El Ganador es : '+winer+'</h2>'
document.body.append(mostrarganador)

	}



}





///////////////////////////////////////////////////////////////////////////

//      Programa de Productos  (objetos)

///////////////////////////////////////////////////////////



function Productos(){  




//objetos

/*
const procesador1 = { 


marca: "amd"
modelo: "ryzen 3"
precio: "150000"
sotck: "3"
}



const procesador2 = { 
marca: "intel"
modelo: "i5"
precio: "250000"
sotck: "2"
}


const procesador3 = { 
marca: "intel"
modelo: "i7"
precio: "450000"
sotck: "1"
}


*/

let tablero = document.getElementById("display")    



let titulo = document.createElement("h3")
titulo.innerHTML = "<h3>Registro de Productos</h3>"
document.body.append(titulo)


let inproducto = document.createElement("form")
inproducto.innerHTML = "<input type='text' id='producto' placeholder='Producto' required >"
document.body.append(inproducto)

let inmarca = document.createElement("form")
inmarca .innerHTML = "<input type='text' id='marca' placeholder='Marca' required >"
document.body.append(inmarca)

let inModelo = document.createElement("form")
inModelo .innerHTML = "<input type='text' id='Modelo' placeholder='Modelo' >"
document.body.append(inModelo)


let inprecio = document.createElement("form")
inprecio .innerHTML = "<input type='number' id='Precio' placeholder='Precio required >"
document.body.append(inprecio)

let inStock = document.createElement("form")
inStock .innerHTML = "<input type='number' id='Stock' placeholder='Stock' >"
document.body.append(inStock)


let botoninf = document.createElement("button")
botoninf.innerHTML = "<button id='butonAdd2'>Ingresar Producto</button>"
document.body.append(botoninf)



botoninf.onclick = () => {


let producto=inproducto.value
let marca= inmarca.value
let modelo=inModelo.value
let precio=inprecio.value
let stock=inStock.value

console.log(producto,marca,modelo,precio,stock)


let listaProductos = document.createElement("h3")

listaProductos.innerHTML = '<h3>Productos</h3> <b> '+ producto+'  </b>'
document.body.append(listaProductos)

}



}








