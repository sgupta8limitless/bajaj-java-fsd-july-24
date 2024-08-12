import java.util.Scanner;

public class User {

    private String name;
    private int age;
    private String city;

    Scanner scanner = new Scanner(System.in);

    public void setName(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }


//    public void getDetails()
//    {
//        System.out.println("Enter Name");
//        name = scanner.next();
//        System.out.println("Enter age");
//        age = scanner.nextInt();
//        System.out.println("Enter City");
//        city = scanner.next();
//    }

//    public void printDetails()
//    {
//        System.out.println("the name is "+name);
//        System.out.println("the age is "+age);
//        System.out.println("the city is "+city);
//    }


}
