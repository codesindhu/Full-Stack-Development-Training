package com.example.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Students;
import com.example.service.StudentService;


@RestController
@CrossOrigin("*")
public class StudentController {
	@Autowired
	private StudentService service;
	@GetMapping("/students")
	public List<Students> getStudents(){
			return service.getAllStudents();
	}

}
