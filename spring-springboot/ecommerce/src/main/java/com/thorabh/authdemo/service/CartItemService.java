package com.thorabh.authdemo.service;

import com.thorabh.authdemo.entity.CartItem;
import com.thorabh.authdemo.entity.User;
import com.thorabh.authdemo.exception.EntityNotFound;
import com.thorabh.authdemo.repository.CartItemRepository;
import com.thorabh.authdemo.repository.UserRepository;
import com.thorabh.authdemo.utils.SecurityUtils;
import org.hibernate.query.sqm.EntityTypeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
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


    public List<CartItem> findByUserId()
    {
        Long userid = SecurityUtils.getCurrentUserId();
        return cartItemRepository.findByUserId(userid);
    }

    public CartItem update(CartItem cartItem,Long id)
    {
        Optional<CartItem> cartItemOptional = cartItemRepository.findById(id);

        if(cartItemOptional.isPresent())
        {
            CartItem cartItemUpdate = cartItemOptional.get();

            cartItemUpdate.setQuantity(cartItem.getQuantity());

            return cartItemRepository.save(cartItemUpdate);

        }

        throw new EntityNotFound("This item is not in your cart");

    }





}
