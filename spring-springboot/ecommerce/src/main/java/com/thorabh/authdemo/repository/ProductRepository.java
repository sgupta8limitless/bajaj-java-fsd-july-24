package com.thorabh.authdemo.repository;

import com.thorabh.authdemo.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
