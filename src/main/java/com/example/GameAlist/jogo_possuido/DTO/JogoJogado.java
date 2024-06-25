package com.example.GameAlist.jogo_possuido.DTO;

import com.example.GameAlist.utils.horaDoubleValidator.HoraDouble;
import jakarta.validation.constraints.*;

public class JogoJogado extends JogoPossuido {

    @Size(max = 140, message = "o feedback deve ter até 140 caracteres")
    public String feedback;

    @NotNull
    @HoraDouble
    public double horasJogadas;

    @PositiveOrZero
    @Max(10)
    public int nota;


    /** Contrutores **/

    public JogoJogado(){};

    public JogoJogado(String id, Long usuarioId, Long jogoId, String plataforma, String dataAdicao, String estado,
            String feedback, double horasJogadas, int nota) {
        super(id, usuarioId, jogoId, plataforma, dataAdicao, estado);
        this.feedback = feedback;
        this.horasJogadas = horasJogadas;
        this.nota = nota;
    }

}
