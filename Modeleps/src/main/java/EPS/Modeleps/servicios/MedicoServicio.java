package EPS.Modeleps.servicios;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EPS.Modeleps.modelo.Medico;
import EPS.Modeleps.repositorios.MedicoRepositorio;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class MedicoServicio {
    @Autowired
    MedicoRepositorio medicoRepositorio;

    public ArrayList<Medico> getMedico(){
        return (ArrayList<Medico>) medicoRepositorio.findAll();
    }

    public Medico nuevoMedico(Medico medico){
        return medicoRepositorio.save(medico);
    }

    public Medico buscarMedico(Long id){
        Medico medico = null;
        medico = medicoRepositorio.findById(id).orElse(null);
        if(medico == null){
            return null;
        } return medico;
    }

    public int borrarMedico(Long id){
        medicoRepositorio.deleteById(id);
        return 1;
    }
}
