package com.book_library.response_dto;

import com.book_library.entity.Book;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookListResponse {
    private Integer totalPages;
    private Integer totalItems;
    private List<Book> books;
}
