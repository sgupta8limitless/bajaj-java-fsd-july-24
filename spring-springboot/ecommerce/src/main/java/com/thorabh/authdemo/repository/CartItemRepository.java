package com.thorabh.authdemo.repository;

import com.thorabh.authdemo.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {
}
