package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
public class ProductManager {

    @Autowired
    @Qualifier("electronicProduct")
    Product product ;

    public ProductManager()
    {

    }


    Product product1;

    @Autowired
    public ProductManager(@Qualifier("clothingProduct") Product product)
    {
        this.product1 = product;
    }


    Demo demo;


    @Autowired
    public ProductManager(Demo demo)
    {
        this.demo = demo;
    }


    public void addToCart()
    {
        product.add();

    }


    public void setProduct(Product product) {
        this.product = product;
    }
}
