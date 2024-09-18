package com.thorabh.springbootdemo.controller;

import com.thorabh.springbootdemo.beans.GlobalResponseHandler;
import com.thorabh.springbootdemo.entity.User;
import com.thorabh.springbootdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("")
    public ResponseEntity<Object> getAllUsers()
    {

        return GlobalResponseHandler.createResponse("Users Found",userService.index(),HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getAllUsers(@PathVariable Long id)
    {
        return GlobalResponseHandler.createResponse("User Found",userService.find(id),HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Object> createUser(@RequestBody User user)
    {
        return GlobalResponseHandler.createResponse("User Created",userService.create(user),HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable Long id)
    {
        return GlobalResponseHandler.createResponse("User Deleted",userService.delete(id),HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateUser(@RequestBody User user,@PathVariable Long id)
    {
        return GlobalResponseHandler.createResponse("User Updated",userService.update(id,user),HttpStatus.OK);

    }








}
