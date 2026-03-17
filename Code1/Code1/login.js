let formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    // buscar usuario guardado
    let usuarioGuardado = localStorage.getItem("usuarioRegistrado");

    if (!usuarioGuardado) {
        alert("No hay usuarios registrados");
        return;
    }

    let usuario = JSON.parse(usuarioGuardado);

    // validar credenciales
    if (correo === usuario.correo && clave === usuario.password) {

        // guardar sesión
        sessionStorage.setItem("usuarioActivo", usuario.correo);

        alert("Bienvenido a Mauroflex");

        window.location.href = "Menu.html";

    } else {

        document.getElementById("mensajeError").textContent = "Correo o contraseña incorrectos";
        document.getElementById("mensajeError").style.color = "red";
    }

});
