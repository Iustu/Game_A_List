package com.example.GameAlist.jogo_possuido;

import com.example.GameAlist.jogo_possuido.DTO.JogoJogado;
import com.example.GameAlist.jogo_possuido.DTO.JogoPossuido;
import com.example.GameAlist.utils.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JogoPossuidoService {

    @Autowired
    private JogoPossuidoRepository repo;

    protected ResponseDTO cadastrarJogoPossuido(JogoPossuido jogo){

        JogoPossuidoModel novoJogo =  new JogoPossuidoModel(jogo);

        repo.save(novoJogo);
        return new ResponseDTO(202,"Jogo cadastrado com sucesso!", "jogo cadastrado");
    }

    protected List<JogoPossuidoModel> recuperaJogosPossuidos (Long idUsuario){

        List<JogoPossuidoModel> jogos = repo.findAllByIdUsuario(idUsuario);
        return jogos;
    }

    protected ResponseDTO atualizarJogoPossuido (JogoPossuido jogo){

        return null;
    }

    protected ResponseDTO excluirJogoPossuido (String id){

        return null;
    }
}
