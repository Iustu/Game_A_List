package com.example.GameAlist.utils.JWT;

import com.example.GameAlist.usuario.UsuarioModel;
import com.example.GameAlist.usuario.UsuarioRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UsuarioRepositoy repo;

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {

        Long id = Long.parseLong(userId);
        Optional<UsuarioModel> user = repo.findById(id);
        if (user.isPresent()){
            return new UserDetailsImpl(user.get());
        }

        return null;
    }
}
