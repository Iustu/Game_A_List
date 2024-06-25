package com.example.GameAlist.usuario;

import com.example.GameAlist.usuario.DTO.Usuario;
import jakarta.persistence.*;

@Entity
@Table(name = "USUARIO",uniqueConstraints = {
        @UniqueConstraint(columnNames = { "apelido" }, name = "apelido_constraint"),
        @UniqueConstraint(columnNames = { "email"}, name = "email_constraint")})
class UsuarioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column (name = "id_usuario", nullable = false)
    protected Long idUsuario;

    @Column
    protected String nome;

    @Column (nullable = false )
    protected String apelido;

    @Column (nullable = false)
    protected String email;

    @Column (nullable = false)
    protected String senha;

    @Column (nullable = false)
    protected boolean ativo;

    /** construtores **/

    public UsuarioModel(Long idUsuario, String nome, String apelido, String email, String senha, boolean ativo) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.apelido = apelido;
        this.email = email;
        this.senha = senha;
        this.ativo = ativo;
    }

    public UsuarioModel(){}

    public UsuarioModel(Usuario usuario){
        this.idUsuario = usuario.getIdUsuario();
        this.nome = usuario.getNome();
        this.apelido = usuario.getApelido();
        this.email = usuario.getEmail();
        this.senha = usuario.getSenha();
        this.ativo = usuario.isAtivo();
    }


    /** Getters **/
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

    public Long getIdUsuario() {
        return idUsuario;
    }

    public boolean isAtivo() { return ativo;}

    /** Setters **/
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

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public void setAtivo(boolean ativo) { this.ativo = ativo; }
}
