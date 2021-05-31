package com.access_aid.server.controllers;

import com.access_aid.server.models.Rating;
import com.access_aid.server.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class RatingController {

    @Autowired
    RatingRepository ratingRepository;

    @GetMapping(value = "/ratings")
    public ResponseEntity <List<Rating>> getAllRatings(){
        return new ResponseEntity<>(ratingRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/ratings/{id}")
    public ResponseEntity<Optional<Rating>> getRating(@PathVariable Long id){
        return new ResponseEntity<>(ratingRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/locations")
    public ResponseEntity<Rating> postRating(@RequestBody Rating rating){
        ratingRepository.save(rating);
        return new ResponseEntity<>(rating, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/locations/{id}")
    public ResponseEntity<Long> deleteRatingById(@PathVariable Long id){
        ratingRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.GONE);
    }
}
