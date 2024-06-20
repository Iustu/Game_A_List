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
    protected Long idUsuario;
    protected Long idJogo;
    protected String plataforma;

    @Field(targetType = FieldType.STRING)
    protected LocalDate dataAdicao;
    @Field(targetType = FieldType.STRING)
    protected StatusJogo estado;

    protected String feedback;
    protected int horasJogadas;
    protected int nota;


    /** Construtores **/

    public JogoPossuidoModel(){}

    public JogoPossuidoModel(String id,Long idUsuario, Long idJogo, String plataforma, LocalDate dataAdicao,
                             StatusJogo estado, String feedback, int horasJogadas, int nota) {
        this.id = id;
        this.idUsuario = idUsuario;
        this.idJogo = idJogo;
        this.plataforma = plataforma;
        this.dataAdicao = dataAdicao;
        this.estado = estado;
        this.feedback = feedback;
        this.horasJogadas = horasJogadas;
        this.nota = nota;
    }


    public JogoPossuidoModel(String id, Long idUsuario, Long idJogo, String plataforma, String dataAdicao,
                             StatusJogo estado, String feedback, int horasJogadas, int nota) {
        this.id = id;
        this.idUsuario = idUsuario;
        this.idJogo = idJogo;
        this.plataforma = plataforma;
        this.dataAdicao = LocalDate.parse(dataAdicao, DateTimeFormatter.ofPattern("dd-MM-yyyy"));
        this.estado = estado;
        this.feedback = feedback;
        this.horasJogadas = horasJogadas;
        this.nota = nota;
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

    public String getFeedback() {
        return feedback;
    }

    public float getHorasJogadas() {
        return horasJogadas;
    }

    public int getNota() {
        return nota;
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

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public void setHorasJogadas(int horasJogadas) {
        this.horasJogadas = horasJogadas;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }
}
