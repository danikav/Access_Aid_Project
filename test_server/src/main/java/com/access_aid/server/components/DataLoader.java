package com.access_aid.server.components;

import com.access_aid.server.models.Location;
import com.access_aid.server.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.net.MalformedURLException;
import java.net.URL;


@Component
public class DataLoader implements ApplicationRunner{

    @Autowired
    LocationRepository locationRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) throws MalformedURLException {

        URL url1 = new URL("https://st.depositphotos.com/2777531/4560/v/950/depositphotos_45605647-stock-illustration-coffee-booth.jpg");
        Location location1 = new Location("The Coffee Stand", "grab-and-go coffee shack", url1, 55.9533, 3.1883, "A pop-up coffee shop located on Princes Street", false, 5, 2, 4, 4, 2, "So glad I discovered this place");
        locationRepository.save(location1);

        URL url2 = new URL("https://i.pinimg.com/originals/b2/7a/e9/b27ae9ff32805318f2328e90e3b124cd.jpg");
        Location location2 = new Location("Cafe Cockburn", "Locally owned sit-down cafe", url2, 55.9533, 3.1883, "A sit in coffee shop found of Cockburn street", true, 2, 4, 3, 2, 5, "Really enjoyed myself");
        locationRepository.save(location2);

        URL url3 = new URL("http://3.bp.blogspot.com/-26lHOAUoxJ8/VASuXyWwkdI/AAAAAAAAFps/8s3BwZrALdQ/s1600/panama-hotel-tea-and-coffee-house-03162014.gif");
        Location location3 = new Location("CostaBucks", "chain coffee shop", url3, 55.9533, 3.1883, "An upmarket coffee shop found on the Royal Mile", true, 5, 1, 3, 3, 2,"The coffee wasn't great");
        locationRepository.save(location3);

    }

 }
