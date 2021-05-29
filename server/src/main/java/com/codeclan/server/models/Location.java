package com.codeclan.server.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "locations")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "image")
    private Icon picture;

    @Column(name = "longitude")
    private int longitude;

    @Column(name = "latitude")
    private int latitude;

    @Column(name = "description")
    private String description;

    @Column(name = "seating")
    private boolean seating;

    @Column(name = "high_light_score")
    private int high_light_score;

    @Column(name = "low_noise_score")
    private int low_noise_score;

    @Column(name = "adequate_space")
    private int adequate_space;

    @Column(name = "mobility_access")
    private int mobility_access;

    @Column(name = "staff_support")
    private int staff_support;

    @Column(name = "total_score")
    private int total_score;

    @Column(name = "user_reviews")
    private ArrayList <String> user_reviews;

    @JsonIgnoreProperties({"location"})
    @OneToMany(mappedBy = "location", fetch = FetchType.LAZY)
    private List<User> users;

    public Location(String name, String type, Icon picture, int longitude, int latitude, String description, boolean seating, int high_light_score, int low_noise_score, int adequate_space, int mobility_access, int staff_support, int total_score, ArrayList <String> user_reviews) {
        this.name = name;
        this.type = type;
        this.picture = picture;
        this.longitude = longitude;
        this.latitude = latitude;
        this.description = description;
        this.seating = seating;
        this.high_light_score = high_light_score;
        this.low_noise_score = low_noise_score;
        this.adequate_space = adequate_space;
        this.mobility_access = mobility_access;
        this.staff_support = staff_support;
        this.total_score = total_score;
        this.user_reviews = user_reviews;
        this.users = new ArrayList<>();

    }

    public Location() {
    }
}
