var cedula;
var nombre;
var apellido;
var correo;
var contra1;
var contra2;
var telefono;
var direccion;
var fecha;

function validarCampos() {
    var bandera = true;
    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value == '' && elemento.type == 'password') {
            if (elemento.id == 'contraseña') {
                document.getElementById('mensajeContraseña').style = 'display:block; color:white;'
                document.getElementById('mensajeContraseña').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'Vcontraseña') {
                document.getElementById('mensajeVcontraseña').style = 'display:block; color:white;'
                document.getElementById('mensajeVcontraseña').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
        } else {
            if (elemento.id == 'contraseña') {
                document.getElementById('mensajeVcontraseña').style = 'display:none;'
            }
            if (elemento.id == 'Vcontraseña') {
                document.getElementById('mensajeVcontraseña').style = 'display:none;'
                contra1 = document.getElementById("contraseña").value;
                contra2 = document.getElementById("Vcontraseña").value;
                if (val_contras(contra1, contra2) == false) {
                    document.getElementById('mensajeVcontraseña').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                    document.getElementById('mensajeVcontraseña').innerHTML = '<b>No coinciden'
                }

            }
        }
        if (elemento.value == '' && elemento.type == 'text') {
            if (elemento.id == 'nombre') {
                document.getElementById('mensajeNombre').style = 'display:block; color:white;'
                document.getElementById('mensajeNombre').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"

            }
            if (elemento.id == 'apellido') {
                document.getElementById('mensajeApellido').style = 'display:block; color:white;'
                document.getElementById('mensajeApellido').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').style = 'display:block; color:white;'
                document.getElementById('mensajeCedula').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'fechanac') {
                document.getElementById('mensajeFechanac').style = 'display:block; color:white;'
                document.getElementById('mensajeFechanac').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').style = 'display:block; color:white;'
                document.getElementById('mensajeTelefono').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').style = 'display:block; color:white;'
                document.getElementById('mensajeCorreo').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }
            if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').style = 'display:block; color:white;'
                document.getElementById('mensajeDireccion').innerHTML = 'Campo vacio'
                elemento.style.border = "1px red solid"
            }


        } else {
            if (elemento.id == 'nombre') {
                document.getElementById('mensajeNombre').style = 'display:none;'
                nombre = document.getElementById("nombre").value;
                if (val_letra(nombre) == false) {
                    document.getElementById('mensajeNombre').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                    document.getElementById('mensajeNombre').innerHTML = '<b>No se permite numeros'
                }
            }
            if (elemento.id == 'apellido') {
                document.getElementById('mensajeApellido').style = 'display:none;'
                apellido = document.getElementById("apellido").value;
                console.log(apellido)
                if (val_letra(apellido) == false) {
                    document.getElementById('mensajeApellido').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                    document.getElementById('mensajeApellido').innerHTML = '<b>No se permite numeros'
                }

            }
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').style = 'display:none;'
                cedula = document.getElementById("cedula").value;
                if (val_numero(cedula) == false) {
                    document.getElementById('mensajeCedula').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                    document.getElementById('mensajeCedula').innerHTML = '<b>No se permite letras'
                } else {
                    validaCedula();
                }
            }
            if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').style = 'display:none;'
                direccion = document.getElementById("direccion").value;

                if (val_letra(direccion) == false) {
                    document.getElementById('mensajeDireccion').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                    document.getElementById('mensajeDireccion').innerHTML = '<b>No se permite numeros'
                }

            }
            if (elemento.id == 'fechanac') {
                document.getElementById('mensajeFechanac').style = 'display:none;'
                fecha = document.getElementById("fechanac").value;

                if (val_fecha(fecha) == false) {
                    document.getElementById('mensajeFechanac').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                    document.getElementById('mensajeFechanac').innerHTML = '<b>Formato Incorrecto'
                }

            }
            if (elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').style = 'display:none;'
                telefono = document.getElementById("telefono").value;
                if (val_numero(telefono) == false) {
                    document.getElementById('mensajeTelefono').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                    document.getElementById('mensajeTelefono').innerHTML = '<b>No se permite letras'
                } else {
                    if (validaLongitud(telefono) == false) {
                        document.getElementById('mensajeTelefono').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                        document.getElementById('mensajeTelefono').innerHTML = '<b>Longitud invalida'
                    }
                }
            }
            if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').style = 'display:none;'
                correo = document.getElementById('correo').value;
                if (validarCorreo(correo) == 0) {

                    document.getElementById('mensajeCorreo').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                    document.getElementById('mensajeCorreo').innerHTML = '<b>Inicio corto'
                }
                if (validarCorreo(correo) == -1) {

                    document.getElementById('mensajeCorreo').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                    document.getElementById('mensajeCorreo').innerHTML = '<b>Extension Invalida'
                }
            }

        }
        bandera = false

    }

}
function init() {
    var enviar = document.getElementById("boton");
    enviar.onclick = function (e) {
        validarCampos();

    }

}
function validaCedula() {
    console.log(cedula.length)
    //Preguntamos si la cedula consta de 10 digitos
    if (cedula.length == 10) {

        //Obtenemos el digito de la region que sonlos dos primeros digitos
        var digito_region = cedula.substring(0, 2);

        //Pregunto si la region existe ecuador se divide en 24 regiones
        if (digito_region >= 1 && digito_region <= 24) {

            // Extraigo el ultimo digito
            var ultimo_digito = cedula.substring(9, 10);

            //Agrupo todos los pares y los sumo
            var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));

            //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
            var numero1 = cedula.substring(0, 1);
            var numero1 = (numero1 * 2);
            if (numero1 > 9) { var numero1 = (numero1 - 9); }

            var numero3 = cedula.substring(2, 3);
            var numero3 = (numero3 * 2);
            if (numero3 > 9) { var numero3 = (numero3 - 9); }

            var numero5 = cedula.substring(4, 5);
            var numero5 = (numero5 * 2);
            if (numero5 > 9) { var numero5 = (numero5 - 9); }

            var numero7 = cedula.substring(6, 7);
            var numero7 = (numero7 * 2);
            if (numero7 > 9) { var numero7 = (numero7 - 9); }

            var numero9 = cedula.substring(8, 9);
            var numero9 = (numero9 * 2);
            if (numero9 > 9) { var numero9 = (numero9 - 9); }

            var impares = numero1 + numero3 + numero5 + numero7 + numero9;

            //Suma total
            var suma_total = (pares + impares);

            //extraemos el primero digito
            var primer_digito_suma = String(suma_total).substring(0, 1);

            //Obtenemos la decena inmediata
            var decena = (parseInt(primer_digito_suma) + 1) * 10;

            //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
            var digito_validador = decena - suma_total;

            //Si el digito validador es = a 10 toma el valor de 0
            if (digito_validador == 10)
                var digito_validador = 0;

            //Validamos que el digito validador sea igual al de la cedula
            if (digito_validador == ultimo_digito) {
                console.log('la cedula:' + cedula + ' es correcta');
                document.getElementById('mensajeCedula').style = 'display:none;'

            } else {
                console.log('la cedula:' + cedula + ' es incorrecta');
                document.getElementById('mensajeCedula').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
                document.getElementById('mensajeCedula').innerHTML = '<b>Cedula Incorrecta'
            }

        } else {
            // imprimimos en consola si la region no pertenece
            console.log('Esta cedula no pertenece a ninguna region');
            document.getElementById('mensajeCedula').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
            document.getElementById('mensajeCedula').innerHTML = '<b>No pertenece a ninguna region'

        }
    } else {
        //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
        console.log('Esta cedula tiene menos de 10 Digitos');
        document.getElementById('mensajeCedula').style = 'display:block; color:rgb(144, 248, 41); font-size:20px;'
        document.getElementById('mensajeCedula').innerHTML = '<b>Esta cedula tiene menos de 10 Digitos'
    }
}

function val_letra(dato) {
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';//Caracteres validos

    //Recorre el value y verifica si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < dato.length; i++)
        if (filtro.indexOf(dato.charAt(i)) != -1) {

            out += dato.charAt(i);
            console.log(out)
        } else {
            console.log
            return false;
        }

}

function val_numero(dato) {
    var out = '';
    var filtro = '1234567890';//Caracteres validos

    //Recorre el value y verifica si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < dato.length; i++)
        if (filtro.indexOf(dato.charAt(i)) != -1) {
            //Se añaden a la salida los caracteres validos
            out += dato.charAt(i);
        } else {
            return false;
        }


    //Retornar el valor filtrado
    return out;
}
function validarCorreo(dato) {
    dato = correo = document.getElementById('correo').value.split('@');
    console.log
    if (dato[0].length < 4) {

        return 0;
    } else {
        if (!(dato[1] == 'ups.edu.ec') && !(dato[1] == 'est.ups.edu.ec')) {

            return -1;
        } else {
            return 1;
        }

    }
}

function val_contras(dato, dato1) {
    var ac = 0;
    for (var i = 0; i < dato.length; i++) {
        console.log(dato1[i], dato[i]);
        if (dato[i] == dato1[i]) {
            ac = ac + 1;
            console.log(ac);
            console.log(dato.length)
        }
    }
    if (ac == dato.length) {
        console.log("no llego");
        return true
    } else {
        return false;
    }





}
function validaLongitud(dato) {
    if (dato.length != 10) {
        return false;
    } else {
        return true;
    }
}

function val_fecha(dato) {
    dato= document.getElementById('fechanac').value.split('/');
    console.log(dato[0])
    var fecha1 = new Date(dato[2], dato[1], dato[0]);
    console.log(fecha1.getDate(),fecha1.getMonth(),fecha1.getFullYear());
    if (dato.length == 3 && dato[0] == fecha1.getDate() 
        && dato[1]== fecha1.getMonth() 
        && dato[2] == fecha1.getFullYear()) {
        return true;
    } else {
       
        return false; //Inválida
    }
}

