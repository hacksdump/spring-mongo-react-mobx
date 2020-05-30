package com.hacksdump.demos.spring.mongo.rest.errors;

import org.springframework.http.HttpStatus;

import java.util.ArrayList;

public class MissingFieldsError extends BaseError{
    private ArrayList<String> missingFields;
    public MissingFieldsError() {
        super("Fields missing or empty", HttpStatus.BAD_REQUEST);
        missingFields = new ArrayList<String>();
    }
    public MissingFieldsError(ArrayList<String> missingFields) {
        this();
        this.missingFields = missingFields;
    }
    public void addMissingFieldName(String fieldName) {
        missingFields.add(fieldName);
    }

    public void setMissingFields(ArrayList<String> fieldNames) {
        missingFields = fieldNames;
    }

    public ArrayList<String> getMissingFields() {
        return this.missingFields;
    }
}
