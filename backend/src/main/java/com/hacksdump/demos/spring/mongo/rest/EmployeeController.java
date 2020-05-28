package com.hacksdump.demos.spring.mongo.rest;

import com.hacksdump.demos.spring.mongo.rest.repository.Employee;
import com.hacksdump.demos.spring.mongo.rest.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Controller
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @RequestMapping(value = "hello", method = RequestMethod.GET)
    public @ResponseBody
    String sayHello() {
        return "Hello";
    }

    @RequestMapping(value = "employee", method = RequestMethod.POST)
    public @ResponseBody
    Employee create(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @RequestMapping(value = "employee", method = RequestMethod.GET)
    public @ResponseBody
    Collection<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
