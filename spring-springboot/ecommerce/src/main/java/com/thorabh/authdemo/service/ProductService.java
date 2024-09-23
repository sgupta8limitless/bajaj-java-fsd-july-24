package com.thorabh.authdemo.service;

import com.thorabh.authdemo.entity.Product;
import com.thorabh.authdemo.exception.EntityNotFound;
import com.thorabh.authdemo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public Product create(Product product)
    {
        return productRepository.save(product);
    }

    public List<Product> index()
    {
        return productRepository.findAll();
    }

    public Product findSingle(Long id)
    {
        Optional<Product> product =  productRepository.findById(id);

        if(product.isPresent())
        {
            return product.get();
        }

        throw new EntityNotFound("Product Not Found");

    }


    public Product update(Long id,Product product)
    {
        Optional<Product> productOptional =  productRepository.findById(id);

        if(productOptional.isPresent())
        {
            Product updateProduct = productOptional.get();

            updateProduct.setName(product.getName());
            updateProduct.setPrice(product.getPrice());
            updateProduct.setQuantity(product.getQuantity());
            updateProduct.setImageUrl(product.getImageUrl());
        }

        throw new EntityNotFound("Product Not Found");
    }



    public String delete(Long id)
    {
        productRepository.deleteById(id);

        return "Product Deleted";
    }


}


