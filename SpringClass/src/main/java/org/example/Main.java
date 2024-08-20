package org.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {

//        ElectronicProduct electronicProduct = new ElectronicProduct();
//        ClothingProduct clothingProduct = new ClothingProduct();
//
//        ProductManager productManager = new ProductManager(clothingProduct);

//        productManager.addToCart();

//        ApplicationContext applicationContext =
//                new ClassPathXmlApplicationContext("beans.xml");

        ApplicationContext applicationContext =
                new AnnotationConfigApplicationContext(AppConfigAdvanced.class);

        ProductManager productManager =
                applicationContext.getBean("productManager",ProductManager.class);

        ProductManager productManager1 =
                applicationContext.getBean("productManager",ProductManager.class);

        System.out.println(productManager);
        System.out.println(productManager1);

        productManager.addToCart();


    }
}