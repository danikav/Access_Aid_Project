package com.codeclan.server.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
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

    @Column(name = "longitude")
    private int longitude;

    @Column(name = "latitude")
    private int latitude;

    @Column(name = "description")
    private String description;

    @Column(name = "seating")
    private boolean seating;

    @Column(name = "light_score")
    private int light_score;

    @JsonIgnoreProperties({"location"})
    @OneToMany(mappedBy = "location", fetch = FetchType.LAZY)
    private List<User> users;

    public Location(String name, String type, int longitude, int latitude, String description, boolean seating, int light_score) {
        this.name = name;
        this.type = type;
        this.longitude = longitude;
        this.latitude = latitude;
        this.description = description;
        this.seating = seating;
        this.light_score = light_score;

    }

    public Location() {
    }
}
