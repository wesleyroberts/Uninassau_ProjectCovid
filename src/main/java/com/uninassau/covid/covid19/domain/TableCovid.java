package com.uninassau.covid.covid19.domain;

import com.opencsv.bean.CsvBindByName;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@Entity
public class TableCovid implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @CsvBindByName
    private String continent;
    @CsvBindByName
    private String location;
    @CsvBindByName
    private String date;
    @CsvBindByName
    private BigInteger total_cases;
    @CsvBindByName
    private BigInteger new_cases;
    @CsvBindByName
    private BigInteger total_deaths;
    @CsvBindByName
    private BigInteger new_deaths;
    @CsvBindByName
    private BigInteger population;

    public TableCovid(){ }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContinent() {
        return continent;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public BigInteger getTotal_cases() {
        return total_cases;
    }

    public void setTotal_cases(BigInteger total_cases) {
        this.total_cases = total_cases;
    }

    public BigInteger getNew_cases() {
        return new_cases;
    }

    public void setNew_cases(BigInteger new_cases) {
        this.new_cases = new_cases;
    }

    public BigInteger getTotal_deaths() {
        return total_deaths;
    }

    public void setTotal_deaths(BigInteger total_deaths) {
        this.total_deaths = total_deaths;
    }

    public BigInteger getNew_deaths() {
        return new_deaths;
    }

    public void setNew_deaths(BigInteger new_deaths) {
        this.new_deaths = new_deaths;
    }

    public BigInteger getPopulation() {
        return population;
    }

    public void setPopulation(BigInteger population) {
        this.population = population;
    }
}
