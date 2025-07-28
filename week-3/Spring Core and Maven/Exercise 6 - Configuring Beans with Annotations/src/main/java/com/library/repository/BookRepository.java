package com.library.repository;

import org.springframework.stereotype.Component;

@Component
public class BookRepository {
    public void saveBook(String bookName) {
        System.out.println("Book saved: " + bookName);
    }
}



