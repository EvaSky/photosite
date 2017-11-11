package com.shahray.photosite.controllers;

import com.shahray.photosite.model.Record;
import com.shahray.photosite.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

@RestController
public class RecordController {

    @Autowired
    private RecordService service;

    @RequestMapping(value = "/record", method = RequestMethod.POST)
    public Record create(@RequestBody @NonNull Record record) {
        return service.save(record);
    }

    @RequestMapping(value = "/record/{id}", method = RequestMethod.GET)
    public Record getById(@PathVariable @NonNull Long id) {
        return service.getById(id);
    }
}
