package com.example.GameAlist.jogo_possuido.DTO;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public class JogoJogado extends JogoPossuido {

    @Size(max = 140, message = "o feedback deve ter até 140 caracteres")
    public String feedback;

    @NotNull
    public int horasJogadas;

    @Positive
    @Max(10)
    public int nota;


    /** Contrutores **/

    public JogoJogado(){};

    public JogoJogado(String id, Long usuarioId, Long jogoId, String plataforma, String dataAdicao, String estado,
            String feedback, int horasJogadas, int nota) {
        super(id, usuarioId, jogoId, plataforma, dataAdicao, estado);
        this.feedback = feedback;
        this.horasJogadas = horasJogadas;
        this.nota = nota;
    }

}
