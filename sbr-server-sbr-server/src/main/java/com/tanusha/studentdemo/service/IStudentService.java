package com.tanusha.studentdemo.service;

import java.util.List;

import com.tanusha.studentdemo.model.Student;


public interface IStudentService {
    Student addStudent(Student student);
    List<Student> getStudents();
    Student updateStudent(Student student, Long id);
    Student getStudentById(Long id);
    void deleteStudent(Long id);
}
