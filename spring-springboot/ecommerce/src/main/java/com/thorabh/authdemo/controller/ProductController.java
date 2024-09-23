package com.thorabh.authdemo.controller;

import com.thorabh.authdemo.beans.GlobalResponseHandler;
import com.thorabh.authdemo.entity.Product;
import com.thorabh.authdemo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("")
    public ResponseEntity<Object> createProduct(@RequestBody Product product)
    {
        return GlobalResponseHandler.createResponse("Product Created",productService.create(product), HttpStatus.CREATED);
    }

    @GetMapping("/index")
    public ResponseEntity<Object> fetchAll()
    {
        return GlobalResponseHandler.createResponse("All Fetched",productService.index(),HttpStatus.OK);
    }


}
