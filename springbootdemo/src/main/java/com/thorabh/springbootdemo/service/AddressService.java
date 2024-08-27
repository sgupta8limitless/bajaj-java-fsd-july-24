package com.thorabh.springbootdemo.service;

import com.thorabh.springbootdemo.entity.Address;
import com.thorabh.springbootdemo.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public Address create(Address address)
    {
        return addressRepository.save(address);
    }

    public List<Address> index()
    {
        return addressRepository.findAll();
    }

}
