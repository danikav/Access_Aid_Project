package com.access_aid.server.components;

import com.access_aid.server.models.Location;
import com.access_aid.server.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

@Component
public class DataLoader implements ApplicationRunner{

    @Autowired
    LocationRepository locationRepository;

    public DataLoader() throws IOException {

    }

    public void run(ApplicationArguments args) {

    }

    URL url1 = new URL("https://st.depositphotos.com/2777531/4560/v/950/depositphotos_45605647-stock-illustration-coffee-booth.jpg");
    Image image1 = ImageIO.read(url1);
//    ArrayList<Icon> images1 = new ArrayList<>();
    ArrayList<Integer> high_light1 = new ArrayList<>();
//    Integer integerhigh_light1 = 3;
    high_light1.add(3);
    ArrayList<Integer> low_noise1 = new ArrayList<>();
    high_light1.add(3);
    ArrayList<Integer> adequate_space1 = new ArrayList<>();
    high_light1.add(3);
    ArrayList<Integer> mobility_access1 = new ArrayList<>();
    high_light1.add(3);
    ArrayList<Integer> staff_support1 = new ArrayList<>();
    high_light1.add(3);
    ArrayList<Integer> total_score1 = new ArrayList<>();
    high_light1.add(3);


    Location location1 = new Location("A typical coffee shack", "grab-and-go cafe", image1,  55.9533, 3.1883, "A pop-up coffee shop located on Princes Street", false, high_light1, 4, 2, 1, 5, 15, "Really enjoyed myself");

    locationRepository.save(location1);
}
