package com.hacksdump.demos.spring.mongo.rest.controllers;

import com.hacksdump.demos.spring.mongo.rest.errors.AlreadyExistsError;
import com.hacksdump.demos.spring.mongo.rest.errors.DepartmentDoesNotExistError;
import com.hacksdump.demos.spring.mongo.rest.errors.MissingFieldsError;
import com.hacksdump.demos.spring.mongo.rest.exceptions.DepartmentDoesNotExistException;
import com.hacksdump.demos.spring.mongo.rest.repository.Department;
import com.hacksdump.demos.spring.mongo.rest.repository.DepartmentRepository;
import com.hacksdump.demos.spring.mongo.rest.repository.Employee;
import com.hacksdump.demos.spring.mongo.rest.repository.EmployeeRepository;
import com.mongodb.MongoWriteException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Collection;
import java.util.Optional;

@Controller
public class EmployeeController {
    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;

    public EmployeeController(EmployeeRepository employeeRepository, DepartmentRepository departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
    }

    @RequestMapping(value = "employee", method = RequestMethod.POST)
    public @ResponseBody
    Employee create(@RequestBody @Valid Employee employee, HttpServletResponse resp) {
        Optional<Department> department = departmentRepository.findById(employee.getDepartment().getId());
        if (department.isPresent()) {
            employee.setDepartment(department.get());
            return employeeRepository.save(employee);
        } else {
            throw new DepartmentDoesNotExistException();
        }
    }

    @RequestMapping(value = "employee", method = RequestMethod.GET)
    public @ResponseBody
    Collection<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @ExceptionHandler(DepartmentDoesNotExistException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    public @ResponseBody
    DepartmentDoesNotExistError handleDepartmentDoesNotExistException(
            DepartmentDoesNotExistException e, HttpServletResponse resp) {
        resp.setStatus(e.getStatusCode().value());
        return new DepartmentDoesNotExistError();
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    public @ResponseBody
    MissingFieldsError handleMissingValues(MethodArgumentNotValidException e) {
        var missingFieldsError = new MissingFieldsError();
        for (var fieldError : e.getBindingResult().getFieldErrors()) {
            String missingField = fieldError.getField();
            if(fieldError.getCode().equals("NotNull")) {
                missingFieldsError.addMissingFieldName(missingField);
            }
        }
        return missingFieldsError;
    }

    @ExceptionHandler(DuplicateKeyException.class)
    @ResponseStatus(value = HttpStatus.CONFLICT)
    public @ResponseBody
    AlreadyExistsError handleDuplicateEntry(DuplicateKeyException e) {
        e.printStackTrace();
        return new AlreadyExistsError("This employee already exists");
    }
}
