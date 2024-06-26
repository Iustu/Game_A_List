package com.example.GameAlist.jogo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "game_a_list/jogo")
public class JogoController {

    private final JogoService jogoService;

    @Autowired
    public JogoController(JogoService jogoService){
        this.jogoService = jogoService;
    }

    @GetMapping
    public List<Jogo> getJogos(){
        return jogoService.getJogos();
    }

    @PostMapping
    public void saveJogo(@RequestBody Jogo jogo){
        jogoService.saveJogo(jogo);
    }

    @DeleteMapping(path = "{jogoId}")
    public void deleteJogo(@PathVariable("jogoId") Long jogoId) {
        jogoService.deleteJogo(jogoId);
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
