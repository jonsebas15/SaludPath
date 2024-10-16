function validarLogin() {
    let res

    let Cedula = document.getElementById("cedula").value;
    const contrasena = document.getElementById('contrasena').value;
    console.log(Cedula)
    const data = {
        cedula: {numero_identificacion: Cedula},
        contrasena: contrasena
    };
    console.log(JSON.stringify(data))

    fetch('http://localhost:9090/login/verificar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').textContent = data.message;
        if(data.message === "Login exitoso"){
            window.location.href = 'menu.html';
            console.log("bien")
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultado').textContent = "Hubo un error al verificar el login.";
    });
};

/* function registerLogin(){
    let Cedula2 = document.getElementById("cedulaNueva").value;
    const contrasena2 = document.getElementById('contrasenaNueva').value;
    const data = {
        cedula: {numero_identificacion: Cedula2},
        contrasena: contrasena2
    };
    console.log(JSON.stringify(data))


    fetch('http://localhost:9090/login/verificar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.message === "El usuario no tiene contraseña, registrate"){
            fetch('http://localhost:9090/login/verificar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })


        }
        document.getElementById('mensaje2').textContent = data.message;
        if(data.message === "Login exitoso"){
            window.location.href = 'menu.html';
            console.log("bien")
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultado').textContent = "Hubo un error al verificar el login.";
    });
} */