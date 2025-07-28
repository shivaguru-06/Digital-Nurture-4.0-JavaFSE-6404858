package com.library.aspect;

public class LoggingAspect {

    public void logBefore() {
        System.out.println("[AOP] Before method: logBefore()");
    }

    public void logAfter() {
        System.out.println("[AOP] After method: logAfter()");
    }
}

