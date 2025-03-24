package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Students;
import com.example.repo.StudentsRepo;

@Service
public class StudentService {
	@Autowired
	private StudentsRepo repo1;
	
	public List<Students> getAllStudents(){
		return repo1.findAll();
	}
	
}
	

