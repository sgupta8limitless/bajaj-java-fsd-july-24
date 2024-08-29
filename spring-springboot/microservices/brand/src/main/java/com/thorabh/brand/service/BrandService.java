package com.thorabh.brand.service;

import com.thorabh.brand.client.CarClient;
import com.thorabh.brand.dto.Car;
import com.thorabh.brand.entity.Brand;
import com.thorabh.brand.repository.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BrandService {

    @Autowired
    BrandRepository brandRepository;

    @Autowired
    CarClient carClient;

    public List<Brand> fetchAllBrands()
    {
        List<Brand> brands =  brandRepository.findAll();

        List<Brand> brandList = brands.stream().map(brand -> {

            List<Car> cars = carClient.fetchCarsByBrand(brand.getId());

            brand.setCarList(cars);

            return brand;

        }).collect(Collectors.toList());

        return brandList;

    }

    public Brand fetchSingleBrand(Long id)
    {
        return brandRepository.findById(id).get();
    }

    public Brand createBrand(Brand brand)
    {
        return brandRepository.save(brand);
    }

}
