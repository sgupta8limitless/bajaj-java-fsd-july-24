package com.thorabh.springbootdemo;

import com.thorabh.springbootdemo.entity.Address;
import com.thorabh.springbootdemo.entity.User;
import com.thorabh.springbootdemo.repository.AddressRepository;
import com.thorabh.springbootdemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Optional;

@SpringBootApplication
public class SpringbootdemoApplication implements CommandLineRunner {

	@Autowired
	UserRepository userRepository;

	@Autowired
	AddressRepository addressRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringbootdemoApplication.class, args);
	}



	@Override
	public void run(String... args) throws Exception {


//		Creation

//		User user = new User("Harshada","harshada@gmail.com");
//
//		User savedUser = userRepository.save(user);
//
//		if(savedUser.getId()!=null)
//		{
//			System.out.println(savedUser);
//		}

//		fetch all data

//		List<User> users = userRepository.findAll();
//
//		users.forEach(user -> {
//			System.out.println(user);
//		} );

//		Update data

//	 	Optional<User> optionalUser =  userRepository.findById(1L);
//
//		 if(optionalUser.isPresent())
//		 {
//			 User user = optionalUser.get();
//			 user.setEmail("ish@gmail.com");
//			 userRepository.save(user);
//
//		 }
//		 else
//		 {
//			 System.out.println("user not found");
//		 }

//		delete ops


//		userRepository.deleteById(2L);

		Optional<User> userOptional = userRepository.findById(1L);

		if(userOptional.isPresent())
		{
			Address address = new Address();
			address.setLineOne("Seawoods Mall");
			address.setCity("New Mumbai");
			address.setPincode("41926");
			address.setUser(userOptional.get());

			addressRepository.save(address);
		}












	}
}
