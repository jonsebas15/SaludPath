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
            console.log(data)
            console.log(data.cedula)
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultado').textContent = "Hubo un error al verificar el login.";
    });
};
function registro(){
    document.getElementById('resultado').textContent = "";
}


function registerLogin(){
    const cedula2 = document.getElementById("cedulaNueva").value;
    const contrasena2 = document.getElementById('contrasenaNueva').value;
    const contrasena3 = document.getElementById('contrasenaNueva2').value;

    if(contrasena2 === contrasena3){
        const data2 = {
            cedula: {numero_identificacion: cedula2},
            contrasena: contrasena2
        };
    
        fetch('http://localhost:9090/login/verificar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data2)
        })
        .then(response => response.json())
        .then(data => {
            console.log("entro al then")
            if(data.message === "El usuario no tiene contraseña, registrate"){
                console.log("entro al if 1")
                const data3 = {
                        id_login: data.idLogin,
                        cedula:data.cedula,
                        contrasena:contrasena2
                }
                fetch('http://localhost:9090/login', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data3)
                })
                .then(response => response.text())
                .then(res => {
                    document.getElementById('resultado2').textContent = res;
                })
            }else{
                document.getElementById('resultado2').textContent = data.message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultado2').textContent = "Hubo un error al hacer el registro.";
        });

    }else{
        document.getElementById('resultado2').textContent = "Las contraseñas no coinciden ";
    }


}