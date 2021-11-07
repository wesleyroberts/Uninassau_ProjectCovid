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
        return ResponseEntity.status(HttpStatus.FOUND).body(tableCovidRepository.findAll());
    }
    @Override
    @GetMapping(value = "/location/{location}")
    public ResponseEntity<List<TableCovid>> getByLocation(@PathVariable("location") String location) {
        List<TableCovid> lista = new ArrayList<>();
        for (TableCovid t:tableCovidRepository.findAll()) {
            if(t.getLocation().equals("Angola")){
                lista.add(t);
            }
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(lista);
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
