package com.shivaguru.country;

import com.shivaguru.country.entity.Country;
import com.shivaguru.country.repository.CountryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CountryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CountryServiceApplication.class, args);
    }

    // Populate data at application startup
    @Bean
    public CommandLineRunner dataLoader(CountryRepository countryRepository) {
        return args -> {
            if (countryRepository.count() == 0) {
                countryRepository.save(new Country("India", "New Delhi", "Asia"));
                countryRepository.save(new Country("USA", "Washington D.C.", "North America"));
                countryRepository.save(new Country("Germany", "Berlin", "Europe"));
            }
        };
    }
}


