package com.example.GameAlist.jogo_possuido;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface JogoPossuidoRepository extends MongoRepository<JogoPossuidoModel, String> {

    @Query("{idUsuario: ?0}")
    List<JogoPossuidoModel> findAllByIdUsuario(Long idUsuario);

}