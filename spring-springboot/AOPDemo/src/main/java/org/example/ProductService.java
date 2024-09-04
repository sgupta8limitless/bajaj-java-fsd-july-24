package org.example;

import org.springframework.stereotype.Component;

@Component
public class ProductService {


    public void createProduct(String name)
    {
        System.out.println("Product Created "+name);
    }

    @Admin(dummy ="data1")
    public void deleteProduct()
    {
        System.out.println("product deleted");
    }

    public String getProductCode()
    {
        System.out.println("task for getting code real function");

        if(1==12)
        {
            return "1234PC";
        }

        int[] nums = {1,2,3,4};

//        try
//        {
            System.out.println(nums[10]);
//        }
//        catch (Exception e)
//        {
//            System.out.println("index issue");
//        }


        return "123";


//        throw new RuntimeException("Code Not Found");




    }


    @Admin(dummy = "data2")
    public String doSomething(int data)
    {
        System.out.println("Simeple task function");
        return "Hello";
    }


}
