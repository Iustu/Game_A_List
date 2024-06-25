package com.example.GameAlist.jogo_possuido;

import com.example.GameAlist.jogo_possuido.DTO.JogoPossuido;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Document (collection = "jogos_possuidos")
class JogoPossuidoModel {
    @MongoId
    protected String id;
    @Field()
    protected Long idUsuario;
    protected Long idJogo;
    protected String plataforma;

    @Field(targetType = FieldType.STRING)
    protected LocalDate dataAdicao;
    @Field(targetType = FieldType.STRING)
    protected StatusJogo estado;


    /** Construtores **/

    public JogoPossuidoModel(){}

    public JogoPossuidoModel(String id,Long idUsuario, Long idJogo, String plataforma, LocalDate dataAdicao,
                             StatusJogo estado) {
        this.id = id;
        this.idUsuario = idUsuario;
        this.idJogo = idJogo;
        this.plataforma = plataforma;
        this.dataAdicao = dataAdicao;
        this.estado = estado;
    }
    public JogoPossuidoModel(JogoPossuido jogo) {

        this.id = jogo.id;
        this.idUsuario = jogo.idUsuario;
        this.idJogo = jogo.idJogo;
        this.plataforma = jogo.plataforma;
        this.dataAdicao = LocalDate.parse(jogo.dataAdicao, DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        this.estado = StatusJogo.valueOf(jogo.estado);
    }

    /** Getters **/

    public String getId() {
        return id;
    }

    public Long getIdUsuario() { return idUsuario; }

    public Long getIdJogo() { return idJogo; }

    public String getPlataforma() {
        return plataforma;
    }

    public LocalDate getDataAdicao() {
        return dataAdicao;
    }

    public StatusJogo getEstado() {
        return estado;
    }


    /** Setters **/

    public void setId(String id) {
        this.id = id;
    }

    public void setIdUsuario(Long idUsuario) { this.idUsuario = idUsuario; }

    public void setIdJogo(Long idJogo) { this.idJogo = idJogo; }

    public void setPlataforma(String plataforma) {
        this.plataforma = plataforma;
    }

    public void setDataAdicao(LocalDate dataAdicao) {
        this.dataAdicao = dataAdicao;
    }

    public void setEstado(StatusJogo estado) {
        this.estado = estado;
    }
}
