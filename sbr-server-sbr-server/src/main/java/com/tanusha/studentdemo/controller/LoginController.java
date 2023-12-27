package com.tanusha.studentdemo.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tanusha.studentdemo.model.Login;
import com.tanusha.studentdemo.service.LoginService;




@RestController
@RequestMapping("/Login")
@CrossOrigin(origins = "http://localhost:3000/")
public class LoginController {

    @Autowired
    private LoginService loginService;
    @GetMapping("/{username}/{password}")
  public String Loginn(@PathVariable("username")String username,@PathVariable("password")String password)
    {
        
        Login login=loginService.Loginn(username,password);
        if(Objects.nonNull(login))
        {
            return "Login succesfull";
        }
        else
        {
            return "Login Failed";
        }
    }
    
}
