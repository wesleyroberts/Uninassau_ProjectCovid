package com.uninassau.covid.covid19.domain;

import com.opencsv.bean.CsvBindByName;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.SortComparator;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@ToString
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


}
