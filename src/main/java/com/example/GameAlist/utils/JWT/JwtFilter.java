package com.example.GameAlist.utils.JWT;

import com.example.GameAlist.utils.config.WebSecurityConfig;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtAuth jwtService;

    @Autowired
    private UserDetailsServiceImpl detailsService;



    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        String token;
        Long userId;
        if (checkIfEndpointIsNotPublic(request)) {
            if (authHeader != null && authHeader.startsWith("Bearer")) {
                token = authHeader.substring(7);
                System.out.print(token);
                userId = jwtService.getSubjectFromToken(token);

                UserDetailsImpl userDetails = (UserDetailsImpl) detailsService.loadUserByUsername(userId.toString());

                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            } else {
                throw new RuntimeException("O token está ausente.");
            }
        }

        filterChain.doFilter(request, response);
    }

    private boolean checkIfEndpointIsNotPublic(HttpServletRequest request) {
        String requestURI = request.getRequestURI();
        return !Arrays.asList(WebSecurityConfig.ENDPOINTS_WITH_AUTHENTICATION_NOT_REQUIRED).contains(requestURI);
    }
}