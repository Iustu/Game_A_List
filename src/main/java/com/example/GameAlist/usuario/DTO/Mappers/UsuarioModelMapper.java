package com.example.GameAlist.usuario.DTO.Mappers;

import com.example.GameAlist.usuario.DTO.Usuario;
import com.example.GameAlist.usuario.UsuarioModel;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface UsuarioModelMapper {

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateUsuarioModelFromDto(Usuario dto, @MappingTarget UsuarioModel entity);
}
