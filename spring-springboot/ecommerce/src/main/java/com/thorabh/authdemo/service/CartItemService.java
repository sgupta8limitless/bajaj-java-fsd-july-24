package com.thorabh.authdemo.service;

import com.thorabh.authdemo.entity.CartItem;
import com.thorabh.authdemo.entity.User;
import com.thorabh.authdemo.exception.EntityNotFound;
import com.thorabh.authdemo.repository.CartItemRepository;
import com.thorabh.authdemo.repository.UserRepository;
import com.thorabh.authdemo.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartItemService {

    @Autowired
    CartItemRepository  cartItemRepository;

    @Autowired
    UserRepository userRepository;


    public CartItem create(CartItem cartItem)
    {

        Long userid = SecurityUtils.getCurrentUserId();

        Optional<User> userOptional = userRepository.findById(userid);

        if(userOptional.isPresent())
        {
            cartItem.setUser(userOptional.get());
            return cartItemRepository.save(cartItem);
        }

        throw new EntityNotFound("The User Doesnt exist");



    }


}
