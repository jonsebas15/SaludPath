const url = 'http://localhost:9090/afiliados'
const contenedor = document.querySelector('tbody')
let resultados =''

const myModal = new bootstrap.Modal(document.getElementById('modalafi'))
const formAfiliados = document.querySelector('form')
const nombre = document.getElementById('nombre-name')
const tipoDoc = document.getElementById('tipoDoc-name')
const documento = document.getElementById('documento-name')
const fechaNacimiento = document.getElementById('fechaNacimiento-name')
const sexo = document.getElementById('sexo-name')

const direccion = document.getElementById('direccion-name')
const telefono = document.getElementById('telefono-name')
const email = document.getElementById('email-name')
const fechaAfiliacion = document.getElementById('fechaAfiliacion-name')
const planSalud = document.getElementById('planSalud-name')
const estadoAfiliacion = document.getElementById('estadoAfiliacion-name')

const crearAfiliado = document.getElementById('crearAfiliado');

let option = ''
crearAfiliado.addEventListener('click', ()=>{
    nombre.value=""
    tipoDoc.value=""
    documento.value=""
    fechaNacimiento.value=""
    sexo.value=""
    direccion.value=""
    telefono.value=""
    email.value=""
    fechaAfiliacion.value=""
    planSalud.value=""
    estadoAfiliacion.value=""

    myModal.show()
    option = 'crear'
})
const mostrar = (afiliados) =>{
    afiliados.forEach(afiliado => {
        resultados += `<tr>
                            <td>${afiliado.id_afiliado}</td>
                            <td>${afiliado.nombre}</td>
                            <td>${afiliado.tipo_identificacion}</td>
                            <td>${afiliado.numero_identificacion}</td>
                            <td>${afiliado.fecha_nacimiento}</td>
                            <td>${afiliado.sexo}</td>
                            <td>${afiliado.direccion}</td>
                            <td>${afiliado.telefono}</td>
                            <td>${afiliado.email}</td>
                            <td>${afiliado.fecha_afiliacion}</td>
                            <td>${afiliado.plan_salud}</td>
                            <td>${afiliado.estado_afiliacion}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>  
                        </tr>`
    });
    contenedor.innerHTML = resultados
}
fetch(url)
    .then(response => response.json())
    .then(data => {mostrar(data); console.log(data)})
    .catch(error => console.log(error))

const on = (element, event, selector, handler)=>{
    console.log("borrado2")
    element.addEventListener(event, e =>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnBorrar', e=>{
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    const cedu = fila.children[3].innerHTML
    
    alertify.confirm("Seguro que quieres borrar al afiliado?",
        function(){
            let id_login
            fetch('http://localhost:9090/login/id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({cedula:{numero_identificacion:cedu}})
            })
            .then(response => response.json())
            .then(data => {
                id_login = data.idLogin
                 fetch('http://localhost:9090/login/'+data.idLogin,{
                    method:"DELETE"
                 })
                 .then(res => res.json())
                 .then(dat=>{console.log(dat)
                        fetch(url+'/'+id,{
                            method:'DELETE'
                        })
                        .then(res=>res.json())
                        .then(()=>location.reload())
                 })
           })

        alertify.success('Borrado');
        },
        function(){
        alertify.error('Cancel');
        });
})

let idForm = 0
on(document, 'click', '.btnEditar', e=>{
    const fila = e.target.parentNode.parentNode
    idForm = fila.children[0].innerHTML
    const nombreForm = fila.children[1].innerHTML
    const tipoDocForm = fila.children[2].innerHTML
    const documentoForm = fila.children[3].innerHTML
    const fechaNaForm = fila.children[4].innerHTML
    const sexoForm = fila.children[5].innerHTML
    const direccionForm = fila.children[6].innerHTML
    const telefonoForm = fila.children[7].innerHTML
    const emailForm = fila.children[8].innerHTML
    const fechaAfForm = fila.children[9].innerHTML
    const planSaludForm = fila.children[10].innerHTML
    const estadoForm = fila.children[11].innerHTML


    nombre.value = nombreForm
    tipoDoc.value = tipoDocForm
    documento.value = documentoForm
    fechaNacimiento.value = fechaNaForm
    sexo.value = sexoForm
    direccion.value = direccionForm
    telefono.value = telefonoForm
    email.value = emailForm
    fechaAfiliacion.value = fechaAfForm
    planSalud.value = planSaludForm
    estadoAfiliacion.value = estadoForm
    option = "editar"
    myModal.show()
})

formAfiliados.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(option == "crear"){
        fetch(url, {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                nombre:nombre.value,
                tipo_identificacion:tipoDoc.value,
                numero_identificacion:documento.value,
                fecha_nacimiento:fechaNacimiento.value,
                sexo:sexo.value,
                direccion:direccion.value,
                telefono:telefono.value,
                email:email.value,
                fecha_afiliacion:fechaAfiliacion.value,
                plan_salud:planSalud.value,
                estado_afiliacion:estadoAfiliacion.value
            })
        })
        .then(res => res.json())
        .then (res => location.reload())
    }
    if(option == "editar"){
        fetch(url ,{
            method:"PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                id_afiliado:idForm,
                nombre:nombre.value,
                tipo_identificacion:tipoDoc.value,
                numero_identificacion:documento.value,
                fecha_nacimiento:fechaNacimiento.value,
                sexo:sexo.value,
                direccion:direccion.value,
                telefono:telefono.value,
                email:email.value,
                fecha_afiliacion:fechaAfiliacion.value,
                plan_salud:planSalud.value,
                estado_afiliacion:estadoAfiliacion.value
            })
        }
        )
        .then(res => res.json())
        .then (res => location.reload())
    }
    myModal.hide()
})
