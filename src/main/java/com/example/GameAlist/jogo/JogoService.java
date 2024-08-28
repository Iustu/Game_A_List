package com.example.GameAlist.jogo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JogoService {

    private final JogoRepository jogoRepository;

    @Autowired
    public JogoService(JogoRepository jogoRepository) {
        this.jogoRepository = jogoRepository;
    }

    public List<Jogo> getJogos(){
        return jogoRepository.findAll();
    }

    public void saveJogo(Jogo jogo) {
        Optional<Jogo> jogoByTitulo = jogoRepository.findJogoByTitulo(jogo.getTitulo());

        if (jogoByTitulo.isPresent()) {
            throw new IllegalStateException("Titulo já presente");
        }

        jogoRepository.save(jogo);
    }

    public void deleteJogo(Long jogoId) {
        boolean exists = jogoRepository.existsById(jogoId);

        if (!exists) {
            throw new IllegalStateException("Jogo com id "+jogoId+" não existe"
            );
        }

        jogoRepository.deleteById(jogoId);
    }

    Optional<Jogo> buscarJogoPorId(long id){
        return jogoRepository.findById(id);
    }
}
