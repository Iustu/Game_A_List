package com.example.GameAlist.usuario;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepositoy extends JpaRepository<UsuarioModel, Long> {

    Optional<UsuarioModel> findByApelido(String apelido);

    Optional<UsuarioModel> findByApelidoOrEmail(String apelido, String email);
}