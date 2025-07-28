package com.shivaguru.country.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.shivaguru.country.entity.Country;

public interface CountryRepository extends JpaRepository<Country, Long> {

    
    List<Country> findByNameContainingIgnoreCase(String name);
}



