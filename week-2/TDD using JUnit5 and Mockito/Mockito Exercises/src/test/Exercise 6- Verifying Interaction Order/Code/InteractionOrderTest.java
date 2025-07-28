package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import org.mockito.InOrder;

public class InteractionOrderTest {
    @Test
    public void testInteractionOrder() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.callInOrder();

        InOrder inOrder = inOrder(mockApi);
        inOrder.verify(mockApi).method1();
        inOrder.verify(mockApi).method2();
    }
}
