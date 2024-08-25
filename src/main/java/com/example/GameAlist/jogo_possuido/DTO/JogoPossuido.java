package com.example.GameAlist.jogo_possuido.DTO;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.validation.constraints.*;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.EXISTING_PROPERTY,
        property = "estado", visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = JogoPossuido.class, name = "NAO_JOGADO"),
        @JsonSubTypes.Type(value = JogoJogado.class, names = {"JOGANDO", "DROPADO","FINALIZADO", "PLATINADO"})
})
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

    @NotBlank
    @Size(min = 4,max = 150,message = "Titulo deve ter entre 4 e 150 caracteres")
    public String titulo;

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