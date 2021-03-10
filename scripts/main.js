const miImagen = document.querySelector("img");

miImagen.onclick = function () {
    let srcImage = miImagen.getAttribute("src");
    if (srcImage === "images/image-1.jpg") {
        miImagen.setAttribute("src", "images/image-2.jpg");
    } else {
        miImagen.setAttribute("src", "images/image-1.jpg")
    }
}

const miTitulo = document.querySelector("h1"),
      miBoton = document.querySelector("button");

function establecerNombreUsuario() {
    let miNombre = prompt("Introduce tu nombre de usuario por favor!!!");
    if (!miNombre) {
        establecerNombreUsuario();
    } else {
        localStorage.setItem("nombre", miNombre);
        miTitulo.textContent = "Bienvenido " + miNombre;
    }
}

if (!localStorage.getItem("nombre")) {
    establecerNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Bienvenido " + nombreAlmacenado;
}

miBoton.onclick = function () {
    establecerNombreUsuario();
}