import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

//        Collections



        ArrayList<Integer> nums =new ArrayList();
//
//        nums.add(23);
//        nums.add(67);
//        nums.add(34);
//        nums.add(67);
//        nums.add(89);


//       List<Integer> mnums =  nums.stream().map((n)->{
//            return n-5;
//        }).collect(Collectors.toList());
//
//        System.out.println(mnums);

//    [46,134,68,178]

//       List<Integer> mnums =  nums.stream().filter((n)->{
//           return n>50;
//        }).collect(Collectors.toList());

//        System.out.println(mnums);


//        nums.stream()
//                .sorted(Comparator.reverseOrder())
//                .distinct()
//                .skip(1)
//                .limit(3)
//                .forEach((n)->{
//            System.out.println(n);
//        });




        ArrayList<Product> products = new ArrayList();

        products.add(new Product("Iphone 14",89000,120));
        products.add(new Product("Levis Jeans",2300,500));
        products.add(new Product("Toothbrush",20,170));


        products
                .stream()
                .map((product)->{
                    product.setQuantity(product.getQuantity()+20);
                    return product;
                })
                .filter((product)->{
                    return product.getQuantity()>150;
                })
                .sorted(Comparator.comparing(Product::getPrice).reversed())
                .forEach((product)->{
                    System.out.println(product);
                });













//        System.out.println(nums.get(0));

//       for(int i = 0;i<nums.size();i++)
//       {
//           System.out.println(nums.get(i));
//       }

//        System.out.println("-------");

//       nums.add(2,45);

//        nums.set(0,12);

//        for(int i = 0;i<nums.size();i++)
//        {
//            System.out.println(nums.get(i));
//        }






    }
}