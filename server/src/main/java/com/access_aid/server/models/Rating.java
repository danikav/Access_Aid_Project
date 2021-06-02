package com.access_aid.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name="ratings")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private LocalDate date;

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

    @ManyToOne
    @JsonIgnoreProperties({"ratings"})
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;

    @ManyToOne
    @JsonIgnoreProperties({"ratings"})
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Rating(LocalDate date, int high_light_score, int low_noise_score, int adequate_space, int mobility_access, int staff_support, String user_reviews, Location location, User user) {
        this.date = date;
        this.high_light_score = high_light_score;
        this.low_noise_score = low_noise_score;
        this.adequate_space = adequate_space;
        this.mobility_access = mobility_access;
        this.staff_support = staff_support;
        this.total_score = (high_light_score + low_noise_score + adequate_space + mobility_access + staff_support) / 5;
        this.user_reviews = user_reviews;
        this.location = location;
        this.user = user;
    }

    public Rating() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
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

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
