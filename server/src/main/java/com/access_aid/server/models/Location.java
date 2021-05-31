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

//    @Column(name = "image")
//    private ArrayList <Icon> picture;

//    @Column(name = "image")
//    private URL picture;

    @Column(name = "image")
    private Image picture;

    @Column(name = "longitude")
    private double longitude;

    @Column(name = "latitude")
    private double latitude;

    @Column(name = "description")
    private String description;

    @Column(name = "seating")
    private boolean seating;

    @Column(name = "high_light_score")
    private ArrayList <Integer> high_light_score;

    @Column(name = "low_noise_score")
    private ArrayList <Integer> low_noise_score;

    @Column(name = "adequate_space")
    private ArrayList <Integer> adequate_space;

    @Column(name = "mobility_access")
    private ArrayList <Integer> mobility_access;

    @Column(name = "staff_support")
    private ArrayList <Integer> staff_support;

    @Column(name = "total_score")
    private ArrayList <Integer> total_score;

    @Column(name = "user_reviews")
    private ArrayList <String> user_reviews;

//    @JsonIgnoreProperties({"location"})
//    @OneToMany(mappedBy = "location", fetch = FetchType.LAZY)
//    private List<User> users;

    public Location(String name, String type, Image picture, double longitude, double latitude, String description, boolean seating, ArrayList <Integer> high_light_score, ArrayList <Integer> low_noise_score, ArrayList <Integer> adequate_space, ArrayList <Integer> mobility_access, ArrayList <Integer> staff_support, ArrayList <Integer> total_score, ArrayList <String> user_reviews) {
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

    public Image getPicture() {
        return picture;
    }

    public void setPicture(Image picture) {
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

    public ArrayList<Integer> getHigh_light_score() {
        return high_light_score;
    }

    public void setHigh_light_score(ArrayList<Integer> high_light_score) {
        this.high_light_score = high_light_score;
    }

    public ArrayList<Integer> getLow_noise_score() {
        return low_noise_score;
    }

    public void setLow_noise_score(ArrayList<Integer> low_noise_score) {
        this.low_noise_score = low_noise_score;
    }

    public ArrayList<Integer> getAdequate_space() {
        return adequate_space;
    }

    public void setAdequate_space(ArrayList<Integer> adequate_space) {
        this.adequate_space = adequate_space;
    }

    public ArrayList<Integer> getMobility_access() {
        return mobility_access;
    }

    public void setMobility_access(ArrayList<Integer> mobility_access) {
        this.mobility_access = mobility_access;
    }

    public ArrayList<Integer> getStaff_support() {
        return staff_support;
    }

    public void setStaff_support(ArrayList<Integer> staff_support) {
        this.staff_support = staff_support;
    }

//    public ArrayList<Integer> getTotal_score() {
//        return total_score;
//    }
//
//    public void setTotal_score(ArrayList<Integer> total_score) {
//        this.total_score = total_score;
//    }

    public ArrayList<String> getUser_reviews() {
        return user_reviews;
    }

    public void setUser_reviews(ArrayList<String> user_reviews) {
        this.user_reviews = user_reviews;
    }

//    public List<User> getUsers() {
//        return users;
//    }
//
//    public void setUsers(List<User> users) {
//        this.users = users;
//    }
}
