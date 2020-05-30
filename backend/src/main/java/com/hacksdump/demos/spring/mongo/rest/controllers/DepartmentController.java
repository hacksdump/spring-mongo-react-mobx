package com.hacksdump.demos.spring.mongo.rest.controllers;

import com.hacksdump.demos.spring.mongo.rest.repository.Department;
import com.hacksdump.demos.spring.mongo.rest.repository.DepartmentRepository;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Collection;

@Controller
public class DepartmentController {
    final
    DepartmentRepository departmentRepository;

    public DepartmentController(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @RequestMapping(value = "department", method = RequestMethod.GET)
    public @ResponseBody
    Collection<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    @RequestMapping(value = "department", method = RequestMethod.POST)
    public @ResponseBody
    Department create(@RequestBody Department department, HttpServletResponse resp) {
        try {
            resp.setStatus(HttpStatus.CREATED.value());
            return departmentRepository.save(department);
        } catch (DuplicateKeyException e) {
            resp.setStatus(HttpStatus.CONFLICT.value());
            return departmentRepository.findDepartmentByName(department.getName());
        }
    }
}
