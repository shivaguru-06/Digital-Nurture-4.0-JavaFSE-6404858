package com.example.ParameterizedLogging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String[] args) {
        String username = "Shivaguru-6404858";
        int age = 22;

        logger.info("User {} is {} years old.", username, age);
        logger.debug("Debug message for user: {}", username);
    }
}
