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

import EPS.Modeleps.modelo.Medico;
import EPS.Modeleps.servicios.MedicoServicio;


@RestController
public class MedicoControlador {
    @Autowired
    MedicoServicio medicoServicio;

    @GetMapping("/medico")
    public ArrayList<Medico> cargarMedico() {
        return this.medicoServicio.getMedico();
    }

    //buscar por id
    @GetMapping("/medico/{id}")
    public Medico buscarPorId(@PathVariable Long id){
        return medicoServicio.buscarMedico(id);
    }
    //Agregar, crear
    @PostMapping("/medico")
    public ResponseEntity<Medico> agregar(@RequestBody Medico medico){
        Medico obj= medicoServicio.nuevoMedico(medico);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    //Modificar
    @PutMapping("/medico") 
    public ResponseEntity<Medico> editar(@RequestBody Medico medico){
        Medico obj = medicoServicio.buscarMedico(medico.getId());
        if(obj != null){
            obj.setApellidos(medico.getApellidos());
            obj.setDireccion(medico.getDireccion());
            obj.setEmail(medico.getEmail());
            obj.setNombres(medico.getNombres());
            obj.setTelefono(medico.getTelefono());
            
            medicoServicio.nuevoMedico(obj);
        }else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    //ELiminar
    @DeleteMapping("/medico/{id}")
    public ResponseEntity<Medico> eliminar(@PathVariable Long id){
        Medico obj= medicoServicio.buscarMedico(id);
        if(obj != null){
            medicoServicio.borrarMedico(id);
        }else{
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
}
