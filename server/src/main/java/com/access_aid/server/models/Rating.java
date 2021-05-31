package com.access_aid.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="ratings")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JsonIgnoreProperties({"ratings"})
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;

    @ManyToOne
    @JsonIgnoreProperties({"ratings"})
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Rating(String date, String description, Location location, User user) {
        this.date = date;
        this.description = description;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
