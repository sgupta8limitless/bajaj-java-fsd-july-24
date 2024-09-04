package org.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.EnableAspectJAutoProxy;


public class Main {
    public static void main(String[] args) {


        ApplicationContext context =
                new AnnotationConfigApplicationContext(AppConfig.class);

       ProductService productService = context.getBean(ProductService.class);

//       productService.createProduct("Samsung M51");

//        productService.deleteProduct();

//        productService.getProductCode();


        productService.doSomething(2);
        productService.deleteProduct();

    }
}