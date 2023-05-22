function validarFormulario() {
  // Obtener los valores ingresados por el usuario y recortar
  // los posibles espacios en blanco al principio y al final.
  let apellido = document.getElementById("apellido").value.trim(); /* .value.trim() */
  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
  let consulta = document.getElementById("consulta").value.trim();
  let generoH = document.getElementById("generoHombre").checked;
  let generoM = document.getElementById("generoMujer").checked;
  // ESTE CAMPO SE ELIMINA
  let genero = document.getElementsByName("sexo").values.name;
  // ESTE CAMPO SE ELIMINA
  let refSocio = document.getElementById("socio").checked;
  let refVecino = document.getElementById("vecino").checked;
  let refInternet = document.getElementById("internet").checked;
  let refPublicidad = document.getElementById("publicidad").checked;
  let refAmigos = document.getElementById("amigos").checked;
  let refOtros = document.getElementById("otros").checked;




  /*********************************************************************/
  //Variable que determina que ingreso erróneo se cometio.
  //posicion 0: error de Apellido.
  //posicion 1: error de Nombre.
  //posicion 2: error de email.
  //posición 3: error de fecha Nacimiento.
  //posicion 4: error de consulta.
  //genero y contacto NO producen error.
  /*********************************************************************/
  error = new String(6);
  error = '000000'

  //********************************************
  // Verificar APELLIDO 
  //********************************************
  if (apellido === "") {
    // Verificar si algún campo está en blanco
    document.getElementById("errorApellido").style.display = "";

    error = error.replaceAt(0, '1');
    // alert("no tiene nada" + error);
  } else {
    // Verificar si el apellido contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < apellido.length; i++) {
      var charCode = apellido.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {

        document.getElementById("errorApellido").style.display = "";
        error = error.replaceAt(0, '1');
      }
    }
    if (error[0] == '0') {
      document.getElementById("errorApellido").style.display = "none";
    }
  }
  //********************************************
  // Verificar NOMBRE 
  //********************************************
  if (nombre === "") {
    // Verificar si algún campo está en blanco
    document.getElementById("errorNombre").style.display = "";

    error = error.replaceAt(1, '1');
    // alert("no tiene nada" + error);
  } else {
    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {

        document.getElementById("errorNombre").style.display = "";
        error = error.replaceAt(1, '1');
      }
    }
    if (error[1] == '0') {
      document.getElementById("errorNombre").style.display = "none";
    }
  }


  //********************************************
  // Verificar campo EMAIL 
  //********************************************
  if (email === "") {
    document.getElementById("errorEmail").style.display = "";
    error = error.replaceAt(2, '1');
  } else {
    document.getElementById("errorEmail").style.display = "none";
  }

  //********************************************
  // Verificar campo FECHA NACIMIENTO 
  //********************************************
  if (fechaNacimiento === "") {
    document.getElementById("errorFechaNacimiento").style.display = "";
    error = error.replaceAt(3, '1');
  } else {
    let hoy = new Date();
    let anioActual = hoy.getFullYear();
    let anioNacimiento = parseInt(fechaNacimiento.slice(0, 4));
    if ((anioNacimiento >= 1924) && (anioNacimiento <= anioActual)) {
      document.getElementById("errorFechaNacimiento").style.display = "none";
    } else {
      document.getElementById("errorFechaNacimiento").style.display = "";
      error = error.replaceAt(3, '1');
    }


  }
  //********************************************
  // Verificar ¿CÓMO NOS CONOCE?
  //********************************************
  if (refSocio || refVecino || refInternet || refPublicidad || refAmigos || refOtros) {
    document.getElementById("errorConocimiento").style.display = "none";

  } else {
    document.getElementById("errorConocimiento").style.display = "";
    error = error.replaceAt(4, '1');
  }





  //********************************************
  // Verificar campo CONSULTA 
  //********************************************
  if (consulta === "") {
    document.getElementById("errorConsulta").style.display = "";
    error = error.replaceAt(5, '1');
  } else {
    if (consulta.length < 10) {
      document.getElementById("errorConsulta").style.display = "";
      error = error.replaceAt(5, '1');

    } else {
      document.getElementById("errorConsulta").style.display = "none";
    }
  }

  //*********************************************** */
  if (error[0] == '1') {
    document.getElementById("errorApellido").style.display = "";
    alert("El campo 'Apellido' NO puede estar vacío y solo puede contener caracteres alfabéticos y espacios.");
    return false;
  } else if (error[1] == '1') {
    document.getElementById("errorNombre").style.display = "";
    alert("El campo 'Nombre' NO puede estar vacío y solo puede contener caracteres alfabéticos y espacios.");
    return false;
  } else if (error[2] == '1') {
    document.getElementById("errorEmail").style.display = "";
    alert("El campo 'e-mail' NO puede estar vacío.\nSin este dato no podremos responderle.");
    return false;

  } else if (error[3] == '1') {
    document.getElementById("errorFechaNacimiento").style.display = "";
    alert("El campo 'Fecha de Nacimiento' NO puede estar vacío, y debe estar comprendido entre los años '1924' y el año actual.\nNecesitamos conocerlo mejor.");
    return false;
  } else if (error[4] == '1') {
    document.getElementById("errorConocimiento").style.display = "";
    alert("El campo '¿Cómo nos conoce?', debe tener por lo menos una opción seleccionada.");
    return false;

  } else if (error[5] == '1') {
    document.getElementById("errorConsulta").style.display = "";
    alert("Debe ingresar una consulta válida, de por lo menos 10 caracteres.\nNecesitos conocer su inquietud para poder ayudarlo.");
    return false;

  } else {
    // document.getElementById("errorNombre").style.display = "none";
    // VALIDACIONES EXITOSAS, se envia el formulario.
    let cadenaMsg = 'Apellido: ' + apellido + '\n' + 'Nombre: ' + nombre + '\n'
    cadenaMsg += 'e-mail: ' + email + '\n' + 'Fecha Nacimiento: ' + fechaNacimiento + '\n'
    cadenaMsg += 'genero M: ' + generoH + '\n' + 'genero F: ' + generoM + '\n'
    cadenaMsg += '\n¿Cómo nos conoce?:' + '\n'
    cadenaMsg += 'Socio: ' + refSocio + '\n' + 'Vecino: ' + refVecino + '\n'
    cadenaMsg += 'Internet: ' + refInternet + '\n' + 'publicidad: ' + refPublicidad + '\n'
    cadenaMsg += 'amigos: ' + refAmigos + '\n' + 'otros: ' + refOtros + '\n'

    cadenaMsg += 'consulta realizada:\n' + consulta + '\n'
    alert("FORMULARIO ENVIADO CORRECTAMENTE, con los siguiente datos \n" + cadenaMsg);
    return true;
  }
}

String.prototype.replaceAt = function (index, replacement) {
  //Funcion para reemplazar un caracter dentro de la 
  //cadena 'error' indicando el índice de la posición.
  if (index >= this.length) {
    return this.valueOf();
  }

  var chars = this.split('');
  chars[index] = replacement;
  return chars.join('');
}



// BLOQUE INICIAL
{
  document.getElementById("errorApellido").style.display = "none";
  document.getElementById("errorNombre").style.display = "none";
  document.getElementById("errorEmail").style.display = "none";
  document.getElementById("errorFechaNacimiento").style.display = "none";
  // document.getElementById("errorGenero").style.display = "none";
  // document.getElementById("errorCBox").style.display = "none";
  document.getElementById("errorConocimiento").style.display = "none";
  document.getElementById("errorConsulta").style.display = "none";

} 