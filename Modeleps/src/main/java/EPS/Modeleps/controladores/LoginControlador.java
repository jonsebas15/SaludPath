package EPS.Modeleps.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import EPS.Modeleps.modelo.Login;
import EPS.Modeleps.servicios.LoginResponse;
import EPS.Modeleps.servicios.LoginServicio;
import java.util.ArrayList;




@RestController
@CrossOrigin(origins = "*")
public class LoginControlador {

@Autowired
    LoginServicio loginServicio;

    @GetMapping("/login")
    public ArrayList<Login> cargarLogin() {
        return this.loginServicio.getLogin();
    }

    //buscar por id
    @GetMapping("/login/{id}")
    public Login buscarPorId(@PathVariable Long id){
        return loginServicio.buscarLogin(id);
    }
    //Agregar, crear
    @PostMapping("/login")
    public ResponseEntity<Login> agregar(@RequestBody Login login){
        Login obj= loginServicio.nuevoLogin(login);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    //Modificar
    @PutMapping("/login") 
    public ResponseEntity<String> editar(@RequestBody Login login){
        System.out.println("Datos recibidos2: " + login);
        Login obj = loginServicio.buscarLogin(login.getId_login());
        if(obj != null){
            obj.setCedula(login.getCedula());
            obj.setContrasena(login.getContrasena());
            loginServicio.nuevoLogin(obj);
        }else {
            return new ResponseEntity<>("usuario no encontrado error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
        return new ResponseEntity<>("Cuenta creada", HttpStatus.OK);
    }
    
    //ELiminar
    @DeleteMapping("/login/{id}")
    public ResponseEntity<Login> eliminar(@PathVariable Long id){
        Login obj= loginServicio.buscarLogin(id);
        if(obj != null){
            loginServicio.borrarLogin(id);
        }else{
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }


    @PostMapping("/login/verificar")
    public ResponseEntity<LoginResponse> verificarLogin(@RequestBody Login login) {
        System.out.println("Datos recibidos: " + login);
        LoginResponse resultado = loginServicio.verificarLogin(login.getCedula(), login.getContrasena());
        if ("Login exitoso".equals(resultado.getMessage())) {
            return new ResponseEntity<>(resultado, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(resultado, HttpStatus.BAD_REQUEST);
        }
    }
}
