package com.uninassau.covid.covid19.resource.Impl;

import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import com.uninassau.covid.covid19.domain.TableCovid;
import com.uninassau.covid.covid19.repository.TableCovidRepository;
import com.uninassau.covid.covid19.resource.TableCovidResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/data")
public class TableCovidResourceImpl implements TableCovidResource {

    @Autowired
    TableCovidRepository tableCovidRepository;

    @Override
    @GetMapping(value = "/all")
    public ResponseEntity<List<TableCovid>> getAll() {
        try{
        return ResponseEntity.status(HttpStatus.FOUND).body(tableCovidRepository.findAll());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    @GetMapping(value = "/location/{location}")
    public ResponseEntity<List<TableCovid>> getByLocation(@PathVariable("location") String location) {
        try {
            return ResponseEntity.status(HttpStatus.FOUND).body(tableCovidRepository.findByLocation(location));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    @GetMapping(value = "/continent/{continent}")
    public ResponseEntity<List<TableCovid>> getByContinent(@PathVariable("continent") String continent) {
        try {
            return ResponseEntity.status(HttpStatus.FOUND).body(tableCovidRepository.finByContinent(continent));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    @Override
    @GetMapping(value = "/countries")
    public ResponseEntity<List<String>> getAllCountries() {
        try {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(tableCovidRepository.getAllCountries());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }



    @Override
    @PostMapping(value = "/gerar")
    public ResponseEntity<List<TableCovid>> updateTable() throws IOException {

        Reader reader = Files.newBufferedReader(Paths.get("C:\\Users\\wesley\\Documents\\Project Java\\Covid-19\\covid-19\\src\\main\\resources\\templates\\data.csv"));
        CsvToBean<TableCovid> lista = new CsvToBeanBuilder<TableCovid>(reader)
                .withType(TableCovid.class)
                .withIgnoreLeadingWhiteSpace(true)
                .build();
        List<TableCovid> result = new ArrayList<>(lista.parse());

        return ResponseEntity.status(HttpStatus.CREATED).body(tableCovidRepository.saveAll(result));


    }


}
