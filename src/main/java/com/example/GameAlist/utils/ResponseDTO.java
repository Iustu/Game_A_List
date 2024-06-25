package com.example.GameAlist.utils;

public class ResponseDTO {

    public int code;

    public Object body;
    public String header;

    public ResponseDTO(int code, Object body, String header) {
        this.code = code;
        this.body = body;
        this.header = header;
    }

    public ResponseDTO(){
        this.code = 400;
        this.body = "Requisição mal-formulada";
        this.header = "BAD_REQUEST";
    }

}
