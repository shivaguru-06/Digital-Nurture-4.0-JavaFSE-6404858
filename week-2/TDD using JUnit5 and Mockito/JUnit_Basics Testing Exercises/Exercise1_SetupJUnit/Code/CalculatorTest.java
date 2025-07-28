import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    Calculator calc = new Calculator();

    @Test
    void testAddition() {
        assertEquals(5, calc.add(2, 3), "2 + 3 should be 5");
    }

    @Test
    void testDivision() {
        assertEquals(2, calc.divide(10, 5), "10 / 5 should be 2");
    }

    @Test
    void testDivisionByZero() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            calc.divide(10, 0);
        });

        assertEquals("Cannot divide by zero", exception.getMessage());
    }

    @Test
    void testCondition() {
        assertTrue(calc.add(1, 2) < 5, "1 + 2 is less than 5");
    }
}