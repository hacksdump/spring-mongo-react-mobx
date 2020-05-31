package com.hacksdump.demos.spring.mongo.rest.controllers;

import com.hacksdump.demos.spring.mongo.rest.errors.MissingFieldsError;
import com.hacksdump.demos.spring.mongo.rest.repository.Department;
import com.hacksdump.demos.spring.mongo.rest.repository.DepartmentRepository;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
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
    Department create(@RequestBody @Valid Department department, HttpServletResponse resp) {
        Department alreadyExisting = departmentRepository.findDepartmentByName(department.getName());
        if (alreadyExisting == null) {
            resp.setStatus(HttpStatus.CREATED.value());
            return departmentRepository.save(department);
        } else {
            resp.setStatus(HttpStatus.CONFLICT.value());
            return alreadyExisting;
        }
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public @ResponseBody
    MissingFieldsError handleMissingValues(MethodArgumentNotValidException e) {
        var missingFieldsError = new MissingFieldsError();
        for (var fieldError : e.getBindingResult().getFieldErrors()) {
            String missingField = fieldError.getField();
            if (fieldError.getCode().equals("NotNull")) {
                missingFieldsError.addMissingFieldName(missingField);
            }
        }
        return missingFieldsError;
    }
}
