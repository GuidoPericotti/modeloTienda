
function validar() {
    /*Validar Nombre*/
    var nombre = document.getElementById("nombre");
    var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (!expRegNombre.test(nombre.value)){
        if ((nombre=nombre.value) == 0) {
            alert("El campo nombre es requerido");
        }else{
            alert("El campo nombre admite letras y espacios");
        }
        return false;
    }
  
    /*Validar Apellido*/
    var apellido = document.getElementById("apellido");
    var expRegApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (!expRegApellido.test(apellido.value)){
        if ((apellido=apellido.value) == 0) {
            alert("El campo apellido es requerido");
        }else{
            alert("El campo apellido admite letras y espacios");
        }
        return false;
    }

    /*Validar Correo*/
    var z=document.getElementById("email");
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validEmail.test(z.value)){
        if ((z=z.value) == 0) {
            alert("Falta rellenar el campo EMAIL");
        }else{
            alert("Formato de EMAIL invalido");
        }
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
}
