package com.access_aid.server.components;

import com.access_aid.server.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner{

    @Autowired
    LocationRepository locationRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

    }
}
