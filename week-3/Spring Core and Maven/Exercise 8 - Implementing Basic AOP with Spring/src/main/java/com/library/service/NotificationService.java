package com.library.service;

import org.springframework.stereotype.Component;

@Component
public class NotificationService {
    public void sendNotification(String message) {
        System.out.println("Notification sent: " + message);
    }
}
