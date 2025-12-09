package com.book_library.repository;

import com.book_library.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    //Page<Book> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);

    /*
    @Query(value = "SELECT * " +
            "FROM books b " +
            "WHERE b.title LIKE '%:title%'", nativeQuery = true)
    Optional<List<Book>> searchBooksByTitle(@Param("title") String title);
     */

    @Query(value = "SELECT * FROM books b WHERE b.title LIKE :title", nativeQuery = true)
    Optional<List<Book>> searchBooksByTitle(@Param("title") String title);

    @Query(value = "SELECT * FROM books b WHERE b.title LIKE :title AND b.category= :category", nativeQuery = true)
    Optional<List<Book>> searchBooksByTitleAndCategory(@Param("title") String title, @Param("category") String category);
}
