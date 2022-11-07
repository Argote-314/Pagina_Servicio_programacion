function validar(){
	correo1 = document.getElementById("correo_1").value
	correo2 = document.getElementById("correo_2").value
	telefono = document.getElementById("telefono").value
	nombre = document.getElementById("nombre").value
	textosr = document.getElementById("artexto").value
	

	if (correo1 == "" || correo2 == ""||telefono== ""||nombre==""){
		document.getElementById("error").value = "Debe rellenar todos los espacios"
	}
	else{
		if (correo1 == correo2){
			document.getElementById("error").value = "Todo correcto"
		}
		else{
			document.getElementById("error").value = "Corrija"
		}
	}

}