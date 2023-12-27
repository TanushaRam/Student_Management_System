package com.tanusha.studentdemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tanusha.studentdemo.model.Login;
import com.tanusha.studentdemo.repository.LoginRepository;


@Service
public class LoginService {
     @Autowired
    private LoginRepository loginRepository;

    public Login Loginn(String username, String password) {

        Login login=loginRepository.findByUsernameAndPassword(username,password);
        return login;
    }
}