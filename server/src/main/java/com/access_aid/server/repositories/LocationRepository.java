package com.access_aid.server.repositories;

import com.access_aid.server.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Long>{

    List<Location> findAll();
}
