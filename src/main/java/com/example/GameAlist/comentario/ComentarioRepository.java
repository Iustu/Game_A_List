package game_a_list.comentario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ComentarioRepository extends JpaRepository<Comentario,Long> {

    @Query("Select c From Comentario c WHERE c.id = ?1")
    Optional<Comentario> findComentarioById(Long id);
}
