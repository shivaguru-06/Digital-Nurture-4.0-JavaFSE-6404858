
class Employee {
    int employeeId;
    String name, position;
    double salary;

    
    Employee(int id, String name, String pos, double sal) {
        employeeId = id;
        this.name = name;
        position = pos;
        salary = sal;
    }
}


public class EmployeeManagementSystem {
    Employee[] arr = new Employee[100]; 
    int size = 0; 

    void add(Employee e) {
        arr[size++] = e;
    }

    
    int search(int empId) {
        for (int i = 0; i < size; i++)
            if (arr[i].employeeId == empId)
                return i;
        return -1;
    }

    
    void traverse() {
        for (int i = 0; i < size; i++)
            System.out.println(arr[i].name);
    }

    
    void delete(int empId) {
        int idx = search(empId);
        if (idx != -1) {
            for (int i = idx; i < size - 1; i++)
                arr[i] = arr[i + 1];
            size--;
        }
    }

    
    public static void main(String[] args) {
        EmployeeManagementSystem ems = new EmployeeManagementSystem();
        ems.add(new Employee(1, "Shiva", "Developer", 50000));
        ems.add(new Employee(2, "Guru", "Manager", 25000));
        ems.add(new Employee(3, "Deva", "Analyst", 35000));
        System.out.println("All employees:");
        ems.traverse();
        System.out.println("\nDeleting employee with ID 1...");
        ems.delete(1);
        System.out.println("\nEmployees after deletion:");
        ems.traverse();
    }
}