package com.hacksdump.demos.spring.mongo.rest;

import com.hacksdump.demos.spring.mongo.rest.repository.Employee;
import com.hacksdump.demos.spring.mongo.rest.repository.EmployeeRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Controller
public class EmployeeController {
    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
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
