const url = 'http://localhost:9090/ips'
const contenedor = document.querySelector('tbody')
let resultados =''

const myModal = new bootstrap.Modal(document.getElementById('modalafi'))
const formIps = document.querySelector('form')
const nombre = document.getElementById('nombre-name')
const direccion = document.getElementById('direccion-name')
const telefono = document.getElementById('telefono-name')
const Especialidades = document.getElementById('Especialidades-name')
const HorarioAtencion = document.getElementById('Horario_atencion-name')
const ContactoReferencia = document.getElementById('Contacto_referencia-name')

const CrearIps = document.getElementById('crearIps');

let option = ''
CrearIps.addEventListener('click', ()=>{
    nombre.value=""
    direccion.value=""
    telefono.value=""
    Especialidades.value=""
    HorarioAtencion.value=""
    ContactoReferencia.value=""

    myModal.show()
    option = 'crear'
})
const mostrar = (ips) =>{
    ips.forEach(ips => {
        resultados += `<tr>
                            <td>${ips.id_ips}</td>
                            <td>${ips.nombre}</td>
                            <td>${ips.direccion}</td>
                            <td>${ips.telefono}</td>
                            <td>${ips.especialidades}</td>
                            <td>${ips.horario_atencion}</td>
                            <td>${ips.contacto_referencia}</td>
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
    
    alertify.confirm("Seguro que quieres borrar a la Ips?",
        function(){
                 fetch('http://localhost:9090/ips/'+id,{
                    method:"DELETE"
                 })
                 .then(res => res.json())
                 .then(dat=>{console.log(dat)
                    location.reload()
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
    const direccionForm = fila.children[2].innerHTML
    const telefonoForm = fila.children[3].innerHTML
    const EspecialidadesForm = fila.children[4].innerHTML
    const HorarioAtencionForm = fila.children[5].innerHTML
    const ContactoReferenciaForm = fila.children[6].innerHTML


    nombre.value = nombreForm
    direccion.value = direccionForm
    telefono.value = telefonoForm
    Especialidades.value = EspecialidadesForm
    HorarioAtencion.value = HorarioAtencionForm
    ContactoReferencia.value = ContactoReferenciaForm
    option = "editar"
    myModal.show()
})

formIps.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(option == "crear"){
        fetch(url, {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                nombre:nombre.value,
                direccion:direccion.value,
                telefono:telefono.value,
                especialidades:Especialidades.value,
                horario_atencion:HorarioAtencion.value,
                contacto_referencia:ContactoReferencia.value
            })
        })
        .then(res => res.json())
        .then (() => location.reload())
    }
    if(option == "editar"){
        fetch(url,{
            method:"PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({ 
                id_ips:idForm,
                nombre:nombre.value,
                direccion:direccion.value,
                telefono:telefono.value,
                especialidades:Especialidades.value,
                horario_atencion:HorarioAtencion.value,
                contacto_referencia:ContactoReferencia.value
            })
        }
        )
        .then(res => res.json())
        .then (res => location.reload())
    }
    myModal.hide()
})
