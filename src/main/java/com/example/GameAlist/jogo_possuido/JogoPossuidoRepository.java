package com.example.GameAlist.jogo_possuido;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface JogoPossuidoRepository extends MongoRepository<JogoPossuidoModel, String> {

    @Query("{idUsuario: ?0}")
    List<JogoPossuidoModel> findAllByIdUsuario(Long idUsuario);

    @Query("{idUsuario: ?0, idJogo: ?1}")
    Optional<JogoPossuidoModel> findByIdUsuarioAndIdJogo(Long idUsuario, Long idJogo);

}