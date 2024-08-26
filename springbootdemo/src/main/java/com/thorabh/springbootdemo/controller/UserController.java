package com.thorabh.springbootdemo.controller;

import com.thorabh.springbootdemo.entity.User;
import com.thorabh.springbootdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers()
    {
        return userService.index();
    }

    @GetMapping("/users/{id}")
    public User getAllUsers(@PathVariable Long id)
    {
        return userService.find(id);
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user)
    {
        return userService.create(user);
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable Long id)
    {
        return userService.delete(id);
    }

    @PutMapping("/users/{id}")
    public Object updateUser(@RequestBody User user,@PathVariable Long id)
    {
        return userService.update(id,user);
    }








}
