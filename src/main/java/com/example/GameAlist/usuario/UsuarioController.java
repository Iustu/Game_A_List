package com.example.GameAlist.usuario;

import com.example.GameAlist.usuario.DTO.Login;
import com.example.GameAlist.usuario.DTO.Usuario;
import com.example.GameAlist.utils.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.Optional;

@RestController
@RequestMapping(path = "user")
@Validated
public class UsuarioController {
    public static final String DESCRIPTION = "description";
    @Autowired
    UsuarioService service;

    @GetMapping(value = "/login")
    @ResponseBody
    public ResponseEntity logUsuario (@Valid @RequestBody Login usuario){

        Optional<UsuarioModel> res = Optional.ofNullable(service.loginUsuario(usuario));

        if(res.isEmpty())
            return ResponseEntity.status(400)
                    .header(DESCRIPTION, "Dados_invalidos")
                    .body("Apelido ou senha incorretos!");
        else
            return ResponseEntity.status(200)
                    .header(DESCRIPTION, "Encontrado")
                    .body(res.get());
    }

    @PostMapping(value = "/new")
    public ResponseEntity cadastrarUsuario (@Valid @RequestBody Usuario novoUsuario){

        ResponseDTO res = service.cadastarUsuario(novoUsuario);

        return ResponseEntity.status(res.code)
                .header(DESCRIPTION, res.header)
                .body(res.body);
    }

    @PostMapping (value = "/update")
    public ResponseEntity atualizarUsuario (@Valid @RequestBody Usuario usuarioAtualizado){

        ResponseDTO res = service.atualizarUsuario(usuarioAtualizado);

        return ResponseEntity.status(res.code)
                .header(DESCRIPTION, res.header)
                    .body(res.body);
    }

    @PostMapping (value = "/delete")
    public ResponseEntity excluirUsuario (@Valid @RequestBody Usuario usuario){

        ResponseDTO res = service.excluirUsuario(usuario);

        return ResponseEntity.status(res.code)
                .header(DESCRIPTION, res.header)
                .body(res.body);

    }

    @PostMapping (value = "/changePassword")
    public ResponseEntity alterarSenha (@Valid @RequestBody Login senhaAlterada){

        ResponseDTO res = service.alterarSenha(senhaAlterada);

        return ResponseEntity.status(res.code)
                .header(DESCRIPTION, res.header)
                .body(res.body);
    }
}
