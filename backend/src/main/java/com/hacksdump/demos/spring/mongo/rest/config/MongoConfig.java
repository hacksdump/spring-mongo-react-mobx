package com.hacksdump.demos.spring.mongo.rest.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

@Configuration
public class MongoConfig extends AbstractMongoClientConfiguration {
    private final String host;
    private final String port;
    private final String database;

    public MongoConfig(Environment env) {
        String hostKey = "MONGODB_HOST";
        host = env.getProperty(hostKey, "localhost");
        String portKey = "MONGODB_PORT";
        port = env.getProperty(portKey, "27017");
        String dbKey = "MONGODB_DATABASE";
        database = env.getProperty(dbKey, "test");
    }

    @Override
    public MongoClient mongoClient() {
        return MongoClients.create("mongodb://" + host + ":" + port);
    }

    @Override
    protected String getDatabaseName() {
        return database;
    }

    @Override
    protected boolean autoIndexCreation() {
        return true;
    }
}
