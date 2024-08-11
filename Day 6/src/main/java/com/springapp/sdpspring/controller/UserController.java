package com.springapp.sdpspring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.sdpspring.model.User;
import com.springapp.sdpspring.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/all")
    public List<User> getUsers(){
        return service.getUsers();
    }

    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        return service.addUser(user);
    }

    
}
