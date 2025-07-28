package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class VoidMethodTest {
    @Test
    public void testVoidMethod() {
        ExternalApi mockApi = mock(ExternalApi.class);
        doNothing().when(mockApi).sendMessage(anyString());

        MyService service = new MyService(mockApi);
        service.sendMessage("Test message");

        verify(mockApi).sendMessage("Test message");
    }
}
