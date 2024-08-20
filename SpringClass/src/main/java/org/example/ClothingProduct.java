package org.example;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
//@Primary
public class ClothingProduct implements Product {

    @Autowired
    Demo demo;

    public void add()
    {
        System.out.println("Clothing product shopping");
    }
}
