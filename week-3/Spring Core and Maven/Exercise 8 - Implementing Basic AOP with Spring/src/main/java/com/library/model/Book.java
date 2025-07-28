package com.library.model;

public class Book {
    private String title;
    private String author;

    
    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public void display() {
        System.out.println("Book: " + title + " by " + author);
    }
}
