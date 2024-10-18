package EPS.Modeleps.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import EPS.Modeleps.modelo.Proveedor;

@Repository
public interface ProveedorRepositorio extends JpaRepository<Proveedor, Long>{

}
