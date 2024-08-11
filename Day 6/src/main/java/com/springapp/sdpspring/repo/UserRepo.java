package com.springapp.sdpspring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.sdpspring.model.User;

public interface UserRepo extends JpaRepository<User,Long> {
    
}
