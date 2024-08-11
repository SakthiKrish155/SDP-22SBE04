package com.springapp.sdpspring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springapp.sdpspring.model.User;
import com.springapp.sdpspring.repo.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    public List<User> getUsers(){
        return repo.findAll();
    }
    public User addUser(User user){
        return repo.save(user);
    }

    


    
}
