const url = 'http://localhost:9090/proveedor'
const contenedor = document.querySelector('tbody')
let resultados =''

const myModal = new bootstrap.Modal(document.getElementById('modalafi'))
const formAfiliados = document.querySelector('form')
const nombre = document.getElementById('nombre-name')
const tipoDoc = document.getElementById('tipoDoc-name')
const documento = document.getElementById('documento-name')
const direccion = document.getElementById('direccion-name')


const crearAfiliado = document.getElementById('crearAfiliado');

let option = ''
crearAfiliado.addEventListener('click', ()=>{
    nombre.value=""
    tipoDoc.value=""
    documento.value=""
    direccion.value=""
    

    myModal.show()
    option = 'crear'
})
const mostrar = (proveedores) =>{
    proveedores.forEach(proveedor => {
        resultados += `<tr>
                            <td>${proveedor.id_proveedor}</td>
                            <td>${proveedor.nombre_proveedor}</td>
                            <td>${proveedor.productos_servicios}</td>
                            <td>${proveedor.contacto_proveedor}</td>
                            
                            <td>${proveedor.condiciones_pago}</td>
                            
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
    
    alertify.confirm("Seguro que quieres borrar al Proveedor?",
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
    const nombreForm = fila.children[1].innerHTML
    const tipoDocForm = fila.children[2].innerHTML
    const documentoForm = fila.children[3].innerHTML
    
    const direccionForm = fila.children[4].innerHTML
    


    nombre.value = nombreForm
    tipoDoc.value = tipoDocForm
    documento.value = documentoForm
    
    direccion.value = direccionForm
    
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
                nombre_proveedor:nombre.value,
                productos_servicios:tipoDoc.value,
                contacto_proveedor:documento.value,
                
                condiciones_pago:direccion.value,
                
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
                id_proveedor:idForm,
                nombre_proveedor:nombre.value,
                productos_servicios:tipoDoc.value,
                contacto_proveedor:documento.value,
                
                condiciones_pago:direccion.value,
                
            })
        }
        )
        .then(res => res.json())
        .then (res => location.reload())
    }
    myModal.hide()
})