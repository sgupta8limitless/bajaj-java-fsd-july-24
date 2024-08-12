public class DemoB extends DemoA {

        public String city;
        private String name = "Nikhil";

        public DemoB(String name)
        {
            super(name);
        }

        public void setCity(String city)
        {
            this.city = city;
        }

        public void printAll()
        {
            System.out.println(super.name+" "+city);
        }



}
