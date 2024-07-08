package com.example.GameAlist.utils.JWT;

import io.jsonwebtoken.*;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;

@Service
public class JwtAuth {

    private final SecretKey key = Jwts.SIG.HS256.key().build();

    private static final String ISSUER = "GameAlist-api";

    public String criarToken(Long id){


        return Jwts.builder()
                .subject(id.toString())
                .issuer(ISSUER)
                .signWith(key).compact();
    }

    public Long getSubjectFromToken(String token) {
        Jws<Claims> claim;

        try {
            claim = Jwts.parser()
                    .verifyWith(key)
                    .requireIssuer(ISSUER)
                    .build()
                    .parseSignedClaims(token);
        } catch (JwtException exception){
            throw new JwtException ("Token inválido ou expirado.");
        }

        String idString = claim.getPayload().getSubject();
        return Long.parseLong(idString);
    }

}
