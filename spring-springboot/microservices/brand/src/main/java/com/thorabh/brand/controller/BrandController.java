package com.thorabh.brand.controller;

import com.thorabh.brand.entity.Brand;
import com.thorabh.brand.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/brands")
public class BrandController {

    @Autowired
    BrandService brandService;

    @GetMapping
    public List<Brand> fetchAllBrands()
    {
        return brandService.fetchAllBrands();
    }

    @GetMapping("/{id}")
    public Brand fetchSingleBrand(@PathVariable Long id)
    {
        return brandService.fetchSingleBrand(id);
    }

    @PostMapping
    public Brand createBrand(@RequestBody Brand brand)
    {
        return brandService.createBrand(brand);
    }


}
