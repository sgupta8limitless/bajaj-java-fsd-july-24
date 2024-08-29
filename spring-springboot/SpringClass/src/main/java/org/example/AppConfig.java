package org.example;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public ClothingProduct clothingProduct()
    {
        return new ClothingProduct();
    }

    @Bean
    public ElectronicProduct electronicProduct()
    {
        return new ElectronicProduct();
    }

    @Bean
    public ProductManager productManager()
    {
       ProductManager productManager = new ProductManager();

       productManager.setProduct(clothingProduct());
       return productManager;
    }

}
