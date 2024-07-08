package com.example.GameAlist.usuario;

import com.example.GameAlist.usuario.DTO.Login;
import com.example.GameAlist.usuario.DTO.Mappers.UsuarioModelMapper;
import com.example.GameAlist.usuario.DTO.Usuario;
import com.example.GameAlist.utils.JWT.JwtAuth;
import com.example.GameAlist.utils.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;
@Service
public class UsuarioService {

    @Autowired
    UsuarioRepositoy repo;

    @Autowired
    UsuarioModelMapper mapper;

    @Autowired
    JwtAuth token;

    protected UsuarioModel loginUsuario(Login login){

        Optional<UsuarioModel> usuarioOpt = repo.findByApelido(login.getApelido());

        if(usuarioOpt.isEmpty()) return null;

        UsuarioModel usuarioBD = usuarioOpt.get();


        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if(!encoder.matches(login.getSenha(),usuarioBD.senha)){
            return null;
        }

        if (!usuarioBD.ativo){
            usuarioBD = usuarioInativo();
        }else {
            usuarioBD.senha= token.criarToken(usuarioBD.idUsuario);
        }


        return usuarioBD;
    }

    protected ResponseDTO cadastarUsuario (Usuario novoUsuario){
        if(novoUsuario.getIdUsuario()!= null){
            return new ResponseDTO(403,"Usuário já cadastrado", "Already Exists");
        }

        UsuarioModel usuario = new UsuarioModel(novoUsuario);

        Optional<UsuarioModel> usuarioOpt = repo.findByApelidoOrEmail(usuario.apelido, usuario.email);
        
        AtomicReference<ResponseDTO> res = new AtomicReference<>();
        usuarioOpt.ifPresentOrElse(
                (value) -> res.set(jaCadastrado(value,novoUsuario)),
                () -> {
                    try {
                        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
                        usuario.senha = encoder.encode(usuario.senha);
                        repo.save(usuario);
                        res.set(new ResponseDTO(
                                201,
                                "Usuário cadastrado com sucesso!",
                                "Cadastrado")
                        );
                    } catch (Exception e) {
                        res.set(new ResponseDTO(
                                500,
                                "Erro ao cadastrar usuário. mensagem: "+e.getMessage(),
                                "Internal Server Error")
                        );
                    }
                }
        );
        return res.get();
    }

    protected ResponseDTO atualizarUsuario (Usuario usuario){

        usuario.setAtivo(true);

        if (usuario.getIdUsuario() == null){
            return new ResponseDTO(404,"Usuário não cadastrado", "BAD REQUEST");
        }

        Optional<UsuarioModel> usuarioBdOpt = repo.findById(usuario.getIdUsuario());

        if(usuarioBdOpt.isEmpty()){
            return new ResponseDTO(404,"Entidade não existe no banco de dados", "BAD REQUEST");
        }

        UsuarioModel usuarioBD = usuarioBdOpt.get();

        mapper.updateUsuarioModelFromDto(usuario,usuarioBD);

        try {
            repo.save(usuarioBD);
            return new ResponseDTO(200,"Usuário atualizado", "Atualizado");

        } catch (DataIntegrityViolationException e) {

            ResponseDTO res = new ResponseDTO(
                    400,
                    "Um erro nos dados enviados foi encontrado:" + e.getMessage(),
                    "Erro ao atualizar"
            );

            //Retorna se os dados enviados violam as restrições do e-mail ou apelido dos usuários serem únicos

            if(e.getMessage().contains("apelido_constraint")){
                res.body = "Esse apelido já está sendo usado por outro usuário!";
            }
            if(e.getMessage().contains("email_constraint")){
                res.body = "Esse e-mail já foi registrado por outro usuário!";
            }
            return res;
        } catch (Exception e){
            return new ResponseDTO(
                    400,
                    "Erro ao atualizar:" + e.getMessage(),
                    "Erro ao atualizar"
            );
        }
    }

    protected ResponseDTO excluirUsuario (Usuario usuario){


        Optional<UsuarioModel> usuarioOpt = repo.findById(usuario.getIdUsuario());

        AtomicReference<ResponseDTO> res = new AtomicReference<>();
        usuarioOpt.ifPresentOrElse(
                (value) -> {
                    try {
                        value.setAtivo(false);
                        repo.save(value);
                        res.set(new ResponseDTO(
                                200,
                                "Usuário excluído com sucesso!",
                                "Excluído")
                        );
                    }catch (Exception e) {
                        res.set(new ResponseDTO(
                                500,
                                "Ocorreu um erro ao excluir o usuário",
                                "Internal Server Error")
                        );
                    }
                },
                () -> {
                    res.set(new ResponseDTO(
                            400,
                            "O Usuário não existe!",
                            "BAD REQUEST")
                    );
                }
        );

        return res.get();
    }

    protected ResponseDTO alterarSenha(Login senhaAlterada) {
        Optional<UsuarioModel> usuarioBdOpt = repo.findByApelido(senhaAlterada.getApelido());

        if(usuarioBdOpt.isEmpty()){
            return new ResponseDTO(404,"Usuário não existe no banco de dados", "BAD REQUEST");
        }

        UsuarioModel usuarioBD = usuarioBdOpt.get();
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        if(encoder.matches(senhaAlterada.getSenha(),usuarioBD.senha)){
            return new ResponseDTO(400,"A nova senha deve ser diferente da antiga", "BAD REQUEST");
        }

        try {
            usuarioBD.senha = encoder.encode(senhaAlterada.getSenha());

            repo.save(usuarioBD);
            return new ResponseDTO(200,"Senha atualizada com sucesso", "Atualizado");

        } catch (Exception e) {
            return new ResponseDTO(
                    500,
                    "Ocorreu um erro ao tentar alterar a senha",
                    "Internal Server Error");
        }
    }

    /************************************ utils ***********************************************************/

    private static ResponseDTO jaCadastrado(UsuarioModel cadastro, Usuario tentativaRecadastro){

        ResponseDTO response = new ResponseDTO(403,"Este apelido já é usado por outro usuário",
                "Erro no cadastro");

        String emailRecadastro = tentativaRecadastro.getEmail();
        String apelidoRecadastro = tentativaRecadastro.getApelido();

        if(cadastro.apelido.equals(apelidoRecadastro) && cadastro.email.equals(emailRecadastro)){
            response.body = "usuário já cadatrado";
        } else if (cadastro.email.equals(emailRecadastro)) {
            response.body = "Este e-mail já está cadastrado";
        }

        return response;
    }

    private static UsuarioModel usuarioInativo(){
        UsuarioModel usuarioInativo =
                new UsuarioModel((long) -1,"Inativo","Inativo","Inativo","Inativo",false);
        return usuarioInativo;
    }

}

