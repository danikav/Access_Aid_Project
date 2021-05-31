package com.access_aid.server.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.imageio.ImageIO;
import javax.persistence.*;
import javax.swing.*;
import java.awt.*;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import static java.lang.Integer.sum;

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
    private URL picture;

    @Column(name = "longitude")
    private double longitude;

    @Column(name = "latitude")
    private double latitude;

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
    private String user_reviews;

//    @JsonIgnoreProperties({"location"})
//    @OneToMany(mappedBy = "location", fetch = FetchType.LAZY)
//    private List<User> users;

    public Location(String name, String type, URL picture, double longitude, double latitude, String description, boolean seating, int high_light_score, int low_noise_score, int adequate_space, int mobility_access, int staff_support, int total_score, String user_reviews) {
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
//        this.users = new ArrayList<>();

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public URL getPicture() {
        return picture;
    }

    public void setPicture(URL picture) {
        this.picture = picture;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isSeating() {
        return seating;
    }

    public void setSeating(boolean seating) {
        this.seating = seating;
    }

    public int getHigh_light_score() {
        return high_light_score;
    }

    public void setHigh_light_score(int high_light_score) {
        this.high_light_score = high_light_score;
    }

    public int getLow_noise_score() {
        return low_noise_score;
    }

    public void setLow_noise_score(int low_noise_score) {
        this.low_noise_score = low_noise_score;
    }

    public int getAdequate_space() {
        return adequate_space;
    }

    public void setAdequate_space(int adequate_space) {
        this.adequate_space = adequate_space;
    }

    public int getMobility_access() {
        return mobility_access;
    }

    public void setMobility_access(int mobility_access) {
        this.mobility_access = mobility_access;
    }

    public int getStaff_support() {
        return staff_support;
    }

    public void setStaff_support(int staff_support) {
        this.staff_support = staff_support;
    }

    public int getTotal_score() {
        return total_score;
    }

    public void setTotal_score(int total_score) {
        this.total_score = total_score;
    }

    public String getUser_reviews() {
        return user_reviews;
    }

    public void setUser_reviews(String user_reviews) {
        this.user_reviews = user_reviews;
    }
}
