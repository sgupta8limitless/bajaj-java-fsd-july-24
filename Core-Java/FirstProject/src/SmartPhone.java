public class SmartPhone extends Product {


        private String ram;
        private String color;

        public SmartPhone(
                String name,
                int price,
                int quantity,
                int disPer,
                String ram,
                String color)
        {
                super(name,price,quantity,disPer);
                this.ram = ram;
                this.color = color;

        }

        public void printDetails()
        {
               super.printDetails();
                System.out.println(ram+" "+color);
        }




}
