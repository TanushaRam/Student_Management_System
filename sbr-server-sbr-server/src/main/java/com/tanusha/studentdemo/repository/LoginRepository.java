package com.tanusha.studentdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tanusha.studentdemo.model.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Long>{

    public Login findByUsernameAndPassword(String username,String password);
   
} 
