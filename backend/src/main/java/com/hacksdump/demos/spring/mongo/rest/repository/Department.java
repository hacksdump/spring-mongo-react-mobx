package com.hacksdump.demos.spring.mongo.rest.repository;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Department {
    @Id
    private String id;
    @Indexed(unique = true)
    private String name;

    public Department() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format("[ %s ]: %s", id, name);
    }
}
