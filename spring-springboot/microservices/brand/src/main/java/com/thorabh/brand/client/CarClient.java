package com.thorabh.brand.client;

import com.thorabh.brand.dto.Car;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(url = "http://localhost:8081/cars",name = "Car-Client")
public interface CarClient {

    @GetMapping("/brand/{brandId}")
    public List<Car> fetchCarsByBrand(@PathVariable Long brandId);


}
