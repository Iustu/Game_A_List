package com.example.GameAlist.publicacao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class PublicacaoService {

    private final PublicacaoRepository publicacaoRepository;
    @Autowired
    public PublicacaoService(PublicacaoRepository publicacaoRepository){
        this.publicacaoRepository = publicacaoRepository;
    }

    public List<Publicacao> getPublicacoes(){
        return publicacaoRepository.findAll();
    }

    public void savePublicacao( Publicacao publicacao) {
        Optional<Publicacao> publicacaoOptional = publicacaoRepository.findById(publicacao.getId());
        if (publicacaoOptional.isPresent()){
            throw new IllegalStateException("email taken");
        }
        publicacaoRepository.save(publicacao);
    }

    public void deletePublicacao(Long publicacaoId){
        boolean exists = publicacaoRepository.existsById(publicacaoId);
        if (!exists){
            throw new IllegalStateException("publicacao id does not exists");
        }
        publicacaoRepository.deleteById(publicacaoId);
    }

    @Transactional
    public void updatePublicacao(Long publicacaoId, String name, String email){
        Publicacao publicacao = publicacaoRepository.findById(publicacaoId).orElseThrow(()-> new IllegalStateException("Publicacao with id"+publicacaoId+"does not exists"));

    }


}
