// document.write("hola mundo!");
// document.write("Soy un hola mundo con comillas dobles pero hago lo mismo que arriba!");
// // variables: informacion que puede cambiar
// var nombre = "franco"; // string
// var sueldo = 1.23; // float
// var felicidad = false; // booleano  0 o 1 true o False
// var correo = "luciano44@gmail.com"; // string
// var numerito = 2; // entero

// document.write(sueldo); // estoy impriendo la variable sueldo

// document.write("mi sueldo es :" + sueldo + " y mi mail es :" + correo); // concatenar
// //function : bloque de codigo que ejecuta una accion determinada 
// var usuario = prompt("Ingresa tu sueldo", "por favor");
// // la funcion prompt tiene 2 parametros separados por una coma el primero es el titulo del mensaje y el segundo es el que viene en el input.



// document.write( "<br>" + usuario + "<br>");
// var edad = prompt("ingresa tu edad","ej 3");

// document.write(typeof(numero1));
// typeof es una funcion que sirve que tipo de dato estoy analizando.

numero1 = parseInt(numero1); // transforma la variable a numero entero.

var numero2 = prompt("ingresa el otro numero", "jugate dale");
// numero2 = parseInt(numero2);
//  document.write(numero1 + "<br>" + "+" +"<br>" + numero2 +"<br>"+ numero1+numero2);
var numero3 = prompt("ingresa el numero");
//  if(condicion){tareas a ejecutar}
if( edad > 18){
    alert("Bienvenido al sitio") // funcion que levanta un pop-up
} else {
    alert("Espera un par de añitos pendejo")
};




var numero1 = parseInt(numero1); 
var numero2 = parseInt(numero2);
var numero3 = parseInt(numero3);

if (numero1 > numero2) {
    if (numero1 > numero3) {
        alert(numero1+"es el mas grande");
    }
} else {
    alert(numero3+"es el mas grande");
}
if (numero2 > numero3) {
        alert(numero2+"es el mas grande");
    } else {
        alert(numero3+"es el mas grande");
    }

// && operador and agregar 