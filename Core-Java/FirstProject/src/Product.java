public class Product {

    private String name;
    private int price;
    private int quantity;
    private int disPer;


    Product(String name,int price,int quantity,int disPer)
    {
        this.name = name ;
        this.price = price;
        this.quantity = quantity;
        this.disPer = disPer;

    }

    public void printDetails()
    {
        System.out.println(name+" "+price+" "+quantity);
    }

    public float getDiscount()
    {
        float per = (disPer*price)/100;
        return (price - per);
    }

    public float getDiscount(int customDisPer)
    {
        float per = (customDisPer*price)/100;
        return (price - per);
    }







}
