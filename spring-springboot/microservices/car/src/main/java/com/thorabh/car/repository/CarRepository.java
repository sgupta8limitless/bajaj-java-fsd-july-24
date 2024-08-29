package com.thorabh.car.repository;

import com.thorabh.car.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepository extends JpaRepository<Car,Long> {

    List<Car> findByBrandId(Long brandId);

}
