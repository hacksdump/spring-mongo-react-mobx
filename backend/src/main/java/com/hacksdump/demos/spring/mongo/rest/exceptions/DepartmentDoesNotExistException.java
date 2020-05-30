package com.hacksdump.demos.spring.mongo.rest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.client.HttpClientErrorException;

public class DepartmentDoesNotExistException extends HttpClientErrorException {
    public DepartmentDoesNotExistException() {
        super(HttpStatus.BAD_REQUEST);
    }
}
