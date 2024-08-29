package org.example;

import org.springframework.stereotype.Component;

@Component
public class ElectronicProduct implements Product {

    public void add()
    {
        System.out.println("Electronic product shopping");
    }


}
