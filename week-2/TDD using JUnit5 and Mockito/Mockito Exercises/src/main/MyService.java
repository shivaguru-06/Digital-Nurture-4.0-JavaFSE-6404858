package com.example;

public class MyService {
    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }

    public void sendMessage(String msg) {
        api.sendMessage(msg);
    }

    public void performAction() {
        api.performAction();
    }

    public void callInOrder() {
        api.method1();
        api.method2();
    }
}


