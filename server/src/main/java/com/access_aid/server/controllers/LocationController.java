package com.access_aid.server.controllers;

import com.access_aid.server.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.text.html.parser.Entity;

@RestController
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @GetMapping(value = "/locations")
    public ResponseEntity getAllLocations{
        return List<Location> locationRepository.findAll();
    }
}
