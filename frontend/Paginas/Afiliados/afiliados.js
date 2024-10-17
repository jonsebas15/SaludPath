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

const CrearAfiliado = document.getElementById('crearAfiliado');

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
    
    alertify.confirm("Seguro que quieres borrar al afiliado?",
        function(){
            fetch(url+'/'+id,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then()

        alertify.success('Borrado');
        },
        function(){
        alertify.error('Cancel');
        });
})