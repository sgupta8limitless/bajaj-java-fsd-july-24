package com.thorabh.springbootdemo.controller;

import com.thorabh.springbootdemo.beans.GlobalResponseHandler;
import com.thorabh.springbootdemo.entity.Address;
import com.thorabh.springbootdemo.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/addresses")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping("")
    public ResponseEntity<Object> createAddress(@RequestBody Address address)
    {
        Address savedAddress = addressService.create(address);
        return GlobalResponseHandler.createResponse("Address Added",savedAddress, HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<Object> findAll()
    {
        List<Address> addressList = addressService.index();
        return GlobalResponseHandler.createResponse("All Addresses",addressList,HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Object> findSingle()
//    {
//        List<Address> addressList = addressService.index();
//        return GlobalResponseHandler.createResponse("All Addresses",addressList,HttpStatus.OK);
//    }

}
