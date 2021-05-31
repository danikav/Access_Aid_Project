package com.access_aid.server.controllers;

import com.access_aid.server.models.Location;
import com.access_aid.server.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

//
    @GetMapping(value = "/locations")
    public ResponseEntity <List<Location>> getAllLocations(){
        return new ResponseEntity<>(locationRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/locations/{id}")
    public ResponseEntity<Optional<Location>> getLocation(@PathVariable Long id){
        return new ResponseEntity<>(locationRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/locations")
    public ResponseEntity<Location> postLocation(@RequestBody Location location){
        locationRepository.save(location);
        return new ResponseEntity<>(location, HttpStatus.CREATED);
    }

//  May not be needed
//    @DeleteMapping(value = "/locations/delete")
//    public ResponseEntity<Location> deleteLocation(@RequestBody Location location){
//        locationRepository.delete(location);
//        return new ResponseEntity<>(location, HttpStatus.GONE);
//    }

    @DeleteMapping(value = "/locations/{id}")
    public ResponseEntity<Long> deleteLocationById(@PathVariable Long id){
        locationRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.GONE);
    }

}
