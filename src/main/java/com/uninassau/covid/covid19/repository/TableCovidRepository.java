package com.uninassau.covid.covid19.repository;

import com.uninassau.covid.covid19.domain.TableCovid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface TableCovidRepository extends JpaRepository<TableCovid,Long>{

    @Query(value = "SELECT * FROM table_covid WHERE location = ?1",nativeQuery = true)
    List<TableCovid> findByLocation(String location);

    @Query(value = "SELECT * FROM table_covid WHERE continent = ?1",nativeQuery = true)
    List<TableCovid> finByContinent(String continent);

    @Query(value = "SELECT DISTINCT(location) FROM table_covid;",nativeQuery = true)
    List<String> getAllCountries();

    @Query(value = "SELECT DISTINCT(continent) FROM table_covid;",nativeQuery = true)
    List<String> getAllContinent();

}
