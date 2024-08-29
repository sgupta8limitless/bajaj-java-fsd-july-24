package com.thorabh.car.service;

import com.thorabh.car.entity.Car;
import com.thorabh.car.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {


    @Autowired
    CarRepository carRepository;

    public List<Car> fetchAllCars()
    {
        return carRepository.findAll();
    }

    public Car fetchSingleCar(Long id)
    {
        return carRepository.findById(id).get();
    }

    public Car createCar(Car car)
    {
        return carRepository.save(car);
    }

    public List<Car> fetchCarsByBrand(Long brandId)
    {
        return carRepository.findByBrandId(brandId);
    }

}
