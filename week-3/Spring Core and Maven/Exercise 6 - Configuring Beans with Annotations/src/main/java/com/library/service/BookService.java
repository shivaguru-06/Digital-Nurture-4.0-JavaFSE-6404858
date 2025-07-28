package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private NotificationService notificationService;

    public void addBook(String bookName) {
        bookRepository.saveBook(bookName);
        notificationService.sendNotification("Added new book: " + bookName);
    }
}


