package com.access_aid.server.repositories;

import com.access_aid.server.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long>{

//    Pre-set generic CRUD operations for use in controller (Auto with JpaRepo)

//    SAVE/UPDATE
//    <S extends T> S save(S entity);
//    NB. CrudRepository has only save but it acts as update as well if used on taken ID

//    INDEX
//    T findOne(ID primaryKey);
//
//    GET
//    Iterable<T> findAll();
//
//    Find length of
//    Long count();
//
//    DELETE
//    void delete(T entity);
//
//    Exists? True/False check
//    boolean exists(ID primaryKey);

}
