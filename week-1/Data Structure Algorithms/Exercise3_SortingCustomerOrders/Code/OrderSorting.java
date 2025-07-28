// Order class.
class Order {
    int orderId;
    String customerName;
    double totalPrice;

   
    Order(int id, String name, double price) {
        orderId = id;
        customerName = name;
        totalPrice = price;
    }
}

public class OrderSorting {
    
    static void bubbleSort(Order[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++)
            for (int j = 0; j < n - i - 1; j++)
                if (arr[j].totalPrice > arr[j + 1].totalPrice) {
                    
                    Order t = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = t;
                }
    }

    
    static void quickSort(Order[] arr, int l, int r) {
        if (l < r) {
            
            int p = partition(arr, l, r);
            quickSort(arr, l, p - 1); 
            quickSort(arr, p + 1, r); 
        }
    }


    static int partition(Order[] arr, int l, int r) {
        double pivot = arr[r].totalPrice;
        int i = l - 1;
        for (int j = l; j < r; j++) {
            if (arr[j].totalPrice <= pivot) {
                i++;
                Order t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
        Order t = arr[i + 1];
        arr[i + 1] = arr[r];
        arr[r] = t;
        return i + 1;
    }

    public static void main(String[] args) {
        
        Order[] arr = {
                new Order(1, "A", 400),
                new Order(2, "B", 230),
                new Order(3, "C", 500),
                new Order(4, "D", 340)
        };
        
        bubbleSort(arr);
        for (Order o : arr)
            System.out.print(o.totalPrice + " ");
        System.out.println();
        
        quickSort(arr, 0, arr.length - 1);
        for (Order o : arr)
            System.out.print(o.totalPrice + " ");
    }
}