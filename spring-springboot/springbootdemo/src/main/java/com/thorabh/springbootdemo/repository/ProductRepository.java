package com.thorabh.springbootdemo.repository;

import com.thorabh.springbootdemo.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
