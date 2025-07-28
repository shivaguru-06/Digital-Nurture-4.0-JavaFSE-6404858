package com.shivaguru.country.service;

import com.shivaguru.country.entity.Country;
import com.shivaguru.country.repository.CountryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository repository;

    public List<Country> getAllCountries() {
        return repository.findAll();
    }

    public Optional<Country> getCountryById(Long id) {
        return repository.findById(id);
    }

    public Country createCountry(Country country) {
        return repository.save(country);
    }

    public Country updateCountry(Long id, Country updated) {
        return repository.findById(id).map(country -> {
            country.setName(updated.getName());
            country.setCapital(updated.getCapital());
            country.setRegion(updated.getRegion());
            return repository.save(country);
        }).orElse(null);
    }

    public void deleteCountry(Long id) {
        repository.deleteById(id);
    }

    public List<Country> searchCountriesByName(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }
}

