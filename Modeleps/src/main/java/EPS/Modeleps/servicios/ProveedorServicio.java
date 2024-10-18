package EPS.Modeleps.servicios;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;

import EPS.Modeleps.modelo.Proveedor;

import EPS.Modeleps.repositorios.ProveedorRepositorio;

public class ProveedorServicio {
    @Autowired
    ProveedorRepositorio proveedorRepositorio;

    public ArrayList<Proveedor> getProveedor(){
        return (ArrayList<Proveedor>) proveedorRepositorio.findAll();
    }

    public Proveedor nuevoProveedor(Proveedor proveedor){
        return proveedorRepositorio.save(proveedor);
    }

    public Proveedor buscarProveedor(Long id){
        Proveedor proveedor = null;
        proveedor = proveedorRepositorio.findById(id).orElse(null);
        if(proveedor == null){
            return null;
        } return proveedor;
    }

    public int borrarProveedor(Long id){
        proveedorRepositorio.deleteById(id);
        return 1;
    }


}
