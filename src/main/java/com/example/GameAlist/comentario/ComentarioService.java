package com.example.GameAlist.comentario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ComentarioService {

    private final ComentarioRepository comentarioRepository;
    @Autowired
    public ComentarioService(ComentarioRepository comentarioRepository){
        this.comentarioRepository = comentarioRepository;
    }

    public List<Comentario> getComentarios(){
        return comentarioRepository.findAll();
    }

    public void saveComentario( Comentario comentario) {
        Optional<Comentario> comentarioOptional = comentarioRepository.findById(comentario.getId());
        if (comentarioOptional.isPresent()){
            throw new IllegalStateException("comentario feito");
        }
        comentarioRepository.save(comentario);
    }

    public void deleteComentario(Long comentarioId){
        boolean exists = comentarioRepository.existsById(comentarioId);
        if (!exists){
            throw new IllegalStateException("comentario id does not exists");
        }
        comentarioRepository.deleteById(comentarioId);
    }

    @Transactional
    public void updateComentario(Long comentarioId, String conteudo){
        Comentario comentario = comentarioRepository.findById(comentarioId).orElseThrow(()-> new IllegalStateException("Comentario with id"+comentarioId+"does not exists"));

    }


}
