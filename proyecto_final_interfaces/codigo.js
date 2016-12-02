micaja.on('blur',validar);

var selecion = $('#animal');
var imagen = $('#imagen');
selecion.on('change', cambiarImagen)
function cambiarImagen(){  
	var elemento = $(this).val();
	imagen.html('<img src="imagenes/'+elemento+'.jpeg">');
}