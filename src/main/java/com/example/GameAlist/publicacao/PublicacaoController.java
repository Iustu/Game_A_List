package game_a_list.publicacao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="game_a_list/publicacao")
public class PublicacaoController {

    private final PublicacaoService publicacaoService;

    @Autowired
    public PublicacaoController(PublicacaoService publicacaoService){
        this.publicacaoService = publicacaoService;
    }

    @GetMapping
    public List<Publicacao> getPublicacoes(){
        return publicacaoService.getPublicacoes();
    }

    @PostMapping
    public void savePublicacao(@RequestBody Publicacao publicacao){
        publicacaoService.savePublicacao(publicacao);
    }

    @DeleteMapping(path = "{publicacaoId}")
    public void deletePublicacao(@PathVariable("publicacaoId") Long publicacaoId){
        publicacaoService.deletePublicacao(publicacaoId);
    }

    @PutMapping(path = "{publicacaoId}")
    public void updateStudent(
            @PathVariable("publicacaoId") Long publicacaoId,@RequestParam(required = false) String name, @RequestParam(required = false) String email){
            publicacaoService.updatePublicacao(publicacaoId,name,email);
    }
}
