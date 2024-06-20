package com.example.GameAlist.jogo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
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

    @Transactional
    public void updateJogo(Long jogoId, String titulo, String imagem, String publicadora, String estudio) {
        Jogo jogo = jogoRepository.findById(jogoId).orElseThrow(() -> new IllegalStateException("jogo de id "+jogoId+" nao existe"));

        if (titulo != null && titulo.length()>0 && !Objects.equals(jogo.getTitulo(),titulo)){
            Optional<Jogo> jogoByTitulo = jogoRepository.findJogoByTitulo(titulo);

            if (jogoByTitulo.isPresent()) {
                throw new IllegalStateException("Titulo já presente");
            }

            jogo.setTitulo(titulo);
        }

        if (imagem != null && imagem.length()>0 && !Objects.equals(jogo.getImagem(),imagem)){
            jogo.setImagem(imagem);
        }

        if (publicadora != null && publicadora.length()>0 && !Objects.equals(jogo.getPublicadora(),publicadora)){
            jogo.setPublicadora(publicadora);
        }

        if (estudio != null && estudio.length()>0 && !Objects.equals(jogo.getEstudio(),estudio)){
            jogo.setEstudio(estudio);
        }

        //jogoRepository.save(jogo);
    }
}
