package game_a_list.publicacao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PublicacaoRepository extends JpaRepository<Publicacao,Long> {

    @Query("Select s From Comentario s WHERE p.id = ?1")
    Optional<Publicacao> findPublicacaoById(Long id);
}
