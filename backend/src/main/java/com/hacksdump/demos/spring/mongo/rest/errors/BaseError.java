package com.hacksdump.demos.spring.mongo.rest.errors;

import org.springframework.http.HttpStatus;

public class BaseError {
    private final String message;
    private final boolean error;
    private HttpStatus status;

    public BaseError(String message, HttpStatus status) {
        this.message = message;
        this.status = status;
        this.error = true;
    }

    public String getMessage() {
        return message;
    }

    public boolean getError() {
        return error;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
