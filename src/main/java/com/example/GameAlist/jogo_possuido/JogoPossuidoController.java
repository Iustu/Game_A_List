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
    @Validated
    public ResponseEntity recuperarJogos(@PathVariable("id") Long idUsuario) {

        Optional<List<JogoPossuidoModel>> res = Optional.ofNullable(service.recuperaJogosPossuidos(idUsuario));
        if(res.isEmpty())
            return ResponseEntity.status(500)
                    .header(DESCRIPTION, "Internal Server Error")
                    .body("Não foi possível encontrar os jogos possuídos na biblioteca");
        else
            return ResponseEntity.status(200)
                    .header(DESCRIPTION, "Jogos encontrados")
                    .body(res.get());
    }

    @PostMapping(value = "/ownedGames/new")
    public ResponseEntity cadastrarJogoPossuido (@Valid @RequestBody JogoPossuido jogo){

        ResponseDTO res = service.cadastrarJogoPossuido(jogo);
        return ResponseEntity.status(res.code)
                .header(DESCRIPTION, res.header)
                .body(res.body);
    }

    @PostMapping(value = "/ownedGames/update")
    public ResponseEntity atualizarJogoPossuido (@Valid @RequestBody JogoPossuido jogo){

        ResponseDTO res = service.atualizarJogoPossuido(jogo);
        return ResponseEntity.status(res.code)
                .header(DESCRIPTION, res.header)
                .body(res.body);

    }

    @PostMapping (value = "/ownedGames/delete/{id}")
    public ResponseEntity excluirJogoPossuido (@PathVariable("id") String id){

        ResponseDTO res = service.excluirJogoPossuido(id);
        return ResponseEntity.status(res.code)
                .header(DESCRIPTION, res.header)
                .body(res.body);
    }

}