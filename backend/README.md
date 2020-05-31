# Getting Started

Mongo server must be running.

Optional Environment Variables with default values:

* MONGODB_HOST=localhost
* MONGODB_PORT=271017
* MONGODB_DATABASE=test

Easy run

```shell script
./gradlew run
```

Build with tests

```shell script
./gradlew build
```

Build and run jar

```shell script
./gradlew bootJar
java -jar build/libs/rest-<version>-SNAPSHOT.jar
```
