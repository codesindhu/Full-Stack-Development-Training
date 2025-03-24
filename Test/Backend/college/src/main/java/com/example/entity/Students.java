package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Students {
	@Id
	private Integer id;
	private String name;
	private String course;
	private int phone_no;
	private String email;
	private String gender;
	@Override
	public String toString() {
		return "Students [id=" + id + ", name=" + name + ", course=" + course + ", phone_no=" + phone_no + ", email="
				+ email + ", gender=" + gender + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public int getPhone_no() {
		return phone_no;
	}
	public void setPhone_no(int phone_no) {
		this.phone_no = phone_no;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Students(int id, String name, String course, int phone_no, String email, String gender) {
		super();
		this.id = id;
		this.name = name;
		this.course = course;
		this.phone_no = phone_no;
		this.email = email;
		this.gender = gender;
	}
	public Students() {
		super();
		// TODO Auto-generated constructor stub
	}
}
