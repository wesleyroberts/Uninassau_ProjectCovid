package com.uninassau.covid.covid19.repository;

import com.uninassau.covid.covid19.domain.TableCovid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TableCovidRepository extends JpaRepository<TableCovid, Long> {
    List<TableCovid> getByLocation(String location);
}
