
function validar() {
    /*Validar Nombre*/
    let x=document.getElementById("nombre").value;
    if (x == 0) {
      alert("Falta rellenar el campo NOMBRE");
      return false;
    }
  
    /*Validar Apellido*/
    let y=document.getElementById("apellido").value;
    if (y == 0) {
      alert("Falta rellenar el campo APELLIDO");
      return false;
    }

    /*Validar SeleccionConsulta*/
    const selectElement = document.getElementById("consulta");
    if (selectElement.selectedIndex === 0) {
        alert("Selecciona una opción a consultar");
        return false;
    }

    /*Validar Comentario*/
    let a=document.getElementById("comentarios").value;
    if (a == 0) {
        alert("Falta rellenar el campo comentarios");
        return false;
    }

    /*Validar Correo*/
    var z=document.getElementById("email");
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (validEmail.test(z.value)){
        return true;
    }else{
        if ((z=z.value) == 0) {
            alert("Falta rellenar el campo EMAIL");
            return false;
        }else{
            alert("Formato de EMAIL invalido");

        }
    }    

}
