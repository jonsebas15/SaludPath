function validarLogin() {
    let res

    let Cedula = document.getElementById("cedula").value;
    const contrasena = document.getElementById('contrasena').value;

    // Preparar los datos
    const data = {
        cedula: {numero_identificacion: Cedula},
        contrasena: contrasena
    };
    console.log(JSON.stringify(data))

    // Hacer el fetch al back-end
    fetch('http://localhost:9090/login/verificar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include',
    })
    .then(response => response.text())
    .then(data => {
        // Mostrar el resultado en la página
        document.getElementById('resultado').textContent = data;
        if(data === "Login exitoso"){
            window.location.href = 'menu.html';
            console.log("bien")
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultado').textContent = "Hubo un error al verificar el login.";
    });
};