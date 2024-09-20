package com.thorabh.authdemo.controller;

import com.thorabh.authdemo.beans.GlobalExceptionHandler;
import com.thorabh.authdemo.beans.GlobalResponseHandler;
import com.thorabh.authdemo.entity.User;
import com.thorabh.authdemo.service.UserService;
import com.thorabh.authdemo.utils.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;



    @PostMapping("/register")
    public ResponseEntity<Object> create(@RequestBody User user)
    {
        return GlobalResponseHandler.createResponse("User Created",userService.createUser(user), HttpStatus.CREATED);

    }

    @PostMapping("/login")
    public String login(@RequestBody User authRequest)
    {
        Authentication authentication =  authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(),authRequest.getPassword())
        );

        if(authentication.isAuthenticated())
        {
            return jwtService.generateToken(authRequest.getUsername());
        }
        else
        {
            return "Something wrong";
        }
    }


    @GetMapping("/home")
    public String handleWelcome() {
        return "Welcome to home!";
    }

    @GetMapping("/admin/home")
    public String handleAdminHome() {
        return "Welcome to ADMIN home!";
    }

    @GetMapping("/user/home")
    public String handleUserHome() {
        return "Welcome to USER home!";
    }


}
