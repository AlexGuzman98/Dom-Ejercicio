/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el forom
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso arriba de los campos con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */
const form = document.querySelector("form");
const input = document.querySelectorAll('.requerido');
const script = document.querySelector('script');
const formulario = form.parentElement;
const h3Texto = document.createElement('h3');
const h4Texto = document.createElement('h4');
let mensajeError = '';
let mensajeValidado = '';

form.addEventListener("submit", function(e) {
  e.preventDefault();
  input.forEach(element =>{
    if(element.value != ''){
      element.style.border = 'solid 2px black';
      mensajeError = '';
      mensajeValidado = "Se envio su formulario";
    }else{
      element.style.border = 'solid 2px red';
      mensajeError = 'Ha ocurrido un Error';
      mensajeValidado = '';
    }
  });
  h3Texto.innerText = mensajeValidado;
  h4Texto.innerText = mensajeError;

  formulario.insertBefore(h3Texto, script);
  h3Texto.style.backgroundColor = "#77DD77";
  h3Texto.style.width = "200px";
 
  formulario.insertBefore(h4Texto, form);
  h4Texto.style.backgroundColor = "#EF9A9A";
  h4Texto.style.width = "180px";
 

});
