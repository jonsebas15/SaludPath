const url = 'http://localhost:9090/medico'
const contenedor = document.querySelector('tbody')
let resultados =''

const myModal = new bootstrap.Modal(document.getElementById('modalafi'))
const formAfiliados = document.querySelector('form')
const apellidos = document.getElementById('apellidos-name')
const nombres = document.getElementById('nombres-name')
const direccion = document.getElementById('direccion-name')
const telefono = document.getElementById('telefono-name')
const correo = document.getElementById('correo-name')

const crearAfiliado = document.getElementById('crearAfiliado');

let option = ''
crearAfiliado.addEventListener('click', ()=>{
    apellidos.value=""
    nombres.value=""
    direccion.value=""
    telefono.value=""
    correo.value=""
    

    myModal.show()
    option = 'crear'
})
const mostrar = (medicos) =>{
    medicos.forEach(medico => {
        resultados += `<tr>
                            <td>${medico.id}</td>
                            <td>${medico.apellidos}</td>
                            <td>${medico.nombres}</td>
                            <td>${medico.direccion}</td>
                            <td>${medico.telefono}</td>
                            <td>${medico.email}</td>
                            
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>  
                        </tr>`
    });
    contenedor.innerHTML = resultados
}
fetch(url)
    .then(response => response.json())
    .then(data => {mostrar(data) })
    .catch(error => console.log(error))

const on = (element, event, selector, handler)=>{
    element.addEventListener(event, e =>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnBorrar', e=>{
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    
    alertify.confirm("Seguro que quieres borrar al medico?",
        function(){
                fetch(url+'/'+id,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(()=>location.reload())
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
    const apellidosForm = fila.children[1].innerHTML
    const nombresForm = fila.children[2].innerHTML
    const direcciontoForm = fila.children[3].innerHTML
    const telefonotoForm = fila.children[4].innerHTML
    const correoForm = fila.children[5].innerHTML
    


    apellidos.value = apellidosForm
    nombres.value = nombresForm
    direccion.value = direcciontoForm
    telefono.value = telefonotoForm
    correo.value = correoForm
    
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
                apellidos:apellidos.value,
                nombres:nombres.value,
                direccion:direccion.value,
                telefono:telefono.value,
                email:correo.value,
                
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
                id:idForm,
                apellidos:apellidos.value,
                nombres:nombres.value,
                direccion:direccion.value,
                telefono:telefono.value,
                email:correo.value,
                
            })
        }
        )
        .then(res => res.json())
        .then (res => location.reload())
    }
    myModal.hide()
})