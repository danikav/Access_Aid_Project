package com.access_aid.server.components;

import com.access_aid.server.models.Location;
import com.access_aid.server.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;

@Component
public class DataLoader implements ApplicationRunner{

    @Autowired
    LocationRepository locationRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) throws IOException {

        URL url1 = new URL("https://st.depositphotos.com/2777531/4560/v/950/depositphotos_45605647-stock-illustration-coffee-booth.jpg");
        ArrayList<Integer> hl1 = new ArrayList<>();
        hl1.add(5);
        ArrayList<Integer> ln1 = new ArrayList<>();
        ln1.add(2);
        ArrayList<Integer> as1 = new ArrayList<>();
        as1.add(4);
        ArrayList<Integer> mb1 = new ArrayList<>();
        mb1.add(4);
        ArrayList<Integer> ss1 = new ArrayList<>();
        ss1.add(2);
        ArrayList<String> ur1 = new ArrayList<>();
        ur1.add("So glad I discovered this place");
//        Image image1 = ImageIO.read(url1);
//        Removed: url1, image1

        Location location1 = new Location("The Coffee Stand", "grab-and-go coffee shack", url1, 55.951984, -3.197184, "A pop-up coffee shop located on Princes Street", false, hl1, ln1, as1, mb1, ss1, ur1);
        locationRepository.save(location1);

        URL url2 = new URL("https://i.pinimg.com/originals/b2/7a/e9/b27ae9ff32805318f2328e90e3b124cd.jpg");
        ArrayList<Integer> hl2 = new ArrayList<>();
        hl2.add(2);
        ArrayList<Integer> ln2 = new ArrayList<>();
        ln2.add(4);
        ArrayList<Integer> as2 = new ArrayList<>();
        as2.add(3);
        ArrayList<Integer> mb2 = new ArrayList<>();
        mb2.add(2);
        ArrayList<Integer> ss2 = new ArrayList<>();
        ss2.add(5);
        ArrayList<String> ur2 = new ArrayList<>();
        ur2.add("Really enjoyed myself");
//        Image image2 = ImageIO.read(url2);
//        Removed: url2, image2

        Location location2 = new Location("Cafe Cockburn", "Locally owned sit-down cafe", url2, 55.950598, -3.190279, "A sit in coffee shop found of Cockburn street", true, hl2, ln2, as2, mb2, ss2, ur2);
        locationRepository.save(location2);

        URL url3 = new URL("http://3.bp.blogspot.com/-26lHOAUoxJ8/VASuXyWwkdI/AAAAAAAAFps/8s3BwZrALdQ/s1600/panama-hotel-tea-and-coffee-house-03162014.gif");
        ArrayList<Integer> hl3 = new ArrayList<>();
        hl3.add(5);
        ArrayList<Integer> ln3 = new ArrayList<>();
        ln3.add(1);
        ArrayList<Integer> as3 = new ArrayList<>();
        as3.add(3);
        ArrayList<Integer> mb3 = new ArrayList<>();
        mb3.add(3);
        ArrayList<Integer> ss3 = new ArrayList<>();
        ss3.add(2);
        ArrayList<String> ur3 = new ArrayList<>();
        ur3.add("The coffee wasn't great");
//        Image image3 = ImageIO.read(url3);
//        Removed: url3, image3
        Location location3 = new Location("CostaBucks", "chain coffee shop", url3, 55.950398, -3.186646, "An upmarket coffee shop found on the Royal Mile", true, hl3, ln3, as3, mb3, ss3, ur3);
        locationRepository.save(location3);
    }

}
