package com.hacksdump.demos.spring.mongo.rest.repository;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.*;

@Document
public class Employee {
    @Id
    private String id;
    @NotNull
    private String name;
    @Indexed(unique = true)
    @NotNull
    @Min(10)
    private String phone;
    @NotNull
    private String address;
    @Indexed(unique = true)
    @Email
    @NotNull
    private String email;
    private Gender gender;
    @NotNull
    private Department department;

    public Employee() {
        gender = Gender.UNSPECIFIED;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return String.format("[ id: %s ]: %s %s %s %s %s", id, name, phone, address, gender, department);
    }
}
