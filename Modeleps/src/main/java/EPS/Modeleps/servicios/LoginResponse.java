package EPS.Modeleps.servicios;

import EPS.Modeleps.modelo.Afiliados;

public class LoginResponse {
    private String message;
    private Long idLogin;
    private Afiliados cedula;

    public LoginResponse(String message, Long idLogin, Afiliados cedula) {
        this.message = message;
        this.idLogin = idLogin;
        this.cedula = cedula;
    }

    // Getters y setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getIdLogin() {
        return idLogin;
    }

    public void setIdLogin(Long idLogin) {
        this.idLogin = idLogin;
    }

    public Afiliados getCedula() {
        return cedula;
    }

    public void setCedula(Afiliados cedula) {
        this.cedula = cedula;
    }
}
