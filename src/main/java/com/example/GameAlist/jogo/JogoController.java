package com.example.GameAlist.jogo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "localhost:4200")
@RequestMapping(path = "jogo")
public class JogoController {

    private final JogoService jogoService;

    public static final String DESCRIPTION = "description";


    @Autowired
    public JogoController(JogoService jogoService){
        this.jogoService = jogoService;
    }

    @GetMapping
    public List<Jogo> getJogos() {return jogoService.getJogos();}

    @GetMapping(value = "{id}")
    public ResponseEntity buscarJogoPorId(@PathVariable("id") long id){
        Optional<Jogo> res = jogoService.buscarJogoPorId(id);

        if(res.isEmpty())
            return ResponseEntity.status(500)
                    .header(DESCRIPTION, "Internal Server Error")
                    .body("Não foi possível encontrar o jogo");
        else
            return ResponseEntity.status(200)
                    .header(DESCRIPTION, "Jogo encontrado")
                    .body(res.get());
    }

    @PostMapping(value = "/new")
    public void saveJogo(@RequestBody Jogo jogo){
        jogoService.saveJogo(jogo);
    }
}
