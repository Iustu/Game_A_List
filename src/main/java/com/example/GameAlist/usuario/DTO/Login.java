package com.example.GameAlist.usuario.DTO;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class Login {

    @NotNull
    protected String apelido;

    @NotNull
    @Size(min = 4)
    protected String senha;

    /** Contrutores **/
    public Login(String apelido, String senha) {
        this.apelido = apelido;
        this.senha = senha;
    }
    public Login() {}

    /** Getters **/

    public String getApelido() {
        return apelido;
    }

    public String getSenha() {
        return senha;
    }

    /** Setters **/

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
