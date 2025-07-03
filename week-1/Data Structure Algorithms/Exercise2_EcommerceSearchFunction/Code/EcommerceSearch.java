// prodct class 
class Product {
    int productId;
    String productName, category;

    // constructor for make new product
    Product(int id, String name, String category) {
        this.productId = id;
        this.productName = name;
        this.category = category;
    }
}

public class EcommerceSearch {
    // this is a linear search function
    // it checks every product one by one
    static int linearSearch(Product[] arr, String name) {
        for (int i = 0; i < arr.length; i++)
            if (arr[i].productName.equals(name))
                return i; // found it
        return -1; // not found
    }

    static int binarySearch(Product[] arr, String name) {
        int l = 0, r = arr.length - 1;
        while (l <= r) {
            int m = (l + r) / 2; 
            int cmp = arr[m].productName.compareTo(name);
            if (cmp == 0)
                return m; 
            else if (cmp < 0)
                l = m + 1; 
            else
                r = m - 1; 
        }
        return -1; 
    }

    public static void main(String[] args) {
    
        Product[] arr = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Mobile", "Electronics"),
                new Product(3, "Pen", "Stationery"),
                new Product(4, "Shoes", "Fashion")
        };
        
        System.out.println(linearSearch(arr, "Laptop"));
        System.out.println(linearSearch(arr, "Shoes"));
        System.out.println(binarySearch(arr, "Pen"));
    }
}