package com.shahray.photosite.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "records")
public class Record {
    public static final int START_SEQ = 100000;

    @Id
    @SequenceGenerator(name = "global_seq", sequenceName = "global_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "global_seq")
    private Long id;
    private LocalDate date;
    private String text;

    public Record() {
    }

    public Record(String text) {
        this.date = LocalDate.now();
        this.text = text;
    }
}
