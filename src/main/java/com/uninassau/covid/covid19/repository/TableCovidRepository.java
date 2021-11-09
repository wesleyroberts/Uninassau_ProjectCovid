package com.uninassau.covid.covid19.repository;

import com.uninassau.covid.covid19.domain.TableCovid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface TableCovidRepository extends JpaRepository<TableCovid,Long>{

    @Query(value = "SELECT * FROM table_covid WHERE location = ?1",nativeQuery = true)
    List<TableCovid> findByLocation(String location);

}
