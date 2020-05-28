package com.hacksdump.demos.spring.mongo.rest.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository extends MongoRepository<Employee, String> {
}
