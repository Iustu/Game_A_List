package com.example.GameAlist.jogo_possuido.DTO;

import jakarta.validation.constraints.*;

public class JogoPossuido {

    public String id;

    @NotNull
    @Positive
    public Long idUsuario;

    @NotNull
    @Positive
    public Long idJogo;

    @NotBlank
    @Size(min = 4,max = 150,message = "plataforma deve ter entre 4 e 150 caracteres")
    public String plataforma;

    @Size(min = 10, max = 10)
    @Pattern(regexp ="\\d{2}/\\d{2}/\\d{4}")
    public String dataAdicao;

    @NotBlank
    public String estado;

    /** Contrutores **/
    public JogoPossuido(){}
    public JogoPossuido(String id, Long usuarioId, Long jogoId, String plataforma, String dataAdicao, String estado) {
        this.id = id;
        this.idUsuario = usuarioId;
        this.idJogo = jogoId;
        this.plataforma = plataforma;
        this.dataAdicao = dataAdicao;
        this.estado = estado;
    }
}