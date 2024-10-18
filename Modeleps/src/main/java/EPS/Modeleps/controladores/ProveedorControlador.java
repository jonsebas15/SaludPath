package EPS.Modeleps.controladores;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import EPS.Modeleps.modelo.Proveedor;
import EPS.Modeleps.servicios.ProveedorServicio;

public class ProveedorControlador {
    @Autowired
    ProveedorServicio proveedorServicio;

    @GetMapping("/proveedor")
    public ArrayList<Proveedor> cargarProveedor() {
        return this.proveedorServicio.getProveedor();
    }

    //buscar por id
    @GetMapping("/proveedor/{id}")
    public Proveedor buscarPorId(@PathVariable Long id){
        return proveedorServicio.buscarProveedor(id);
    }
    //Agregar, crear
    @PostMapping("/proveedor")
    public ResponseEntity<Proveedor> agregar(@RequestBody Proveedor proveedor){
        Proveedor obj= proveedorServicio.nuevoProveedor(proveedor);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    //Modificar
    @PutMapping("/proveedor") 
    public ResponseEntity<Proveedor> editar(@RequestBody Proveedor proveedor){
        Proveedor obj = proveedorServicio.buscarProveedor(proveedor.getId_proveedor());
        if(obj != null){
            obj.setCondiciones_pago(proveedor.getCondiciones_pago());
            obj.setContacto_proveedor(proveedor.getContacto_proveedor());
            obj.setNombre_proveedor(proveedor.getNombre_proveedor());
            obj.setProductos_servicios(proveedor.getProductos_servicios());
            
            proveedorServicio.nuevoProveedor(obj);
        }else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    //ELiminar
    @DeleteMapping("/proveedor/{id}")
    public ResponseEntity<Proveedor> eliminar(@PathVariable Long id){
        Proveedor obj= proveedorServicio.buscarProveedor(id);
        if(obj != null){
            proveedorServicio.borrarProveedor(id);
        }else{
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
}
