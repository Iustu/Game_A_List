package com.example.GameAlist.jogo_possuido;

import com.example.GameAlist.jogo_possuido.DTO.JogoJogado;
import com.example.GameAlist.jogo_possuido.DTO.JogoPossuido;
import com.example.GameAlist.utils.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JogoPossuidoService {

    @Autowired
    private JogoPossuidoRepository repo;

    protected ResponseDTO cadastrarJogoPossuido(JogoPossuido jogo){
        if(jogo.id!= null){
            return new ResponseDTO(403,"Documento de jogo na biblioteca já cadastrado",
                    "Already Exists");
        }

        Optional<JogoPossuidoModel>registroExistente = repo.findByIdUsuarioAndIdJogo(jogo.idUsuario, jogo.idJogo);
        if (registroExistente.isPresent() && (registroExistente.get().plataforma.equals(jogo.plataforma))){
            return new ResponseDTO(404,"Atividades de jogo nessa plataforma já registradas na sua biblioteca",
                    "Jogo possuído já registrado na mesma plataforma");
        }

        JogoPossuidoModel novoJogo;
        if((jogo instanceof JogoJogado)){
            novoJogo = new JogoJogadoModel((JogoJogado) jogo);
        }
        else {
            novoJogo =  new JogoPossuidoModel(jogo);
        }

        try {
           novoJogo = repo.save(novoJogo);
            return new ResponseDTO(202,novoJogo, "jogo cadastrado");
        } catch (Exception e) {
            return new ResponseDTO(
                    500,
                    "Erro ao cadastrar usuário. mensagem: "+e.getMessage(),
                    "Internal Server Error");
        }
    }

    protected List<JogoPossuidoModel> recuperaJogosPossuidos (Long idUsuario){

        try {
            return repo.findAllByIdUsuario(idUsuario);
        }
        catch (Exception e){
            return null;
        }
    }

    protected ResponseDTO atualizarJogoPossuido (JogoPossuido atualizado){

        //Checagens para evitar erros e mudanças de campos que devem ser inalteráveis
        if (atualizado.id == null){
            return new ResponseDTO(404,"Jogo não cadastrado na biblioteca", "BAD REQUEST");
        }

        Optional<JogoPossuidoModel> jogoBd = repo.findById(atualizado.id);

        if(jogoBd.isEmpty()){
            return new ResponseDTO(404,"Id não cadastrado no banco de dados", "BAD REQUEST");
        }

        if(!restricaoUpdate(atualizado,jogoBd.get())){
            return new ResponseDTO(422,"A atualização modificaria campos que não podem ser alterados",
                    "Unprocessable Content");
        }

        // Update da entidade
        JogoPossuidoModel atualJogo;
        if((atualizado instanceof JogoJogado)){
            atualJogo = new JogoJogadoModel((JogoJogado) atualizado);
        }
        else {
            atualJogo =  new JogoPossuidoModel(atualizado);
        }

        try {
            atualJogo = repo.save(atualJogo);
            return new ResponseDTO(202,atualJogo, "jogo cadastrado");
        } catch (Exception e) {
            return new ResponseDTO(
                    500,
                    "Erro ao cadastrar jogo. mensagem: "+e.getMessage(),
                    "Internal Server Error");
        }
    }

    protected ResponseDTO excluirJogoPossuido (String id){
        try {
            repo.deleteById(id);
            return new ResponseDTO(200,"Jogo deletado da biblioteca com sucesso!", "jogo cadastrado");
        }catch (Exception e){
            return new ResponseDTO(
                    500,
                    "Erro ao deletar jogo. mensagem: "+e.getMessage(),
                    "Internal Server Error");
        }
    }

    /************************************ Utils ************************************************************/

    private boolean restricaoUpdate(JogoPossuido atualizado, JogoPossuidoModel jogoBD){
        JogoPossuidoModel jogoAtualizado = new JogoPossuidoModel(atualizado);

        return jogoBD.idJogo.equals(jogoAtualizado.idJogo)
                && jogoBD.idUsuario.equals(jogoAtualizado.idUsuario)
                && jogoBD.dataAdicao.isEqual(jogoAtualizado.dataAdicao)
                && jogoBD.plataforma.equals(atualizado.plataforma);
    }
}
