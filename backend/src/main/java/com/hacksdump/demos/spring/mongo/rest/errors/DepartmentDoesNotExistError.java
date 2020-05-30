package com.hacksdump.demos.spring.mongo.rest.errors;

import org.springframework.http.HttpStatus;

public class DepartmentDoesNotExistError extends BaseError {
    public DepartmentDoesNotExistError() {
        super("A department with this ID does not exist", HttpStatus.BAD_REQUEST);
    }
}
