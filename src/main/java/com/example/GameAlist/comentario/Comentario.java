package com.example.GameAlist.comentario;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table
public class Comentario {
    @Id
    @SequenceGenerator(
            name = "publicacao_sequence",
            sequenceName="publicacao_sequence",
            allocationSize=1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "publicacao_sequence"
    )
    private Long id;
    private String conteudo;

    public Comentario(Long id, String conteudo, LocalDate dataPublicacao) {
        this.id = id;
        this.conteudo = conteudo;
    }

    public Comentario(String conteudo, LocalDate dataPublicacao) {
        this.conteudo = conteudo;
    }

    public Comentario() {

    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getConteudo() {
        return conteudo;
    }
    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    @Override
    public String toString() {
        return "Publicacao{" +
                "id=" + id +
                ", conteudo='" + conteudo;
    }
}
