package com.example.GameAlist.jogo_possuido;

import com.example.GameAlist.jogo_possuido.DTO.JogoPossuido;
import com.example.GameAlist.utils.ResponseDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
@Validated
public class JogoPossuidoController {

    public static final String DESCRIPTION = "description";
    @Autowired
    JogoPossuidoService service;

    @GetMapping(value = "/ownedGames/{id}")
    @ResponseBody
    public ResponseEntity recuperarJogos(@PathVariable("id") Long idUsuario) {

        Optional<List<JogoPossuidoModel>> res = Optional.ofNullable(service.recuperaJogosPossuidos(idUsuario));
        if(res.isEmpty())
            return ResponseEntity.status(400)
                    .header(DESCRIPTION, "Dados_invalidos")
                    .body("Apelido ou senha incorretos!");
        else
            return ResponseEntity.status(200)
                    .header(DESCRIPTION, "Encontrado")
                    .body(res.get());
    }

    @PostMapping(value = "/ownedGames/new")
    public ResponseEntity cadastrarJogoPossuido (@Valid @RequestBody JogoPossuido jogo){

        ResponseDTO res = service.cadastrarJogoPossuido(jogo);
        return null;
    }
}