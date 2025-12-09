package com.book_library.controller;

import com.book_library.response_dto.BookListResponse;
import com.book_library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/filter")
    @ResponseStatus(HttpStatus.OK)
    public BookListResponse filterBooks(@RequestParam(value = "size") Integer size,
                                        @RequestParam(value = "page") Integer page,
                                        @RequestParam(value = "title") String title,
                                        @RequestParam(value = "category", required = false) String category) {
        return bookService.getBooksBySearch(title, page, size, category);
    }
}
