package EPS.Modeleps.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import EPS.Modeleps.modelo.Afiliados;
import EPS.Modeleps.modelo.Login;


@Repository
public interface LoginRepositorio extends JpaRepository<Login, Long>{
    Login findByCedula (Afiliados cedula);
}
