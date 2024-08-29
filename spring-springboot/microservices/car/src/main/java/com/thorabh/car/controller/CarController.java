package com.thorabh.car.controller;

import com.thorabh.car.entity.Car;
import com.thorabh.car.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    CarService carService;

    @GetMapping
    public List<Car> fetchAllCars()
    {
        return carService.fetchAllCars();
    }

    @GetMapping("/{id}")
    public Car fetchSingleCar(@PathVariable Long id)
    {
        return carService.fetchSingleCar(id);
    }

    @GetMapping("/brand/{brandId}")
    public List<Car> fetchCarsByBrand(@PathVariable Long brandId)
    {
        return carService.fetchCarsByBrand(brandId);
    }


    @PostMapping
    public Car createBrand(@RequestBody Car car)
    {
        return carService.createCar(car);
    }


}
