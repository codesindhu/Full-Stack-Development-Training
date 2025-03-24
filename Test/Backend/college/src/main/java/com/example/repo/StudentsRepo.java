package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.entity.Students;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentsRepo extends JpaRepository<Students, Integer> {
	
}