package EPS.Modeleps.servicios;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EPS.Modeleps.modelo.Ips;
import EPS.Modeleps.repositorios.IpsRepositorio;
import jakarta.transaction.Transactional;



@Service
@Transactional
public class IpsServicio {
    @Autowired
    IpsRepositorio ipsRepositorio;

    public ArrayList<Ips> getIps(){
        return (ArrayList<Ips>) ipsRepositorio.findAll();
    }

    public Ips nuevoIps(Ips ips){
        return ipsRepositorio.save(ips);
    }

    public Ips buscarIps(Long id){
        Ips ips = null;
        ips = ipsRepositorio.findById(id).orElse(null);
        if(ips == null){
            return null;
        } return ips;
    }

    public int borrarIps(Long id){
        ipsRepositorio.deleteById(id);
        return 1;
    }

}
