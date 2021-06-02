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
import java.time.LocalDate;

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

        URL url1 = new URL("https://st.depositphotos.com/2777531/4560/v/950/depositphotos_4565647-stock-illustration-coffee-booth.jpg");
        Location location1 = new Location("The Coffee Stand", "Hut, Shack, Pop-up, Outdoor, Booth", url1, 55.951984, -3.197184, "A pop-up coffee shop located on Princes Street", false);
        locationRepository.save(location1);

        URL url2 = new URL("https://i.pinimg.com/originals/b2/7a/e9/b27ae9ff3285318f2328e90e3b124cd.jpg");
        Location location2 = new Location("Cafe Cockburn", "Local, Cafe, Bistro, Gastro, Family-Owned", url2, 55.95598, -3.190279, "A sit in coffee shop found on Cockburn street", true);
        locationRepository.save(location2);

        URL url3 = new URL("http://3.bp.blogspot.com/-26lHOAUoxJ8/VASuXyWwkdI/AAAAAAAAFps/8s3BwZrALdQ/s1600/panama-hotel-tea-and-coffee-house-03162014.gif");
        Location location3 = new Location("CostaBucks, Royal Mile", "Chain, Branded, Predictable, Shite, Boring", url3, 55.950398, -3.186646, "An upmarket coffee shop found on the Royal Mile", true);
        locationRepository.save(location3);

        URL url4 = new URL("https://i.pinimg.com/564x/c4/19/dd/c419dda9ebd9676d7235fa56ae41f79f.jpg");
        Location location4 = new Location("Topped Off", "Local, Cafe, Bistro, Gastro, Family-Owned", url4, 55.932928, -3.137025, "A more down to Earth cafe located in Craigmillar", true);
        locationRepository.save(location4);

        URL url5 = new URL("https://i.pinimg.com/736x/21/5/c7/215c75456c3a44515c19d16d484f266.jpg");
        Location location5 = new Location("Wired Puppy", "Alternative, Cafe, Local, Different, 420", url5, 55.98033, -3.219655, "A coffee shop in Granton for those with unusual tastes", true);
        locationRepository.save(location5);

        URL url6 = new URL("https://pm1.narvii.com/6633/9d3e0a91eb9eabdf4449da577196b48f9e95c967_hq.jpg");
        Location location6 = new Location("Coffee N'Stuff", "Local, Cafe, Quaint, Gastro, Family-Owned", url6, 55.922277, -3.255717, "A Coffee shop come-corner newsagents in Longstone", true);
        locationRepository.save(location6);

        URL url7 = new URL("http://3.bp.blogspot.com/-PFh19ochNQA/U0bnQtGpr5I/AAAAAAAABqE/YESVSSIhWLQ/w1200-h630-p-k-no-nu/COFFEESHOP_sketchtime.jpg");
        Location location7 = new Location("Cafe & Cake", "Local, Cafe, Bistro, Cozy, Family-Owned", url7, 55.928817, -3.208364, "The best coffee in Morningside and delicious cakes, you deserve the best", true);
        locationRepository.save(location7);

        URL url8 = new URL("http://3.bp.blogspot.com/-26lHOAUoxJ8/VASuXyWwkdI/AAAAAAAAFps/8s3BwZrALdQ/s1600/panama-hotel-tea-and-coffee-house-03162014.gif");
        Location location8 = new Location("CostaBucks, Leith", "Chain, Branded, Predictable, Shite, Boring", url8, 55.97389, -3.170617, "An upmarket coffee shop found in Leith", true);
        locationRepository.save(location8);

        URL url9 = new URL("https://i.pinimg.com/736x/5e/65/2c/5e652cc28b069f3e9d9acfaf0010c0a2.jpg");
        Location location9 = new Location("Coffee Express", "Hut, Shack, Pop-up, Outdoor, Booth", url9, 55.94415, -3.180412, "A pop-up coffee shop located on Bowmount place", false);
        locationRepository.save(location9);

        URL url10 = new URL("https://edinburghsketcher.com/wp-content/uploads/sites/43/2018/10/West-Bow-Victoria-Street.jpg");
        Location location10 = new Location("Last Drop (of Coffee)", "Local, Cafe, Bistro, Gastro, Family-Owned", url10, 55.947566, -3.194511, "A sit in coffee shop found on the Grassmarket", true);
        locationRepository.save(location10);

        URL url11 = new URL("https://i.pinimg.com/originals/60/6e/2c/606e2c304123a1753cd077420dd5200c.jpg");
        Location location11 = new Location("CostaBucks, Haymarket", "Chain, Branded, Predictable, Shite, Boring", url11, 55.946102, -3.217857, "An upmarket coffee shop found in Haymarket", true);
        locationRepository.save(location11);

        URL url12 = new URL("https://i.pinimg.com/564x/c4/19/dd/c419dda9ebd9676d7235fa56ae41f79f.jpg");
        Location location12 = new Location("La Bella Noia", "Local, Restaurant, Italian, Expensive, Family-Owned", url12, 55.969537, -3.160825, "An old-fashioned Italian restaurant just off the Leith Links", true);
        locationRepository.save(location12);

        URL url13 = new URL("https://petescully.files.wordpress.com/2013/11/city-hall-tavern-oct2013-sm.jpg");
        Location location13 = new Location("McGargles", "Pub, Bar, Drinks, Different, Alternative", url13, 55.955883, -3.151084, "A pub in Morningside, noted for its £2 pints of Tennants", true);
        locationRepository.save(location13);

        URL url14 = new URL("https://pm1.narvii.com/6633/9d3e0a91eb9eabdf4449da577196b48f9e95c967_hq.jpg");
        Location location14 = new Location("Coffee N'Stuff", "Local, Cafe, Bistro, Gastro, Family-Owned", url14, 55.941702, -3.280278, "A hip and trendy modern cafe in Corstorphine", true);
        locationRepository.save(location14);

        URL url15 = new URL("https://petescully.files.wordpress.com/2015/08/streets-sacramento.jpg");
        Location location15 = new Location("The Diving Bell", "Pub, Bar, Drinks, Different, Alternative", url15, 55.928817, -3.208364, "A stately & classy old pub in Duddingston", true);
        locationRepository.save(location15);

        URL url16 = new URL("http://1.bp.blogspot.com/-mzebBcMZpDU/V2FCznUj0oI/AAAAAAAAH1g/3fujjOUQXa8NjZpEczaWqykLXB03XguEgCK4B/s1600/Starbucks-vivo%2Bsketch.jpg");
        Location location16 = new Location("CostaBucks, Inverleith", "Chain, Branded, Predictable, Shite, Boring", url16, 55.966497, -3.213929, "An upmarket coffee shop found in Inverleith", true);
        locationRepository.save(location16);

        URL url17 = new URL("https://image.shutterstock.com/image-vector/philippines-beautiful-tropical-island-resort-260nw-1293386980.jpg");
        Location location17 = new Location("Cafe Tropical", "Cafe, Views, Outdoor, Gastro, 420", url17, 55.972646, -3.296068, "Seaside Cafe found in Cramond, overlooking the Island", true);
        locationRepository.save(location17);

        URL url18 = new URL("https://edinburghsketcher.com/wp-content/uploads/sites/43/PortobelloBeach_noprint.jpg");
        Location location18 = new Location("Tea by the Sea", "Local, Cafe, Quaint, Cozy, Bistro", url18, 55.966497, -3.213929, "Coffee on the coast, overlooking Portobello Beach", true);
        locationRepository.save(location18);

        URL url19 = new URL("https://live.staticflickr.com/5066/5653783689_4a37f39da7_z.jpg");
        Location location19 = new Location("Perché Sei Qui?", "Local, Restaurant, Italian, Expensive, Family-Owned", url19, 55.965001, -3.252663, "A Charming Italian Restaurant in scenic Drylaw", true);
        locationRepository.save(location19);

        URL url20 = new URL("https://plannersweb.com/wp-content/uploads/2013/11/Confluence-Riverfront-Park-sketch.jpg");
        Location location20 = new Location("The Coffee Pod", "Hut, Shack, Pop-up, Outdoor, Booth", url20, 55.922321, -3.15249, "A pop up coffee stand at the Inch Park", false);
        locationRepository.save(location20);

        URL url21 = new URL("https://4.bp.blogspot.com/-HBKOu6zJj9g/UeWTUYj9zbI/AAAAAAAADKE/LdupK0RdwTE/s1600/Maro%CC%81ti-Atlantisz_1.jpg");
        Location location21 = new Location("CostaBucks, Atlantis", "Chain, Branded, Underwater, Wet, Sharks", url21, 54.162434, -33.178498, "CostaBucks have even set up in the kingdom of Atlantis.", false);
        locationRepository.save(location21);

        URL url22 = new URL("https://images.squarespace-cdn.com/content/55c7cdbfe4b0ff8d21146290/1586233921061-IZDP99V41E2HDGWKAAL5/image-asset.jpeg?content-type=image%2Fjpeg");
        Location location22 = new Location("The Big Chill", "Cold, Icy, Penguins, Frost, Chilly", url22, -81.881419, -42.714023, "The Worlds Most Senseless Cafe", true);
        locationRepository.save(location22);

        /////////////////////////////////////////////////////

        /*
         MH - Mental Health
         MI - Mobility issues
         ASD - Autism Spectrum Disorder
         VI - Visual Impairment
         ID - Intellectual Disability
        */

        LocalDate dob1 = LocalDate.of(1986, 03, 01);
        User user1 = new User("Bob", dob1, 55.943721, -3.218266, "ASD");
        userRepository.save(user1);

        LocalDate dob2 = LocalDate.of(1992, 06, 03);
        User user2 = new User("Tifa", dob2, 55.939298, -3.187362, "MI");
        userRepository.save(user2);

        LocalDate dob3 = LocalDate.of(1979, 04, 21);
        User user3 = new User("Celes", dob3, 55.975991, -3.167015, "VI");
        userRepository.save(user3);

        LocalDate dob4 = LocalDate.of(1983, 11, 13);
        User user4 = new User("Frank", dob4, 55.979849, -3.208611, "ID");
        userRepository.save(user4);

        LocalDate dob5 = LocalDate.of(1968, 10, 04);
        User user5 = new User("Sue", dob5, 55.956312, -3.13775, "MH");
        userRepository.save(user5);

        LocalDate dob6 = LocalDate.of(1987, 04, 01);
        User user6 = new User("Nathan", dob6, 55.932376, -3.137883, "VI");
        userRepository.save(user6);

        LocalDate dob7 = LocalDate.of(1984, 07, 18);
        User user7 = new User("Deena", dob7, 55.920402, -3.208966, "ID");
        userRepository.save(user7);

        LocalDate dob8 = LocalDate.of(1990, 10, 26);
        User user8 = new User("Frankie", dob8, 55.943817, -3.5521, "ID");
        userRepository.save(user8);

        /////////////////////////////////////////////////////

        LocalDate date1 = LocalDate.of(2021, 05, 01);
        Rating rating1 = new Rating(date1, 05, 2, 4, 4, 2, "So glad I discovered this place", location1, user1);
        ratingRepository.save(rating1);

        LocalDate date2 = LocalDate.of(2021, 05, 04);
        Rating rating2 = new Rating(date2, 2, 4, 3, 2, 5, "Really enjoyed myself", location2, user2);
        ratingRepository.save(rating2);

        LocalDate date3 = LocalDate.of(2021, 05, 5);
        Rating rating3 = new Rating(date3, 5, 1, 3, 3, 2, "The coffee wasn't great", location3, user3);
        ratingRepository.save(rating3);

        LocalDate date4 = LocalDate.of(2021, 05, 07);
        Rating rating4 = new Rating(date4, 4, 1, 2, 3, 1, "Staff were so rude", location4, user4);
        ratingRepository.save(rating4);

        LocalDate date5 = LocalDate.of(2021, 05, 10);
        Rating rating5 = new Rating(date5, 1, 5, 5, 4, 3, "I really enjoyed the peace and quiet", location5, user5);
        ratingRepository.save(rating5);

        LocalDate date6 = LocalDate.of(2021, 05, 11);
        Rating rating6 = new Rating(date6, 5, 4, 1, 2, 2, "The building was freezing", location6, user6);
        ratingRepository.save(rating6);

        LocalDate date7 = LocalDate.of(2021, 05, 13);
        Rating rating7 = new Rating(date7, 5, 3, 4, 3, 1, "Food was cold", location7, user7);
        ratingRepository.save(rating7);

        LocalDate date8 = LocalDate.of(2021, 05, 13);
        Rating rating8 = new Rating(date8, 5, 4, 5, 4, 4, "I will be back", location8, user8);
        ratingRepository.save(rating8);

        LocalDate date9 = LocalDate.of(2021, 05, 29);
        Rating rating9 = new Rating(date9, 5, 4, 4, 4, 3, "Really loved it here", location9, user1);
        ratingRepository.save(rating9);

        LocalDate date10 = LocalDate.of(2021, 05, 18);
        Rating rating10 = new Rating(date10, 2, 1, 2, 2, 4, "Far too loud!", location10, user2);
        ratingRepository.save(rating10);

        LocalDate date11 = LocalDate.of(2021, 05, 07);
        Rating rating11 = new Rating(date11, 1, 1, 3, 1, 2, "Hated it", location11, user3);
        ratingRepository.save(rating11);

        LocalDate date12 = LocalDate.of(2021, 05, 30);
        Rating rating12 = new Rating(date12, 4, 5, 5, 3, 4, "I wish I had known about this place sooner", location12, user4);
        ratingRepository.save(rating12);

        LocalDate date13 = LocalDate.of(2021, 05, 24);
        Rating rating13 = new Rating(date13, 3, 4, 1, 1, 2, "Dark, full of interesting weirdos though", location13, user5);
        ratingRepository.save(rating13);

        LocalDate date14 = LocalDate.of(2021, 05, 19);
        Rating rating14 = new Rating(date14, 1, 3, 1, 1, 4, "Very dark, confusing to get around", location14, user6);
        ratingRepository.save(rating14);

        LocalDate date15 = LocalDate.of(2021, 05, 5);
        Rating rating15 = new Rating(date15, 5, 3, 4, 3, 5, "Thought the staff were really helpful", location15, user7);
        ratingRepository.save(rating15);

        LocalDate date16 = LocalDate.of(2021, 05, 17);
        Rating rating16 = new Rating(date16, 2, 2, 2, 2, 2, "Should have stayed at home", location16, user8);
        ratingRepository.save(rating16);

        LocalDate date17 = LocalDate.of(2021, 05, 18);
        Rating rating17 = new Rating(date17, 5, 5, 5, 5, 5, "I saw Harrison in there, oh my god *swoon*", location13, user6);
        ratingRepository.save(rating17);

        LocalDate date18 = LocalDate.of(2021, 05, 17);
        Rating rating18 = new Rating(date18, 4, 3, 4, 4, 5, "One of my favourites already", location5, user7);
        ratingRepository.save(rating18);

        LocalDate date19 = LocalDate.of(2021, 05, 22);
        Rating rating19 = new Rating(date19, 3, 2, 2, 2, 3, "Meh", location16, user2);
        ratingRepository.save(rating19);

        LocalDate date20 = LocalDate.of(2021, 05, 26);
        Rating rating20 = new Rating(date20, 1, 1, 1, 1, 1, "I saw Harrison in there, ew", location13, user2);
        ratingRepository.save(rating20);

        LocalDate date21 = LocalDate.of(2021, 05, 17);
        Rating rating21 = new Rating(date21, 5, 1, 4, 3, 3, "Such beautiful views, very loud though", location17, user3);
        ratingRepository.save(rating21);

        LocalDate date22 = LocalDate.of(2021, 05, 06);
        Rating rating22 = new Rating(date22, 5, 1, 2, 2, 5, "Sadly the beach was very busy, though the coffee was good", location18, user2);
        ratingRepository.save(rating22);

        LocalDate date23 = LocalDate.of(2021, 05, 22);
        Rating rating23 = new Rating(date23, 3, 2, 2, 1, 1, "Assolutamente terribile!", location19, user8);
        ratingRepository.save(rating23);

        LocalDate date24 = LocalDate.of(2021, 05, 17);
        Rating rating24 = new Rating(date24, 4, 2, 4, 4, 5, "Staff were very understanding, really liked them", location20, user7);
        ratingRepository.save(rating24);

        LocalDate date25 = LocalDate.of(2021, 05, 01);
        Rating rating25 = new Rating(date25, 1, 5, 1, 1, 1, "Honestly not sure what I was expecting, glup glup", location21, user3);
        ratingRepository.save(rating25);

        LocalDate date26 = LocalDate.of(2021, 05, 02);
        Rating rating26 = new Rating(date26, 1, 1, 1, 1, 1, "It was f****ing freezing", location22, user6);
        ratingRepository.save(rating26);

        LocalDate date27 = LocalDate.of(2021, 05, 26);
        Rating rating27 = new Rating(date27, 5, 2, 3, 4, 4, "Really made me appreciate Inch park", location20, user5);
        ratingRepository.save(rating27);

        LocalDate date28 = LocalDate.of(2021, 05, 26);
        Rating rating28 = new Rating(date28, 3, 1, 3, 3, 3, "VERY loud, too nosy for me to stay long", location18, user8);
        ratingRepository.save(rating28);
        
    }
}
