package com.example.GameAlist.jogo_possuido;

import com.example.GameAlist.jogo_possuido.DTO.JogoJogado;


import java.time.LocalDate;

class JogoJogadoModel extends JogoPossuidoModel{
    protected String feedback;

    protected double horasJogadas;
    protected int nota;


    /** Construtores **/

    public JogoJogadoModel(){}

    public JogoJogadoModel(String id, Long idUsuario, Long idJogo, String plataforma, String titulo, LocalDate dataAdicao,
                           StatusJogo estado, String feedback, double horasJogadas, int nota) {

        super(id,idUsuario,idJogo,plataforma,dataAdicao,estado, titulo);
        this.feedback = feedback;
        this.horasJogadas = horasJogadas;
        this.nota = nota;
    }

    public JogoJogadoModel(JogoJogado jogo) {
        super(jogo);
        this.feedback = jogo.feedback;
        this.horasJogadas = jogo.horasJogadas;
        this.nota = jogo.nota;
    }

    /** Getters **/



    public String getFeedback() {
        return feedback;
    }

    public double getHorasJogadas() {
        return horasJogadas;
    }

    public int getNota() {
        return nota;
    }

    /** Setters **/

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public void setHorasJogadas(float horasJogadas) {
        this.horasJogadas = horasJogadas;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }
}
