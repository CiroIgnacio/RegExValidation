// Ocultamos por defecto los mensajes de error
const span = Array.from(document.querySelectorAll("span"));
span.forEach( x =>  x.classList.add("oculto") );


// Captura de elementos del form
const formulario = document.forms.registro;
const nombre = formulario.elements.nombre;
const email = formulario.elements.email;
const pais = formulario.elements.pais;
const checkbox = formulario.elements.terminos;

// Generar la lista en el select
const paises = [{value: "ar", text: "Argentina"}, {value: "br", text: "Brasil"}, {value: "ch", text: "Chile"}];
const fragmento = document.createDocumentFragment();
paises.forEach( pais => {
        const option = document.createElement("option");
        option.value = pais.value;
        option.textContent = pais.text;
        fragmento.appendChild(option);
    });
pais.appendChild(fragmento);

// Borro el seleccionar para que no aparezca en el combo
pais.addEventListener("click", (e) => {
    if (e.target.length == 4) {
        e.target.removeChild(e.target.childNodes[1]);
    }
});




// Escuchamos los eventos sobre los que vamos a validar
formulario.addEventListener("focusout", (e) => {
    e.stopPropagation();
    validar(nombre, email, pais, checkbox);
});

formulario.addEventListener("submit", (e) => {

    if (!validar(nombre, email, pais, checkbox)) {
        e.preventDefault();
    }
});

// Recopilo los elementos a validar

function validar(cadenaNombre, cadenaEmail, valorSeleccionado, nodoCheck) {
    let listaErrores = [];
    let listaCorrectos = [];
    if (!validarNombre(cadenaNombre.value)) {
        listaErrores.push(cadenaNombre); 
    }
    else {
        listaCorrectos.push(cadenaNombre);
    }
    if (!validarEmail(cadenaEmail.value)) {
        listaErrores.push(cadenaEmail); 

    }
    else {
        listaCorrectos.push(cadenaEmail);
    }

    if (!validarSelector(valorSeleccionado.value)) {
        listaErrores.push(valorSeleccionado); 
    }

    else {
        listaCorrectos.push(valorSeleccionado);
    }

    if (!validarCheck(nodoCheck)){
        nodoCheck.nextElementSibling.nextElementSibling.classList.remove("oculto");
        nodoCheck.classList.add("con-error");
    }
    else {
        nodoCheck.nextElementSibling.nextElementSibling.classList.add("oculto");
        nodoCheck.classList.remove("con-error");
    }

    listaCorrectos.forEach( x => {
        x.classList.remove("con-error");
        x.nextElementSibling.classList.add("oculto");
    });

    listaErrores.forEach( x => {
        x.classList.add("con-error");
        x.nextElementSibling.classList.remove("oculto");
    });


    return(listaErrores.length > 0 ? false: true);
}
