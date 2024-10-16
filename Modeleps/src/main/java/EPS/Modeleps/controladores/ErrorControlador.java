package EPS.Modeleps.controladores;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ErrorControlador {
    @RequestMapping("/")
    public String handleError() {
        return "Ruta no encontrada";
    }
}

