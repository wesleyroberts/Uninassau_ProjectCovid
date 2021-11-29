package com.uninassau.covid.covid19.resource;

import com.uninassau.covid.covid19.domain.TableCovid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;
import java.util.List;

public interface TableCovidResource {

    ResponseEntity<List<TableCovid>> getAll();
    ResponseEntity<List<TableCovid>> getByLocation(@RequestBody String location);
    ResponseEntity<List<TableCovid>> getByContinent(@PathVariable("continent") String continent);
    ResponseEntity<List<String>> getAllCountries();
    ResponseEntity<List<TableCovid>> updateTable() throws IOException;
}
