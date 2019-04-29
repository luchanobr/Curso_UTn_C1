// function verificar_password() {

//     var pwd = document.getElementById("clave1").value;
//     if (pwd.length >= 10){
//         alert("Contraseña valida");
//     } else {
//         alert("Contraseña invalida");
//     }
// // }

// var dias = [31,28,31,30,31,30,31,31,30,31,30,31];
// var meses = ["enero", "febrero", "marzo","abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];


// var anio = prompt("El año actual es viciesto?? si o no", );

// if (anio == "si"){
//     dias[1] = 29;
// } else {
//     console.log("el anio no es viciesto");
// }

// // for (i=0; i <= 11; i++) {
// //     document.write("El mes de "+meses[i]+ " tiene "+ dias[i]+ " dias. <br>" );
// // }

// for (var i of meses){
//     i++;
//     document.write("El mes de "+meses[i]+ " tiene "+ dias[i]+ " dias. <br>" );
// }



// var asdas = [ ["asdasd",2], ["asdasdasdads", 4] ];

// asdas[0,1]

// crear 2 funciones
/// craas 5 promtp q se guarden en un array de 5 elementos una funcion que cargue el array y otra q cuente cuntos numeros hay mayores a 100

var userArr = new Array(); 

function cargador(array){

    for (i=0; i<=4; i++){
        var dato = prompt("Ingresa un numero...", "ej: 245");
        array.push(dato);
    }
}

function mayor100(array){
    var cont = 0;
    for (i=0; i<=array.length-1;i++){
        if (array[i]>100) {
            cont++;
        }
    
}
    document.write("tenes "+cont+ "numeros mayores a 100");
}



cargador(userArr);

mayor100(userArr);
console.log(userArr);