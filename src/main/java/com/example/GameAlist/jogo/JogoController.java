package com.example.GameAlist.jogo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "jogo")
public class JogoController {

    private final JogoService jogoService;

    @Autowired
    public JogoController(JogoService jogoService){
        this.jogoService = jogoService;
    }

    @GetMapping
    public List<Jogo> getJogos() {return jogoService.getJogos();}

    @PostMapping(value = "/new")
    public void saveJogo(@RequestBody Jogo jogo){
        jogoService.saveJogo(jogo);
    }

    @PutMapping(path = "{jogoId}")
    public void updateJogo(@PathVariable("jogoId") Long jogoId,
                           @RequestParam(required = false) String titulo,
                           @RequestParam(required = false) String imagem,
                           @RequestParam(required = false) String publicadora,
                           @RequestParam(required = false) String estudio){
        jogoService.updateJogo(jogoId,titulo,imagem,publicadora,estudio);
    }
}
