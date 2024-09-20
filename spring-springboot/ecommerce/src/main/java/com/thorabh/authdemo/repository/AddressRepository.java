package com.thorabh.authdemo.repository;

import com.thorabh.authdemo.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Long> {
}
