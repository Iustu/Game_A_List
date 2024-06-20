package com.example.GameAlist.jogo;

import jakarta.persistence.*;

@Entity
@Table
public class Jogo {
    @Id
    @SequenceGenerator(
            name = "jogo_sequence",
            sequenceName = "jogo_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "jogo_sequence"
    )
    private Long id;
    private String titulo;
    private String imagem;
    private String publicadora;
    private String estudio;

    public Jogo() {
    }

    public Jogo(String titulo, String imagem, String publicadora, String estudio) {
        this.titulo = titulo;
        this.imagem = imagem;
        this.publicadora = publicadora;
        this.estudio = estudio;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getEstudio() {
        return estudio;
    }
    public void setEstudio(String estudio) {
        this.estudio = estudio;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getImagem() {
        return imagem;
    }
    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
    public String getPublicadora() {
        return publicadora;
    }
    public void setPublicadora(String publicadora) {
        this.publicadora = publicadora;
    }

    @Override
    public String toString() {
        return "jogo{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", imagem='" + imagem + '\'' +
                ", publicadora='" + publicadora + '\'' +
                ", estudio='" + estudio + '\'' +
                '}';
    }
}
