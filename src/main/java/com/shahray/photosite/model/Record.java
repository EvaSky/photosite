package com.shahray.photosite.model;

import java.time.LocalDateTime;

/**
 * Created by Оля on 27.08.2017.
 */
public class Record {

    private Integer id;
    private LocalDateTime dateTime;
    private String text;

    public Record() {
    }

    public Record(Integer id, LocalDateTime dateTime, String text) {
        this.id = id;
        this.dateTime = dateTime;
        this.text = text;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
