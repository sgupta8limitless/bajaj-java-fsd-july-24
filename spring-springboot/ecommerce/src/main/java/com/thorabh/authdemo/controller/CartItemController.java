package com.thorabh.authdemo.controller;

import com.thorabh.authdemo.beans.GlobalResponseHandler;
import com.thorabh.authdemo.entity.CartItem;
import com.thorabh.authdemo.entity.User;
import com.thorabh.authdemo.service.CartItemService;
import com.thorabh.authdemo.utils.SecurityUtils;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/cartitems")
public class CartItemController {

    @Autowired
    CartItemService cartItemService;

    @PostMapping("")
    public ResponseEntity<Object> addToCart(@RequestBody CartItem cartItem)
    {

        return GlobalResponseHandler.createResponse(
                "Added To Cart",
                cartItemService.create(cartItem),
                HttpStatus.CREATED

        );

    }


    @GetMapping("/user")
    public ResponseEntity<Object> fetchByUser()
    {
        return GlobalResponseHandler.createResponse(
                "Cart Products",
                cartItemService.findByUserId(),
                HttpStatus.OK
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateItem(@RequestBody CartItem cartItem,@PathVariable Long id)
    {
        return GlobalResponseHandler.createResponse(
                "Quantity Updated",
                cartItemService.update(cartItem,id),
                HttpStatus.OK
        );
    }

}
