package com.hacksdump.demos.spring.mongo.rest.errors;

import org.springframework.http.HttpStatus;

public class AlreadyExistsError extends BaseError {
    public AlreadyExistsError(String msg) {
        super(msg, HttpStatus.CONFLICT);
    }
}
