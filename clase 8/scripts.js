//  var usuario1 = "Franco";
//  var password1 = "pasteles";
//  var usuario2 = "Luciano";
//  var password2 = "chocolate"
//  var datousuario = prompt("ingresa el usuario", "eje...");
//  var passwordusuario = prompt("ingresa la contraseña", "*********")
//  if ((datousuario == "Franco" && passwordusuario == "pasteles") || (datousuario == "Luciano" && passwordusuario == "chocolate")) {
//      document.write("Bienvenido !! administrador ... ");
//  } else {
//      document.write("Acceso denegado raton!!!");
//  }
//  // Bucles : while for do while foreach
//  // for  se usa para recorer una cantidad conocida de elementos .
//  // for (inicio, condicion, incremento/decremento).
//     for (i = 0; i < 10; i++) {
//     document.write(i + "<br>");
//     }
//     mediante un prompt ingrese un valor  y pasar por un parseInt() y del numero que ingresa la persona calcular la tablas hasta al 20
//     var numeroUsuario = parseInt(prompt("Ingresa un numero por favor", "ej: 3"))
//     for (i = 0; i <= 20; i++) {
//         document.write(numeroUsuario * i + "<br>");
//         document.write("<br>");
    
// // permitir al usuario ingresar 10 numeros x prompt
//   //  quiero distinguir cuantos numeros positivos hay
//     //cuantos numeros negativos hay
//     cuantos son pare
//     var positivos = 0;
//     var negativos = 0;
//     var pares = 0
//     for (i = 1; i <= 10; i++) 
//         var numeroUsuario = parseInt(prompt("Ingresa un numero por favor", "ej: 3"));
 
//         if (numeroUsuario > 0 && numeroUsuario % 2 == 0) {
     
//             pares++
//         } else if (numeroUsuario < 0) {
//             negativos++;
    

function dividir(num1,num2){
    if (num2 == 0) {
        alert("boludo no se puede dividir por 0");
    } else {
        var resultado = num1/num2;
        document.write("el resultado de la division es : "+resultado);
    }
   
}