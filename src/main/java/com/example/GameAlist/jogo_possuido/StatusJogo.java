package com.example.GameAlist.jogo_possuido;

public enum StatusJogo {

    NAO_JOGADO("NAO_JOGADO"), JOGANDO("JOGANDO"), DROPADO("DROPADO"),
    FINALIZADO("FINALIZADO"), PLATINADO("PLATINADO");

    private String dbStatus;

    StatusJogo() {
    }

    StatusJogo(String dbStatus) {
        this.dbStatus = dbStatus;
    }

    public String getDbStatus() {
        return dbStatus;
    }
}
