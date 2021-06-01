package com.access_aid.server.components;

import com.access_aid.server.models.Location;
import com.access_aid.server.models.Rating;
import com.access_aid.server.models.User;
import com.access_aid.server.repositories.LocationRepository;
import com.access_aid.server.repositories.RatingRepository;
import com.access_aid.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URL;

@Component
public class DataLoader implements ApplicationRunner{

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RatingRepository ratingRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) throws IOException {

        URL url1 = new URL("https://st.depositphotos.com/2777531/4560/v/950/depositphotos_45605647-stock-illustration-coffee-booth.jpg");
//        Image image1 = ImageIO.read(url1);
        Location location1 = new Location("The Coffee Stand", "grab-and-go coffee shack", url1, 55.951984, -3.197184, "A pop-up coffee shop located on Princes Street", false);
        locationRepository.save(location1);

        URL url2 = new URL("https://i.pinimg.com/originals/b2/7a/e9/b27ae9ff32805318f2328e90e3b124cd.jpg");
        Location location2 = new Location("Cafe Cockburn", "Locally owned sit-down cafe", url2, 55.950598, -3.190279, "A sit in coffee shop found of Cockburn street", true);
        locationRepository.save(location2);

        URL url3 = new URL("http://3.bp.blogspot.com/-26lHOAUoxJ8/VASuXyWwkdI/AAAAAAAAFps/8s3BwZrALdQ/s1600/panama-hotel-tea-and-coffee-house-03162014.gif");
        Location location3 = new Location("CostaBucks, Royal Mile", "chain coffee shop", url3, 55.950398, -3.186646, "An upmarket coffee shop found on the Royal Mile", true);
        locationRepository.save(location3);

        URL url4 = new URL("https://i.pinimg.com/564x/c4/19/dd/c419dda9ebd9676d7235fa56ae41f79f.jpg");
        Location location4 = new Location("Topped Off", "Locally owned sit-down cafe", url4, 55.932928, -3.137025, "A more down to Earth cafe located in Craigmillar", true);
        locationRepository.save(location4);

        URL url5 = new URL("https://i.pinimg.com/736x/21/05/c7/2105c75456c3a44515c19d16d484f266.jpg");
        Location location5 = new Location("Wired Puppy", "Alternative Coffee Shop", url5, 55.98033, -3.219655, "A coffee shop in Granton for those with unusual tastes", true);
        locationRepository.save(location5);

        URL url6 = new URL("https://pm1.narvii.com/6633/9d3e0a91eb9eabdf4449da577196b48f9e95c967_hq.jpg");
        Location location6 = new Location("Coffee N'Stuff", "Locally owned sit-down cafe", url6, 55.922277, -3.255717, "A Coffee shop cum-corner newsagents in Longstone", true);
        locationRepository.save(location6);

        URL url7 = new URL("http://3.bp.blogspot.com/-PFh19ochNQA/U0bnQtGpr5I/AAAAAAAABqE/YESVSSIhWLQ/w1200-h630-p-k-no-nu/COFFEESHOP_sketchtime.jpg");
        Location location7 = new Location("Cafe & Cake", "Locally owned sit-down cafe", url7, 55.928817, -3.208364, "The best coffee in Morningside and delicious cakes, you deserve the best", true);
        locationRepository.save(location7);

        URL url8 = new URL("http://3.bp.blogspot.com/-26lHOAUoxJ8/VASuXyWwkdI/AAAAAAAAFps/8s3BwZrALdQ/s1600/panama-hotel-tea-and-coffee-house-03162014.gif");
        Location location8 = new Location("CostaBucks, Leith", "chain coffee shop", url8, 55.97389, -3.170617, "An upmarket coffee shop found in Leith", true);
        locationRepository.save(location8);

        /////////////////////////////////////////////////////

        User user1 = new User("Bob", "1-3-1986", 55.943721, -3.218266, "ASD");
        userRepository.save(user1);

        User user2 = new User("Tifa", "3-6-1992", 55.939298, -3.187362, "MD");
        userRepository.save(user2);

        User user3 = new User("Celes", "2-9-1979", 55.975991, -3.167015, "VI");
        userRepository.save(user3);

        User user4 = new User("Frank", "13-11-1983", 55.979849, -3.208611, "ID");
        userRepository.save(user4);

        User user5 = new User("Sue", "4-10-1968", 55.956312, -3.137705, "MH");
        userRepository.save(user5);

        User user6 = new User("Nathan", "9-20-1986", 55.932376, -3.137883, "VI");
        userRepository.save(user6);

        User user7 = new User("Deena", "18-8-1984", 55.920402, -3.208966, "ID");
        userRepository.save(user7);

        User user8 = new User("Frankie", "26-10-1990", 55.943817, -3.05521, "ID");
        userRepository.save(user8);

        /////////////////////////////////////////////////////

        Rating rating1 = new Rating("1/5/21", 5, 2, 4, 4, 2, "So glad I discovered this place", location1, user1);
        ratingRepository.save(rating1);

        Rating rating2 = new Rating("4/5/21", 2, 4, 3 ,2, 5, "Really enjoyed myself", location2, user2);
        ratingRepository.save(rating2);

        Rating rating3 = new Rating("5/5/21", 5, 1, 3, 3, 2, "The coffee wasn't great", location3, user3);
        ratingRepository.save(rating3);

        Rating rating4 = new Rating("7/5/21", 4, 1, 2, 3, 1, "Staff were so rude", location4, user4);
        ratingRepository.save(rating4);

        Rating rating5 = new Rating("10/5/21", 1, 5, 5, 4, 3,  "I really enjoyed the peace and quiet", location5, user5);
        ratingRepository.save(rating5);

        Rating rating6 = new Rating("11/5/21", 5, 4, 1, 2, 2, "The building was freezing", location6, user6);
        ratingRepository.save(rating6);

        Rating rating7 = new Rating("13/5/21", 5, 3, 4, 3, 1, "Food was cold", location7, user7);
        ratingRepository.save(rating7);

        Rating rating8 = new Rating("13/5/21", 5, 4, 5, 4, 4, "I will be back", location8, user8);
        ratingRepository.save(rating8);

    }
}
