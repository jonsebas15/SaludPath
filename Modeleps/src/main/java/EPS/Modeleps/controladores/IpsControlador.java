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
import org.springframework.web.bind.annotation.RestController;

import EPS.Modeleps.modelo.Ips;
import EPS.Modeleps.servicios.IpsServicio;


@RestController
public class IpsControlador {


    @Autowired
    IpsServicio ipsServicio;

    @GetMapping("/ips")
    public ArrayList<Ips> cargarIps() {
        return this.ipsServicio.getIps();
    }

    //buscar por id
    @GetMapping("/ips/{id}")
    public Ips buscarPorId(@PathVariable Long id){
        return ipsServicio.buscarIps(id);
    }
    //Agregar, crear
    @PostMapping("/ips")
    public ResponseEntity<Ips> agregar(@RequestBody Ips ips){
        Ips obj= ipsServicio.nuevoIps(ips);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    //Modificar
    @PutMapping("/ips") 
    public ResponseEntity<Ips> editar(@RequestBody Ips ips){
        Ips obj = ipsServicio.buscarIps(ips.getId_ips());
        if(obj != null){
            obj.setContacto_referencia(ips.getContacto_referencia());
            obj.setDireccion(ips.getDireccion());
            obj.setEspecialidades(ips.getEspecialidades());
            obj.setHorario_atencion(ips.getHorario_atencion());
            obj.setNombre(ips.getNombre());
            obj.setTelefono(ips.getTelefono());
            ipsServicio.nuevoIps(obj);
        }else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    //ELiminar
    @DeleteMapping("/ips/{id}")
    public ResponseEntity<Ips> eliminar(@PathVariable Long id){
        Ips obj= ipsServicio.buscarIps(id);
        if(obj != null){
            ipsServicio.borrarIps(id);
        }else{
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

}
