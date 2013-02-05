function runDemo() {

  var el = updateTransition();
  
  // Configurar un controlador de eventos para invertir la dirección
  // cuando finalice la transición.
  
  el.addEventListener("transitionend", updateTransition, true);

  
}

function updateTransition() {
  var el = document.querySelector("div.izq");
  
  if (el) {
      
    el.className = "der";
  } else {
    el = document.querySelector("div.der");
    el.className = "izq";
  }
  
  return el;
}

