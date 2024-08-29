package com.thorabh.springbootdemo.repository;

import com.thorabh.springbootdemo.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Long> {
}
