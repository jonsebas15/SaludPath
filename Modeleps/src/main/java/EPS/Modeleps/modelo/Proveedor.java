package EPS.Modeleps.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="Proveedores")
public class Proveedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_proveedor;

    @Column
    private String nombre_proveedor;

    @Column
    private String productos_servicios;

    @Column
    private String contacto_proveedor;

    @Column
    private String condiciones_pago;

    public Proveedor() {
    }

    public Proveedor(Long id_proveedor, String nombre_proveedor, String productos_servicios, String contacto_proveedor,
            String condiciones_pago) {
        this.id_proveedor = id_proveedor;
        this.nombre_proveedor = nombre_proveedor;
        this.productos_servicios = productos_servicios;
        this.contacto_proveedor = contacto_proveedor;
        this.condiciones_pago = condiciones_pago;
    }

    public Long getId_proveedor() {
        return id_proveedor;
    }

    public void setId_proveedor(Long id_proveedor) {
        this.id_proveedor = id_proveedor;
    }

    public String getNombre_proveedor() {
        return nombre_proveedor;
    }

    public void setNombre_proveedor(String nombre_proveedor) {
        this.nombre_proveedor = nombre_proveedor;
    }

    public String getProductos_servicios() {
        return productos_servicios;
    }

    public void setProductos_servicios(String productos_servicios) {
        this.productos_servicios = productos_servicios;
    }

    public String getContacto_proveedor() {
        return contacto_proveedor;
    }

    public void setContacto_proveedor(String contacto_proveedor) {
        this.contacto_proveedor = contacto_proveedor;
    }

    public String getCondiciones_pago() {
        return condiciones_pago;
    }

    public void setCondiciones_pago(String condiciones_pago) {
        this.condiciones_pago = condiciones_pago;
    }
}
