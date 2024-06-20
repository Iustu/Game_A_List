package com.example.GameAlist.usuario.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class Usuario {

    protected Long idUsuario;
    @NotNull
    protected String nome;

    @NotNull
    @Size(min = 4)
    protected String apelido;

    @NotNull
    @Email
    protected String email;

    @NotNull
    @Size(min = 4)
    protected String senha;

    @NotNull
    protected boolean ativo;


    /** Construtores **/

    public Usuario(Long idUsuario, String nome, String apelido, String email, String senha, boolean ativo) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.apelido = apelido;
        this.email = email;
        this.senha = senha;
        this.ativo = ativo;
    }

    /** Getters **/

    public Long getIdUsuario() {
        return idUsuario;
    }

    public String getNome() {
        return nome;
    }

    public String getApelido() {
        return apelido;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public boolean isAtivo() {
        return ativo;
    }

    /** Setters **/

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }
}
