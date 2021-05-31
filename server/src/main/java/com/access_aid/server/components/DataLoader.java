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
//        Removed: url1, image1

        Location location1 = new Location("The Coffee Stand", "grab-and-go coffee shack", url1, 55.951984, -3.197184, "A pop-up coffee shop located on Princes Street", false);
        locationRepository.save(location1);

        URL url2 = new URL("https://i.pinimg.com/originals/b2/7a/e9/b27ae9ff32805318f2328e90e3b124cd.jpg");
//        Image image2 = ImageIO.read(url2);
//        Removed: url2, image2

        Location location2 = new Location("Cafe Cockburn", "Locally owned sit-down cafe", url2, 55.950598, -3.190279, "A sit in coffee shop found of Cockburn street", true);
        locationRepository.save(location2);

        URL url3 = new URL("http://3.bp.blogspot.com/-26lHOAUoxJ8/VASuXyWwkdI/AAAAAAAAFps/8s3BwZrALdQ/s1600/panama-hotel-tea-and-coffee-house-03162014.gif");
//        Image image3 = ImageIO.read(url3);
//        Removed: url3, image3
        Location location3 = new Location("CostaBucks", "chain coffee shop", url3, 55.950398, -3.186646, "An upmarket coffee shop found on the Royal Mile", true);
        locationRepository.save(location3);

        /////////////////////////////////////////////////////

        User user1 = new User("Bob", 1986, "ASD");
        userRepository.save(user1);

        User user2 = new User("Tifa", 1992, "MD");
        userRepository.save(user2);

        User user3 = new User("Celes", 1979, "VI");
        userRepository.save(user3);

        User user4 = new User("Frank", 1983, "ID");
        userRepository.save(user4);

        User user5 = new User("Sue", 1968, "MH");
        userRepository.save(user5);

        User user6 = new User("Nathan", 1986, "VI");
        userRepository.save(user6);

        User user7 = new User("Deena", 1984, "ID");
        userRepository.save(user7);

        /////////////////////////////////////////////////////

        Rating rating1 = new Rating("1/5/21", 5, 2, 4, 4, 2, "So glad I discovered this place", location1, user1);
        ratingRepository.save(rating1);

        Rating rating2 = new Rating("4/5/21", 2, 4, 3 ,2, 5, "Really enjoyed myself", location1, user2);
        ratingRepository.save(rating2);

        Rating rating3 = new Rating("5/5/21", 5, 1, 3, 3, 2, "The coffee wasn't great", location2, user3);
        ratingRepository.save(rating3);

        Rating rating4 = new Rating("7/5/21", 4, 1, 2, 3, 1, "Staff were so rude", location2, user4);
        ratingRepository.save(rating4);

        Rating rating5 = new Rating("10/5/21", 1, 5, 5, 4, 3,  "I really enjoyed the peace and quiet", location3, user5);
        ratingRepository.save(rating5);

        Rating rating6 = new Rating("11/5/21", 5, 4, 1, 2, 2, "The building was freezing", location3, user6);
        ratingRepository.save(rating6);

        Rating rating7 = new Rating("13/5/21", 5, 3, 4, 3, 1, "Food was cold", location1, user7);
        ratingRepository.save(rating7);

        Rating rating8 = new Rating("13/5/21", 5, 4, 5, 4, 4, "I will be back", location2, user1);
        ratingRepository.save(rating8);

    }
}
