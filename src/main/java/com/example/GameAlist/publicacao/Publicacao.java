package com.example.GameAlist.publicacao;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table
public class Publicacao {
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
    private LocalDate dataPublicacao;

    public Publicacao(Long id,String conteudo, LocalDate dataPublicacao) {
        this.id = id;
        this.conteudo = conteudo;
        this.dataPublicacao = dataPublicacao;
    }

    public Publicacao(String conteudo, LocalDate dataPublicacao) {
        this.conteudo = conteudo;
        this.dataPublicacao = dataPublicacao;
    }

    public Publicacao() {

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
    public LocalDate getDataPublicacao() {
        return dataPublicacao;
    }
    public void setDataPublicacao(LocalDate dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }

    @Override
    public String toString() {
        return "Publicacao{" +
                "id=" + id +
                ", conteudo='" + conteudo + '\'' +
                ", dataPublicacao=" + dataPublicacao +
                '}';
    }
}
