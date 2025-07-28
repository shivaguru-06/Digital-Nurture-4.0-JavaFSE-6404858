package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class ArgumentMatchingTest {
    @Test
    public void testArgumentMatching() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        service.sendMessage("Hello");

        verify(mockApi).sendMessage(eq("Hello"));
    }
}

