package com.thorabh.springbootdemo;

import com.thorabh.springbootdemo.entity.Address;
import com.thorabh.springbootdemo.entity.User;
import com.thorabh.springbootdemo.repository.AddressRepository;
import com.thorabh.springbootdemo.repository.UserRepository;
import com.thorabh.springbootdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


//please implement commandlinerunner if you want to execute below code

@SpringBootApplication
public class SpringbootdemoApplication  {

//	@Autowired
//	UserService userService;

//	@Autowired
//	UserRepository userRepository;
//
//	@Autowired
//	AddressRepository addressRepository;



	public static void main(String[] args) {
		SpringApplication.run(SpringbootdemoApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//
//		User user = new User("Sachin","sachin@gmail.com");
////		userService.create(user);
//
//		Address address = new Address("Viman nagar","Pune","677898");
//		address.setUser(user);
//
//		user.getAddressList().add(address);
//
//		userRepository.save(user);
//
//
//	}
}
