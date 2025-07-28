package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;
    private NotificationService notificationService;  
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

   
    public void setNotificationService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

   
    public void addBook(String bookName) {
        bookRepository.saveBook(bookName);
        notificationService.sendNotification("Added new book: " + bookName);
    }
}


