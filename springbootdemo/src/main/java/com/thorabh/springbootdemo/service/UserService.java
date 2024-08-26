package com.thorabh.springbootdemo.service;

import com.thorabh.springbootdemo.entity.User;
import com.thorabh.springbootdemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User create(User user)
    {
       return userRepository.save(user);

    }

    public List<User> index()
    {
        return userRepository.findAll();
    }

    public User find(Long id)
    {
        return userRepository.findById(id).get();
    }

    public String delete(Long id)
    {
        userRepository.deleteById(id);
        return "Deleted";
    }

    public Object update(Long id,User user)
    {
        Optional<User> userOptional = userRepository.findById(id);

        if(userOptional.isPresent())
        {
            User updateUser = userOptional.get();

            updateUser.setName(user.getName());
            updateUser.setEmail(user.getEmail());

            return userRepository.save(updateUser);
        }

        return "Not Found";



    }



}
