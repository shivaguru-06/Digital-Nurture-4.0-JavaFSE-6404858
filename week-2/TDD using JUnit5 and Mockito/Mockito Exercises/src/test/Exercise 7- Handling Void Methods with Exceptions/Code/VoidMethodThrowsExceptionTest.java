package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class VoidMethodThrowsExceptionTest {
    @Test
    public void testVoidMethodThrowsException() {
        ExternalApi mockApi = mock(ExternalApi.class);
        doThrow(new RuntimeException("Error")).when(mockApi).performAction();

        MyService service = new MyService(mockApi);

        assertThrows(RuntimeException.class, service::performAction);
        verify(mockApi).performAction();
    }
}
