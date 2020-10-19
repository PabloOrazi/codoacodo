var form = document.formulario;
var user = document.getElementById('user');
var pass = document.getElementById('pass');
var submit = document.getElementById('submit');

/*    Mediante el uso del evento que se ejecuta en el momento del 
envío del formulario se valide que los cuadros de texto correspondientes 
a “usuario y clave” no se encuentren vacíos y que el cuadro de texto del 
“usuario” incluya un arroba. Si ambos campos no se validan correctamente 
el formulario no debe enviarse y deberá desplegarse una ventana 
indicando el motivo por el cual no puede ingresar 
por ej: “Falta el arroba en el usuario” */

form.onsubmit = function(e) {
  var mensaje_error = "Ha habido problemas en el ingreso de datos:\n"
  var error = false
  if (user.value === '') {
    error = true
    mensaje_error += "El usuario está vacío\n";
  }
  if (user.value.indexOf("@") < 0) {
    error = true
    mensaje_error += "Falta el arroba en el usuario\n";
  }
  if (pass.value === '') {
    error = true
    mensaje_error += "La contraseña está vacía\n";
  } 
  if (error){
    alert(mensaje_error);
  }
}