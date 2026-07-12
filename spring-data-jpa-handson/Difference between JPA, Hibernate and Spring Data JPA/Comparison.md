# Difference between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)

- JPA stands for Java Persistence API.
- It is a Java specification (JSR 338) for Object Relational Mapping (ORM).
- It defines standard interfaces for persisting Java objects into relational databases.
- JPA itself is not an implementation.
- It requires an implementation such as Hibernate.

---

## Hibernate

- Hibernate is one of the most popular implementations of JPA.
- It is an ORM framework.
- It converts Java objects into database tables.
- It provides Session, Transaction, Query and other database management features.
- It requires more boilerplate code than Spring Data JPA.

---

## Spring Data JPA

- Spring Data JPA is built on top of JPA.
- It reduces boilerplate code significantly.
- It automatically generates CRUD methods.
- It manages transactions using @Transactional.
- It integrates seamlessly with Spring Boot.
- It commonly uses Hibernate as the JPA implementation.

---

## Relationship

Spring Data JPA
        ↓
       JPA
        ↓
   Hibernate
        ↓
    MySQL Database