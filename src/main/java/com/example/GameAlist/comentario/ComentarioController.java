package game_a_list.comentario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="game_a_list/comentario")
public class ComentarioController {

    private final ComentarioService comentarioService;

    @Autowired
    public ComentarioController(ComentarioService comentarioService){
        this.comentarioService = comentarioService;
    }

    @GetMapping
    public List<Comentario> getComentarios(){
        return comentarioService.getComentarios();
    }

    @PostMapping
    public void saveComentario(@RequestBody Comentario comentario){
        comentarioService.saveComentario(comentario);
    }

    @DeleteMapping(path = "{comentarioId}")
    public void deleteComentario(@PathVariable("comentarioId") Long comentarioId){
        comentarioService.deleteComentario(comentarioId);
    }

    @PutMapping(path = "{comentarioId}")
    public void updateComentario(
            @PathVariable("comentarioId") Long comentarioId,@RequestParam(required = true) String conteudo){
            comentarioService.updateComentario(comentarioId,conteudo);
    }
}
