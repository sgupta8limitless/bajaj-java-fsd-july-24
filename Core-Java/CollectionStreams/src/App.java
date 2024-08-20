public class App {

    public static void main(String[] args) {

        PrintValue<Integer,> printValue
                = new PrintValue(23,new Product("Iphone",2300,120));

        printValue.print();



    }


}
