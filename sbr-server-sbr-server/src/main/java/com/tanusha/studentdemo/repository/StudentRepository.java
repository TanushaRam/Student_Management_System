package com.tanusha.studentdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tanusha.studentdemo.model.Student;

import java.util.Optional;


public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByEmail(String email);
}
