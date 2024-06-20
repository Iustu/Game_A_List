package com.example.GameAlist.jogo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JogoRepository extends JpaRepository<Jogo, Long> {

    @Query("Select j FROM Jogo j WHERE j.titulo = ?1")
    Optional<Jogo> findJogoByTitulo(String titulo);

}
