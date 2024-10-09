package EPS.Modeleps.controladores;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(name="Afiliados")
public class Afiliados {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_afiliado;

}
